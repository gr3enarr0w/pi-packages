---
name: ocr-search-rag
description: |
  Use when answering questions from OCR Provenance documents, searching corpora,
  building RAG context, saved searches, or cross-database search.
---

# OCR Search And RAG

Use this skill when the user asks a question about document contents or asks to find evidence.

## Core Rules

Use `ocr_rag_context` when answering a user question from documents.
Use a full natural-language question of at least eight words because the OCR Provenance tool descriptions require that shape for RAG and primary search.
Use `ocr_search` for direct search when you need ranked chunks or mixed keyword/semantic behavior.

## Search Flow

1. Use `ocr_db_select` if the active database is uncertain.
2. Use `ocr_rag_context` for answerable questions.
3. Use `ocr_search` when you need inspectable result sets.
4. Use `ocr_chunk_context` to expand around search hits.
5. Use `ocr_document_get`, `ocr_document_page`, or `ocr_chunk_get` for exact evidence.
6. Use `ocr_search_cross_db` when the answer may live outside the active database.

## Saved And Exported Searches

Use `ocr_search_saved` for recurring searches.
Use `ocr_search_export` when the user wants a file or handoff artifact.
