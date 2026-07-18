# Business Planner

Project Summary: A full-stack web app for building Portuguese business plans — a report editor plus a financial engine that reproduces the official spreadsheet model cell-for-cell, with real-time co-editing and PDF/Word export.

## What it is

Business Planner came out of a real annoyance: in Portugal, these business plans get built in one enormous, fragile Excel template that economists and consultants pass around and break constantly. I wanted to replace that with a web app where the writing and the numbers live in the same place — and where the numbers actually match the official template.

You write the plan's sections in a structured editor, fill in the financial assumptions (the "Pressupostos"), and the backend recalculates the whole set of statements — income statement, balance sheet, cash flow, financial evaluation and ratios — for the years 2025 through 2030.

## The financial engine

This was the hard part, and the reason the project exists. The official template is around 2,800 formulas spread across 15 sheets. I extracted the whole thing to JSON, translated every Excel cell reference into a semantic id like `pressupostos.total_de_vendas_e_servicos_prestados[2025]`, and rebuilt it server-side.

The engine loads that model, builds the dependency graph, sorts it topologically and evaluates the formulas in order. About a quarter of them were `SUM`/`SUMIF` running over variable-length ranges — products, raw materials, personnel, assets, loans — which don't map onto single cells. Those I modelled as real relational tables and aggregate back into the engine. Every cell also keeps the value it had in the original spreadsheet, so I can check the engine's output against the real template instead of trusting it.

## The rest of the app

- **Real-time collaboration** — share a project as owner, editor or viewer, with live presence and remote cursors over WebSockets (Django Channels + Redis).
- **AI assistance** — a "complete with AI" button for drafting sections and a project-aware chat. Each user brings their own OpenAI key, stored encrypted; there's no shared server key.
- **Export** — server-side PDF (ReportLab) and Word (python-docx), charts included, behind a pre-export checklist.
- A per-project Kanban board, a formulas tab where you can override any engine cell, a PT/EN interface, and dark mode.

## Stack

Django + Django REST Framework on the backend (ASGI, JWT auth, Channels for the websockets); React 19 + Vite on the frontend with a plain CSS design-token system, no framework. PostgreSQL in production, SQLite in dev. The whole thing ships as a Docker Compose stack — nginx, Django, Postgres and Redis.

## What I took from it

- Turning a 2,800-formula spreadsheet into a dependency graph taught me more about topological ordering and validating your own output than any exercise had.
- Real-time co-editing is deceptively hard: presence, cursors and conflicting edits all have to stay in agreement.
- Holding the output to "matches the official template cell-for-cell" forced a lot of discipline around testing against known values — which turned out to be the only way I trusted the thing at all.
