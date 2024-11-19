import { Node } from "prosemirror-model";
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
export declare function validateProseMirrorContent(prosemirrorDoc: JSONContent): {
    valid: boolean;
    message: string;
    doc: Node;
    details?: undefined;
} | {
    valid: boolean;
    message: any;
    details: any;
    doc?: undefined;
};
