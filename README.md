# HiLo Sales Report

A daily sales and tip reporting app for HiLo Lounge in Athens, Georgia. Enter a shift's sales, drawer counts, tips, employee hours, and notes, then review and print a consolidated report.

## Features

- Record gross, morning, and night sales, payment totals, pay-ins, and pay-outs.
- Track drawer counts, cash owed, petty cash, and over/under amounts.
- Calculate tip totals and per-employee tip shares from hours worked.
- Add shift notes and review the report at `/final` before printing.
- Display a motivational quote fetched from the Type.fit quotes API.

Form data is held in the app's Redux store and is not persisted between page reloads.

## Tech Stack

React, TypeScript, Redux Toolkit, React Router, Vite, Semantic UI React, and Bootstrap.

## Getting Started

Requires Node.js 20.19 or later and npm.

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Project Commands

| Command             | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the Vite development server.       |
| `npm run typecheck` | Run the strict TypeScript check.         |
| `npm run lint`      | Run ESLint.                              |
| `npm test`          | Run the Vitest test suite.               |
| `npm run build`     | Create the production build in `build/`. |
| `npm run preview`   | Preview the production build locally.    |
| `npm start`         | Serve the existing `build/` directory.   |
