---
name: ocr-setup
description: |
  Use when setting up or diagnosing OCR Provenance MCP databases, profile selection,
  server health, license status, VLM status, or Pi direct-tool exposure.
---

# OCR Provenance Setup

Use this skill before changing OCR Provenance MCP configuration or direct-tool profiles.

## First Checks

1. Use `ocr_guide` to understand current database state and suggested next steps.
2. Use `ocr_db_list`, `ocr_db_recent`, and `ocr_db_stats` to identify the active corpus.
3. Use `ocr_health_check` for integrity, missing embeddings, orphaned provenance, or VLM gaps.
4. Use `ocr_vlm_status` before image-heavy work.
5. Use `ocr_provenance_profile` to switch Pi direct-tool profiles when the current session needs more or fewer direct tools.

## Profile Guidance

Use `minimal` for general coding sessions where OCR is occasional.
Use `balanced` for normal document-intelligence sessions.
Use `full` only for dedicated OCR sessions where tool visibility matters more than prompt/tool-list size.

## Caution

Do not run destructive or repair actions without user intent.
Tools such as `ocr_db_delete`, `ocr_document_delete`, `ocr_image_delete`, `ocr_cluster_delete`, and `ocr_redact_apply` require explicit confirmation and should be treated as state-changing operations.
