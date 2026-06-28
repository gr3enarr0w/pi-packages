import { describe, expect, it } from "vitest";
import {
  BALANCED_TOOLS,
  directToolsForProfile,
  MINIMAL_TOOLS,
  profileToolCount,
} from "#src/lib/profiles";

describe("OCR Provenance profiles", () => {
  it("returns minimal direct tools as a list", () => {
    const tools = directToolsForProfile("minimal");

    expect(tools).toEqual([...MINIMAL_TOOLS]);
    expect(profileToolCount("minimal")).toBe(MINIMAL_TOOLS.length);
  });

  it("returns balanced direct tools as a larger deduplicated list", () => {
    const tools = directToolsForProfile("balanced");

    expect(tools).toEqual([...new Set(BALANCED_TOOLS)]);
    expect(Array.isArray(tools) ? tools.length : 0).toBeGreaterThan(
      MINIMAL_TOOLS.length,
    );
    expect(profileToolCount("balanced")).toBe(
      Array.isArray(tools) ? tools.length : 0,
    );
  });

  it("returns true for the full profile", () => {
    expect(directToolsForProfile("full")).toBe(true);
    expect(profileToolCount("full")).toBe("all");
  });
});
