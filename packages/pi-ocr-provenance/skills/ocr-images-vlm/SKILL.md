---
name: ocr-images-vlm
description: |
  Use when extracting images from documents, listing image records, running VLM
  descriptions, searching images, or reanalyzing visual content.
---

# OCR Images And VLM

Use this skill when document images, figures, screenshots, charts, or visual descriptions matter.

## Workflow

1. Use `ocr_extract_images` to extract images from PDF or DOCX content.
2. Use `ocr_image_pending` and `ocr_vlm_status` to check what needs VLM processing.
3. Use `ocr_vlm_process` to process pending images for a document or database.
4. Use `ocr_image_list` and `ocr_image_get` to inspect image records.
5. Use `ocr_vlm_describe` for a single image when direct description is needed.
6. Use `ocr_image_search` for visual search by keyword or semantic similarity.
7. Use `ocr_image_reanalyze` when the user wants a new custom prompt or better description.

## Caution

Do not use `ocr_image_delete` unless the user explicitly asks to delete images.
Prefer reanalysis over deletion when descriptions are stale or low quality.
