#!/usr/bin/env node
// Cross-platform development server starter
import { spawn } from 'child_process';
import path from 'path';
import os from 'os';

// Set environment variable
process.env.NODE_ENV = 'development';

// Determine the correct command based on platform
const isWindows = os.platform() === 'win32';
const command = isWindows ? 'npx.cmd' : 'npx';
const args = ['tsx', 'server/index.ts'];

console.log(`Starting development server on ${os.platform()}...`);
console.log(`Command: ${command} ${args.join(' ')}`);

// Spawn the tsx process
const child = spawn(command, args, {
  stdio: 'inherit',
  shell: isWindows,
  env: { ...process.env, NODE_ENV: 'development' }
});

// Handle process events
child.on('error', (error) => {
  console.error('Failed to start development server:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  console.log(`Development server exited with code ${code}`);
  process.exit(code);
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\nShutting down development server...');
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Shutting down development server...');
  child.kill('SIGTERM');
});