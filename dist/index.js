var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Koa from "koa";
import bodyParser from "@koa/bodyparser";
import { Node, Schema } from "prosemirror-model";
import { Transform } from "prosemirror-transform";
import schema from "../schema.json" assert { type: "json" };
export function validateProseMirrorContent(prosemirrorDoc) {
    try {
        // schema check before using it with new Schema
        // Attempt to create a ProseMirror document from the JSON content
        console.log(1);
        // @ts-ignore
        const schemaRuntime = new Schema(schema);
        console.log(2);
        const doc = Node.fromJSON(schemaRuntime, prosemirrorDoc);
        console.log(3);
        // If successful, return valid
        return { valid: true, message: "Document is valid", doc };
    }
    catch (error) {
        // Catch validation errors
        return { valid: false, message: error === null || error === void 0 ? void 0 : error.message, details: error.stack };
    }
}
const app = new Koa();
// Use body parser middleware
app.use(bodyParser());
// Health Check Route
app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (ctx.path === "/" && ctx.method === "GET") {
        ctx.body = "ProseMirror Backend is running";
        return;
    }
    yield next();
}));
// Validate ProseMirror Content Route
app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (ctx.path === "/validate" && ctx.method === "POST") {
        const content = ctx.request.body;
        console.log("log", content);
        // Validate content
        const validationResult = validateProseMirrorContent(content);
        // Return result
        if (validationResult.valid) {
            ctx.status = 200;
            ctx.body = validationResult;
        }
        else {
            ctx.status = 400;
            ctx.body = validationResult;
        }
        return;
    }
    yield next();
}));
// Simple Transform of given ProseMirror content Route
app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
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
            const paragraphNode = doc.type.schema.nodes.paragraph.create({}, doc.type.schema.text("This is a newly created paragraph."));
            if (!paragraphNode) {
                throw new Error("Failed to create paragraph node.");
            }
            tr.insert(0, paragraphNode);
            // Get the transformed document
            const transformedDoc = tr.doc.toJSON();
            // Return the transformed document
            ctx.status = 200;
            ctx.body = { valid: true, transformedDoc };
        }
        catch (error) {
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
    yield next();
}));
// Catch-all Route
app.use((ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ctx.body) {
        ctx.body = "Hello World";
    }
}));
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
