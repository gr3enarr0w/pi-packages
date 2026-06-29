import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { applyOcrProfile } from "#src/lib/mcp-config";
import { MINIMAL_TOOLS } from "#src/lib/profiles";

async function writeFixture() {
  const dir = await mkdtemp(join(tmpdir(), "pi-ocr-"));
  const piDir = join(dir, ".pi");
  await mkdir(piDir, { recursive: true });
  const configPath = join(piDir, "mcp.json");
  await writeFile(
    configPath,
    `${JSON.stringify(
      {
        settings: { toolPrefix: "server", directTools: false },
        mcpServers: {
          "ocr-provenance": {
            command: "pi-ocr-provenance-mcp",
            directTools: true,
          },
        },
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  return configPath;
}

describe("applyOcrProfile", () => {
  it("writes a selected profile and preserves the server config", async () => {
    const configPath = await writeFixture();

    const result = await applyOcrProfile({
      profile: "minimal",
      configPath,
    });

    const updated = JSON.parse(await readFile(configPath, "utf8")) as {
      mcpServers: {
        "ocr-provenance": { command: string; directTools: string[] };
      };
    };
    expect(result.changed).toBe(true);
    expect(updated.mcpServers["ocr-provenance"].command).toBe(
      "pi-ocr-provenance-mcp",
    );
    expect(updated.mcpServers["ocr-provenance"].directTools).toEqual([
      ...MINIMAL_TOOLS,
    ]);
  });

  it("does not write when dry_run is true", async () => {
    const configPath = await writeFixture();
    const before = await readFile(configPath, "utf8");

    const result = await applyOcrProfile({
      profile: "minimal",
      configPath,
      dryRun: true,
    });

    expect(result.dryRun).toBe(true);
    expect(await readFile(configPath, "utf8")).toBe(before);
  });

  it("rejects non-MCP config paths", async () => {
    const dir = await mkdtemp(join(tmpdir(), "pi-ocr-"));
    const configPath = join(dir, "shellrc");
    await writeFile(configPath, "export PATH=/tmp\n", "utf8");

    await expect(
      applyOcrProfile({
        profile: "minimal",
        configPath,
      }),
    ).rejects.toThrow("~/.pi/agent/mcp.json");
  });
});
