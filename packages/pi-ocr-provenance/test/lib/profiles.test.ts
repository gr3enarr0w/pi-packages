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

    expect(Array.isArray(tools)).toBe(true);
    expect(tools).toEqual([...MINIMAL_TOOLS]);
    expect(tools).toContain("ocr_search");
    expect(tools).toContain("ocr_provenance_get");
    expect(tools).toContain("ocr_health_check");
    expect(tools).toHaveLength(19);
    expect(profileToolCount("minimal")).toBe(MINIMAL_TOOLS.length);
  });

  it("returns balanced direct tools as a larger deduplicated list", () => {
    const tools = directToolsForProfile("balanced");

    expect(Array.isArray(tools)).toBe(true);
    expect(tools).toEqual([...new Set(BALANCED_TOOLS)]);
    expect(tools).toHaveLength(62);
    expect(tools).toContain("ocr_vlm_describe");
    expect(tools).toContain("ocr_document_compare");
    expect(tools).toContain("ocr_cluster_documents");
    for (const tool of MINIMAL_TOOLS) {
      expect(tools).toContain(tool);
    }
    expect(profileToolCount("balanced")).toBe(
      Array.isArray(tools) ? tools.length : 0,
    );
  });

  it("returns true for the full profile", () => {
    expect(directToolsForProfile("full")).toBe(true);
    expect(profileToolCount("full")).toBe("all");
  });
});
