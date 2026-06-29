---
name: ocr-comparison-clustering
description: |
  Use when comparing documents, discovering similar pairs, running batch comparison,
  clustering corpora, inspecting clusters, or checking embeddings.
---

# OCR Comparison And Clustering

Use this skill when the task involves similarity, versions, clusters, or corpus structure.

## Comparison Flow

1. Use `ocr_comparison_discover` to find likely similar pairs.
2. Use `ocr_document_compare` for a direct pairwise diff.
3. Use `ocr_comparison_batch` for multiple pairs.
4. Use `ocr_comparison_list` and `ocr_comparison_get` to inspect existing comparisons.
5. Use `ocr_comparison_matrix` for NxN corpus similarity.

## Clustering Flow

1. Use `ocr_embedding_stats` to confirm embedding coverage first.
2. Use `ocr_cluster_documents` to group documents.
3. Use `ocr_cluster_list` and `ocr_cluster_get` to inspect clusters.
4. Use `ocr_cluster_assign` for a new document.

## Caution

Do not use cluster mutation tools such as `ocr_cluster_delete`, `ocr_cluster_reassign`, or `ocr_cluster_merge` unless the user asks to change cluster state.
