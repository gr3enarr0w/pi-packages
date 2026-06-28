import { readFile, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import {
  directToolsForProfile,
  OCR_PROVENANCE_SERVER_NAME,
  type OcrProvenanceProfile,
} from "./profiles";

interface McpServerConfig {
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  directTools?: boolean | string[];
  [key: string]: unknown;
}

interface McpConfig {
  settings?: Record<string, unknown>;
  mcpServers?: Record<string, McpServerConfig>;
  [key: string]: unknown;
}

export interface ApplyProfileInput {
  profile: OcrProvenanceProfile;
  configPath?: string;
  serverName?: string;
  dryRun?: boolean;
}

export interface ApplyProfileResult {
  configPath: string;
  serverName: string;
  profile: OcrProvenanceProfile;
  previousDirectTools: boolean | string[] | undefined;
  nextDirectTools: boolean | string[];
  changed: boolean;
  dryRun: boolean;
}

export function defaultMcpConfigPath(): string {
  return join(homedir(), ".pi", "agent", "mcp.json");
}

function normalizeMcpConfigPath(configPath: string): string {
  const resolved = resolve(configPath.replace(/^~(?=$|\/)/, homedir()));
  const file = basename(resolved);
  const parent = basename(dirname(resolved));
  if (file === ".mcp.json") return resolved;
  if (file === "mcp.json" && (parent === ".pi" || parent === "agent")) {
    return resolved;
  }
  throw new Error(
    `Refusing to write ${resolved}. config_path must point to mcp.json, .pi/mcp.json, or .mcp.json.`,
  );
}

export async function applyOcrProfile(
  input: ApplyProfileInput,
): Promise<ApplyProfileResult> {
  const configPath = normalizeMcpConfigPath(
    input.configPath ?? defaultMcpConfigPath(),
  );
  const serverName = input.serverName ?? OCR_PROVENANCE_SERVER_NAME;
  const raw = await readFile(configPath, "utf8");
  const config = JSON.parse(raw) as McpConfig;
  const server = config.mcpServers?.[serverName];
  if (!server) {
    throw new Error(
      `MCP server "${serverName}" was not found in ${configPath}.`,
    );
  }

  const previousDirectTools = server.directTools;
  const nextDirectTools = directToolsForProfile(input.profile);
  server.directTools = nextDirectTools;
  const changed =
    JSON.stringify(previousDirectTools) !== JSON.stringify(nextDirectTools);

  if (!input.dryRun && changed) {
    await writeFile(`${configPath}.bak`, raw, "utf8");
    await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  }

  return {
    configPath,
    serverName,
    profile: input.profile,
    previousDirectTools,
    nextDirectTools,
    changed,
    dryRun: Boolean(input.dryRun),
  };
}
