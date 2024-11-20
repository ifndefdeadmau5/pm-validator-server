import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const schemaPath = path.resolve(__dirname, "schema.json");
const outputPath = path.resolve(__dirname, "schema-types.ts");

function generateTypes(schema: any): string {
  const nodes = schema.nodes || {};
  const marks = schema.marks || {};

  const nodeTypes = Object.entries(nodes)
    .map(([nodeName, nodeSpec]: any) => {
      const attrs = nodeSpec.attrs || {};
      const attrsType = Object.entries(attrs)
        .map(([attrName, attrSpec]: any) => {
          const defaultValue = attrSpec.default;
          const type = Array.isArray(defaultValue)
            ? "any[]"
            : typeof defaultValue === "object"
            ? "any"
            : typeof defaultValue;
          return `${attrName}: ${type};`;
        })
        .join("\n    ");
      return `${nodeName}: {
    ${attrsType || "id: never;"}
  };`;
    })
    .join("\n  ");

  const runtimeNodeTypes = Object.keys(nodes)
    .map((nodeName) => `"${nodeName}": true`)
    .join(",\n  ");

  return `
export type NodeAttrs = {
  ${nodeTypes}
};

export const NodeAttrsRuntime: Record<string, boolean> = {
  ${runtimeNodeTypes}
};

export type AttrsByNode<N extends keyof NodeAttrs> = NodeAttrs[N];
`;
}

const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
const generatedTypes = generateTypes(schema);

fs.writeFileSync(outputPath, generatedTypes);
console.log("TypeScript types generated successfully.");
