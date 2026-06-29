import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { registerOcrProvenanceProfile } from "./tools/ocr-provenance-profile";

export default function piOcrProvenanceExtension(pi: ExtensionAPI): void {
  registerOcrProvenanceProfile(pi);
}
