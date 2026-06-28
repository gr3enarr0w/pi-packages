---
name: ocr-provenance-audit
description: |
  Use when verifying OCR integrity, tracing provenance chains, exporting audit data,
  investigating processing timelines, or checking processor statistics.
---

# OCR Provenance Audit

Use this skill when trust, lineage, or auditability matters.

## Core Flow

1. Use `ocr_provenance_get` to retrieve the provenance chain for a document, chunk, image, extraction, or other entity.
2. Use `ocr_provenance_verify` to check hash integrity and chain consistency.
3. Use `ocr_provenance_timeline` to understand document processing order and durations.
4. Use `ocr_provenance_query` for filtered audit exploration.
5. Use `ocr_provenance_processor_stats` to summarize processor performance.
6. Use `ocr_provenance_export` when the user needs JSON, PROV-JSON, or CSV output.

## Audit Log

Use `ocr_audit_query` for user/action audit events.
Use `ocr_export_audit_log` only when an export is explicitly requested.

## Evidence Discipline

When answering from provenance data, identify the entity type, document ID, verification status, and any hash or chain errors.
