---
name: ocr-ingest
description: |
  Use when importing files or directories into OCR Provenance, running OCR,
  retrying failures, reprocessing documents, or checking processing status.
---

# OCR Ingestion

Use this skill when the task is to add documents and make them searchable.

## Workflow

1. Select or create the target database with `ocr_db_list`, `ocr_db_select`, or `ocr_db_create`.
2. Ingest files with `ocr_ingest_files` or a folder with `ocr_ingest_directory`.
3. Run the pipeline with `ocr_process_pending`.
4. Check progress with `ocr_status`.
5. Use `ocr_retry_failed` for failed pending work and `ocr_reprocess` when a completed document needs OCR rerun with different settings.

## Quick Preview

Use `ocr_convert_raw` only when the user wants a quick OCR preview without creating database records.

## Follow-Up

After processing, use `ocr_search`, `ocr_rag_context`, `ocr_document_list`, or `ocr_document_get` to verify the result.
Use `ocr_health_check` if embeddings, provenance, or VLM output look incomplete.
