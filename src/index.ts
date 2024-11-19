import Koa from "koa";
import bodyParser from "@koa/bodyparser";
import { Node, Schema, type NodeType } from "prosemirror-model";
import { Transform } from "prosemirror-transform";
import schema from "../schema.json" assert { type: "json" };
// import schema from "../simpleSchema.json" assert { type: "json" };

export declare type JSONContent = {
  type?: string;
  attrs?: Record<string, any>;
  content?: JSONContent[];
  marks?: {
    type: string;
    attrs?: Record<string, any>;
    [key: string]: any;
  }[];
  text?: string;
  [key: string]: any;
};

export function validateProseMirrorContent(prosemirrorDoc: JSONContent) {
  try {
    // schema check before using it with new Schema

    // @ts-ignore
    const schemaRuntime = new Schema(schema);
    const doc = Node.fromJSON(schemaRuntime, prosemirrorDoc);
    // If successful, return valid
    return { valid: true, message: "Document is valid", doc };
  } catch (error: any) {
    // Catch validation errors
    return { valid: false, message: error?.message, details: error.stack };
  }
}

const app = new Koa();

// Use body parser middleware
app.use(bodyParser());

// Health Check Route
app.use(async (ctx, next) => {
  if (ctx.path === "/" && ctx.method === "GET") {
    ctx.body = "ProseMirror Backend is running";
    return;
  }
  await next();
});

// Validate ProseMirror Content Route
app.use(async (ctx, next) => {
  if (ctx.path === "/validate" && ctx.method === "POST") {
    const content = ctx.request.body;

    console.log("log", content);

    // Validate content
    const validationResult = validateProseMirrorContent(content);

    // Return result
    if (validationResult.valid) {
      ctx.status = 200;
      ctx.body = validationResult;
    } else {
      ctx.status = 400;
      ctx.body = validationResult;
    }
    return;
  }
  await next();
});

// Simple Transform of given ProseMirror content Route
app.use(async (ctx, next) => {
  if (ctx.path === "/transform" && ctx.method === "POST") {
    const content = ctx.request.body;

    // Validate the ProseMirror document
    const validationResult = validateProseMirrorContent(content);

    if (!validationResult.valid) {
      ctx.status = 400;
      ctx.body = { valid: false, message: validationResult.message };
      return;
    }

    const { doc } = validationResult;

    if (!doc) {
      ctx.status = 400;
      ctx.body = { valid: false, message: "Document is invalid." };
      return;
    }

    try {
      // Create a new Transform instance
      const tr = new Transform(doc);

      const paragraphNode = doc.type.schema.nodes.paragraph.create(
        {},
        doc.type.schema.text("This is a newly created paragraph.")
      );

      if (!paragraphNode) {
        throw new Error("Failed to create paragraph node.");
      }

      tr.insert(0, paragraphNode);

      // Get the transformed document
      const transformedDoc = tr.doc.toJSON();

      // Return the transformed document
      ctx.status = 200;
      ctx.body = { valid: true, transformedDoc };
    } catch (error: any) {
      // Handle transformation errors
      ctx.status = 500;
      ctx.body = {
        valid: false,
        message: "Transformation failed.",
        details: error.message,
      };
    }

    return;
  }
  await next();
});

// Catch-all Route
app.use(async (ctx) => {
  if (!ctx.body) {
    ctx.body = "Hello World";
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
