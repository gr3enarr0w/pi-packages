---
name: ocr-admin-maintenance
description: |
  Use when managing OCR Provenance databases, backups, restores, sharing,
  configuration, maintenance, users, webhooks, dashboard, or license status.
---

# OCR Admin And Maintenance

Use this skill for administrative OCR Provenance MCP operations.

## Database Administration

Use `ocr_db_create`, `ocr_db_list`, `ocr_db_select`, and `ocr_db_stats` for normal database setup.
Use `ocr_db_tag`, `ocr_db_archive`, `ocr_db_unarchive`, `ocr_db_rename`, and `ocr_db_workspace` for organization.
Use `ocr_db_backup`, `ocr_db_restore`, `ocr_db_clone`, `ocr_db_import`, `ocr_db_merge`, and `ocr_db_snapshot` for portability and recovery.

## Sharing And Portability

Use `ocr_db_transfer`, `ocr_db_receive`, `ocr_db_share`, and `ocr_db_import_shared` for moving databases between systems.
Use `ocr_export_stream` for large JSONL exports.

## System Operations

Use `ocr_config_get` before changing settings.
Use `ocr_config_set` only with explicit user intent.
Use `ocr_db_maintenance` for storage analysis, vacuuming, WAL checks, and garbage collection.
Use `ocr_dashboard_status`, `ocr_dashboard_open`, and `ocr_license_status` for service and license checks.

## Caution

Treat delete, restore, merge, redaction, webhook, and maintenance operations as state-changing.
Explain the expected effect before running them.
