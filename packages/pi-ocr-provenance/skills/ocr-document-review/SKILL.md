---
name: ocr-document-review
description: |
  Use when inspecting document structure, pages, chunks, tables, summaries,
  duplicate/version detection, exports, or document-level reports.
---

# OCR Document Review

Use this skill when the user wants to inspect or understand a specific document or corpus.

## Inspection Flow

1. Use `ocr_document_list` to locate the document.
2. Use `ocr_document_get` for metadata, quality, status, and paginated text.
3. Use `ocr_document_structure` to inspect headings, tables, figures, tree, or outline.
4. Use `ocr_document_page` for page-level reading.
5. Use `ocr_chunk_list`, `ocr_chunk_get`, and `ocr_chunk_context` for chunk-level evidence.

## Analysis Tools

Use `ocr_document_find_similar` for related documents.
Use `ocr_document_duplicates` for exact or near duplicate detection.
Use `ocr_document_versions` for re-ingested versions.
Use `ocr_document_tables` and `ocr_table_export` when tables matter.
Use `ocr_document_summarize` or `ocr_corpus_summarize` when the user asks for summaries.

## Caution

Do not call `ocr_document_delete` unless the user explicitly asks to delete a document.
Do not update metadata or workflow states unless the user asks for mutation.
