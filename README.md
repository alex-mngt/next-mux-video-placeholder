# WeAreStudio99 - Mux Video Placeholders

Welcome to the **mux-video-placeholder** development environment setup guide. This document provides comprehensive instructions to facilitate a smooth and consistent setup across various development environments.

## Prerequisites

### Node.js

We use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to ensure a consistent Node.js version. Install NVM and set the Node.js version for this project with :

```bash
nvm install
```

### Pnpm

Pnpm is the package manager of choice for this project. Make sure you are using at least Node.js 14 _(lts/fermium)_ and then activate it through `corepack` :

```bash
corepack enable pnpm
```

To ensure consistent behaviour across all development environments, they should all use the same version of pnpm. That's why an explicit pnpm version is specified in the [package.json](). Check if your pnpm version is matching the one under the `packageManager` property :

```bash
pnpm -v
```

If it is not the case, install the corresponding version :

```bash
corepack install
```

### Visual Studio Code

Consistency in TypeScript versions is crucial. For VSCode users, ensure that you [use the workspace version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript) and not the built-in version provided by VSCode.

### Optional: Optimized VSCode Configuration

For an enhanced development experience with project-specific editor settings, duplicate `.vscode.sample` as `.vscode` :

```bash
cp -R .vscode.sample .vscode
```

## Getting Started

Ensure that you follow the sections below in sequence to set up your development environment without issues.
Documentation is provided to guide you through the major setup steps.

### Environment Configuration

Initiate by setting up environment variables. Duplicate `.env.local.sample` as `.env.local`:

```bash
cp .env.local.sample .env.local
```

Amend `.env.local` with your specific configurations.

### Dependency Installation

Install necessary project dependencies :

```bash
pnpm install
```

### Dependency Addition & Update (Optional)

To precisely keep track of the dependencies of this application, each dependency should be added with a specific version number.:

```bash
pnpm add <pkg> -E
```

Also, for easier dependency updating, you should use the pnpm interactive mode :

```bash
pnpm up -i -L
```

## Running the Application

Execute the app in various modes using :

```bash
# Development mode
pnpm dev

# Production mode
pnpm start
```
