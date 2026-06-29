# pi-ocr-provenance

Pi skills and direct-tool profiles for the OCR Provenance MCP server.

This package does not replace `ocr-provenance-mcp`.
It organizes the large OCR Provenance MCP surface into workflow skills and applies practical direct-tool profiles for Pi.

## Install

```bash
pi install npm:@gr3enarr0w/pi-ocr-provenance
```

During local development, install from the package path:

```bash
pi install ./packages/pi-ocr-provenance
```

## Profiles

Use the `ocr_provenance_profile` tool to apply one of three profiles to Pi's `mcp.json`.

| Profile    | Direct tools | Purpose                                                                                         |
| ---------- | -----------: | ----------------------------------------------------------------------------------------------- |
| `minimal`  |        Small | Core database selection, ingestion, status, search, document read, and provenance verification. |
| `balanced` |       Medium | Recommended default for daily document intelligence work.                                       |
| `full`     |          All | Dedicated OCR sessions where every OCR Provenance MCP tool should be promoted directly.         |

All profiles keep the full MCP server configured.
Tools outside a direct profile remain available through the `mcp` proxy.

## Skills

The package ships skills for setup, ingestion, search/RAG, document review, provenance audit, image/VLM analysis, comparison/clustering, contract/compliance, and admin maintenance.
Load the narrowest skill that matches the task before using OCR Provenance tools.
