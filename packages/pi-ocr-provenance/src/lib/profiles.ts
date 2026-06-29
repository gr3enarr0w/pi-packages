import balancedProfile from "#profiles/balanced";
import fullProfile from "#profiles/full";
import minimalProfile from "#profiles/minimal";

export type OcrProvenanceProfile = "minimal" | "balanced" | "full";

export const OCR_PROVENANCE_SERVER_NAME = "ocr-provenance";

interface ToolListProfile {
  profile: "minimal" | "balanced";
  description: string;
  directTools: string[];
}

interface FullProfile {
  profile: "full";
  description: string;
  directTools: true;
}

const MINIMAL_PROFILE = minimalProfile as ToolListProfile;
const BALANCED_PROFILE = balancedProfile as ToolListProfile;
const FULL_PROFILE = fullProfile as FullProfile;

export const MINIMAL_TOOLS = MINIMAL_PROFILE.directTools;
export const BALANCED_TOOLS = BALANCED_PROFILE.directTools;

export function directToolsForProfile(
  profile: OcrProvenanceProfile,
): true | string[] {
  if (profile === "full") return FULL_PROFILE.directTools;
  if (profile === "balanced") return [...new Set(BALANCED_PROFILE.directTools)];
  return [...new Set(MINIMAL_PROFILE.directTools)];
}

export function profileToolCount(
  profile: OcrProvenanceProfile,
): "all" | number {
  const directTools = directToolsForProfile(profile);
  return directTools === true ? "all" : directTools.length;
}
