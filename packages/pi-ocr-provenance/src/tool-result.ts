interface ToolResult {
  content: { type: "text"; text: string }[];
  details: undefined;
  isError: boolean;
}

export function ok(text: string): ToolResult {
  return {
    content: [{ type: "text", text }],
    details: undefined,
    isError: false,
  };
}

export function err(text: string): ToolResult {
  return {
    content: [{ type: "text", text }],
    details: undefined,
    isError: true,
  };
}
