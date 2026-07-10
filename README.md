# Learning Playwright 3.x

This repository contains a simple Playwright learning project for Playwright 3.x.

## Structure

- `Chapter_01_Basics_JavaScript/HelloWorld.js` — example JavaScript file.

## Notes

- The repository is initialized for Git and pushed to GitHub.
- Add Playwright tests and supporting files as you continue learning.

## Getting Started

1. Install dependencies if needed.
2. Run tests or scripts from the repository root.

```powershell
# install dependencies
npm install

# run the sample TypeScript file
npm run start

# run a Playwright test
npm test
```

## Use this in any TypeScript project

This repo includes a project-local TypeScript toolchain:

```powershell
# run any TypeScript file using the local ts-node binary
npm run ts-node -- path\to\your-file.ts

# compile TypeScript using the local tsc
npm run tsc -- -p tsconfig.json
```

This keeps the project portable and avoids requiring a global `ts-node` install.
