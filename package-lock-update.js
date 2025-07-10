// Script to clean up deprecated dependencies
const fs = require('fs');
const { execSync } = require('child_process');

console.log('Cleaning up deprecated packages...');

try {
  // Remove package-lock.json to force clean install
  if (fs.existsSync('package-lock.json')) {
    fs.unlinkSync('package-lock.json');
    console.log('Removed package-lock.json');
  }
  
  // Remove node_modules to force clean install
  if (fs.existsSync('node_modules')) {
    console.log('Removing node_modules...');
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  
  // Clean npm cache
  console.log('Cleaning npm cache...');
  execSync('npm cache clean --force', { stdio: 'inherit' });
  
  console.log('Clean up complete. Run npm install to reinstall packages.');
} catch (error) {
  console.error('Error during cleanup:', error.message);
}