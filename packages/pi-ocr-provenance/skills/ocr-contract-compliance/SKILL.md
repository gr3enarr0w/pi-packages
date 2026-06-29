---
name: ocr-contract-compliance
description: |
  Use when extracting contract terms, obligations, playbook deviations,
  compliance reports, HIPAA/SOC/SOX exports, or redaction workflows.
---

# OCR Contract, Compliance, And Redaction

Use this skill for regulated or legally sensitive document workflows.

## Contract Tools

Use `ocr_contract_extract` to extract contract-specific fields.
Use `ocr_obligation_list`, `ocr_obligation_update`, and `ocr_obligation_calendar` for obligation tracking.
Use `ocr_playbook_create`, `ocr_playbook_compare`, and `ocr_playbook_list` for preferred-term deviation review.

## Compliance Tools

Use `ocr_compliance_report` for a general compliance overview.
Use `ocr_compliance_hipaa` for HIPAA-specific reporting.
Use `ocr_compliance_export` for SOC 2, HIPAA, SOX, or other regulatory exports.

## Redaction Tools

Use `ocr_redact_analyze` before any redaction.
Do not use `ocr_redact_apply` without explicit user confirmation because it changes OCR text, chunks, and embeddings.
Use `ocr_redact_status` to verify redaction state.
Use `ocr_redact_restore` only when the user explicitly wants rollback.
