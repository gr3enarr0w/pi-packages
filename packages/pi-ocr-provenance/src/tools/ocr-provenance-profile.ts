import type {
  ExtensionAPI,
  ExtensionContext,
} from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { applyOcrProfile } from "#src/lib/mcp-config";
import {
  OCR_PROVENANCE_SERVER_NAME,
  type OcrProvenanceProfile,
  profileToolCount,
} from "#src/lib/profiles";
import { err, ok } from "#src/tool-result";

const PROFILE_VALUES: OcrProvenanceProfile[] = ["minimal", "balanced", "full"];

export function registerOcrProvenanceProfile(pi: ExtensionAPI): void {
  pi.registerTool({
    name: "ocr_provenance_profile",
    label: "OCR Provenance Profile",
    description:
      "Apply a direct-tool profile for the OCR Provenance MCP server in Pi's mcp.json.",
    promptSnippet:
      "ocr_provenance_profile: Switch OCR Provenance direct tools between minimal, balanced, and full profiles.",
    parameters: Type.Object({
      profile: Type.Union(
        PROFILE_VALUES.map((profile) => Type.Literal(profile)),
        {
          description:
            "Direct-tool profile to apply. balanced is recommended for normal use.",
        },
      ),
      server_name: Type.Optional(
        Type.String({
          description: `MCP server name to update. Defaults to ${OCR_PROVENANCE_SERVER_NAME}.`,
        }),
      ),
      config_path: Type.Optional(
        Type.String({
          description:
            "Path to Pi MCP config. Must be mcp.json, .pi/mcp.json, or .mcp.json. Defaults to ~/.pi/agent/mcp.json.",
        }),
      ),
      dry_run: Type.Optional(
        Type.Boolean({
          description:
            "Preview the change without writing mcp.json or a backup file.",
        }),
      ),
    }),
    async execute(
      _toolCallId,
      params,
      _signal,
      _onUpdate,
      _ctx: ExtensionContext,
    ) {
      try {
        const profile = params.profile as OcrProvenanceProfile;
        const result = await applyOcrProfile({
          profile,
          serverName: params.server_name,
          configPath: params.config_path,
          dryRun: params.dry_run,
        });
        const count = profileToolCount(profile);
        const countLabel =
          count === "all" ? "all cached tools" : `${count} tools`;
        const action = result.dryRun
          ? "Would apply"
          : result.changed
            ? "Applied"
            : "Already using";
        return ok(
          [
            `${action} OCR Provenance profile "${profile}" for "${result.serverName}".`,
            `Direct tools: ${countLabel}.`,
            `Config: ${result.configPath}`,
            result.dryRun || !result.changed
              ? "No files were changed."
              : "A .bak file was written before changes.",
            "Reload or restart Pi for direct-tool registration to refresh.",
          ].join("\n"),
        );
      } catch (e) {
        return err(e instanceof Error ? e.message : String(e));
      }
    },
  });
}
