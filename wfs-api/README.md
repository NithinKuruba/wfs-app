# Find Community Health Service Area(CHSA) - Node Server

## Description

Server that run wfs-ui artifacts

## Getting Started

### Dependencies

- [Node.js](https://nodejs.org/en/) - You’ll need to have Node >= 10.x and npm >= 5.6 on your machine. You can use [nvm](https://github.com/nvm-sh/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

Note: Node 10 is being used as a base image in our docker deployment strategy.

### Installing

In the project directory ./wfs-api, run:

#### `npm install`

Installs all dependencies in the node_modules folder.


## Available Scripts

In the project directory, you can run:

### `npm run tsc`

Compiles the typescript code and generates respective javascript files under `dist` folder.\

### `npm run build`

Uses webpack library to build artifacts under `dist` folder for production deployment

### `npm run dev`

Runs the node server locally for developmental purposes

