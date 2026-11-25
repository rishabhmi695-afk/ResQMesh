# ResQMesh
### Emergency Communication Support System

ResQMesh is an emergency SOS communication support project designed to help users create and share emergency alerts.

## Features
- SOS alert creation
- Emergency category selection
- Location and message details
- SOS history
- Local Wi-Fi synchronization through a Node.js backend
- Node and responder interface

## Technology Used
- React
- TypeScript
- Node.js
- Vite

## Current Scope
SOS records can be synchronized between devices connected to the same local Wi-Fi network through a local backend server.

Bluetooth, Wi-Fi Direct and automatic multi-hop mesh communication are planned for future development.

## Run Locally
Install dependencies:

npm install

Start the backend:

node server.cjs

Start the frontend:

npm run dev -- --host 0.0.0.0
