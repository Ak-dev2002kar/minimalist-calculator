# Troubleshooting Guide

## Common Issues and Solutions

### 1. Deprecated Package Warnings

**Problem:**
```
npm warn deprecated @esbuild-kit/esm-loader@2.6.5: Merged into tsx: https://tsx.is
npm warn deprecated @esbuild-kit/core-utils@3.3.2: Merged into tsx: https://tsx.is
```

**Solution:**
✅ **Fixed** - Updated to latest tsx version which eliminates these warnings.

If you still see warnings:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### 2. NODE_ENV Not Recognized (Windows)

**Problem:**
```
'NODE_ENV' is not recognized as an internal or external command
```

**Solutions:**
```bash
# Option 1: Use npm script (recommended)
npm run dev

# Option 2: Use cross-platform Node.js script
node start-dev.js

# Option 3: Use Windows batch file
dev.bat

# Option 4: Manual with cross-env
npx cross-env NODE_ENV=development tsx server/index.ts
```

### 3. Server Binding Errors (Windows)

**Problem:**
```
Error: listen ENOTSUP: operation not supported on socket 0.0.0.0:5000
Error: listen ENOTSUP: operation not supported on socket ::1:5000
```

**Solution:**
✅ **Fixed** - Server now uses smart binding strategy:
1. Tries `localhost` first (best for Windows)
2. Falls back to `127.0.0.1` if localhost fails
3. Uses system default as final fallback

### 4. Port Already in Use

**Problem:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solutions:**
```bash
# Find process using port 5000
netstat -ano | findstr :5000  # Windows
lsof -i :5000                 # macOS/Linux

# Kill the process
taskkill /PID <PID> /F        # Windows
kill -9 <PID>                 # macOS/Linux

# Or change port in server/index.ts
const port = 3000; // Change from 5000
```

### 5. TypeScript Compilation Errors

**Problem:**
```
error TS2307: Cannot find module '@/components/ui/button'
```

**Solutions:**
```bash
# Check TypeScript configuration
npm run check

# Verify all dependencies are installed
npm install

# Clear TypeScript cache
rm -rf node_modules/.cache
```

### 6. Vite Build Issues

**Problem:**
```
[vite] Build failed with errors
```

**Solutions:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build

# Check for missing dependencies
npm install
```

### 7. Database Connection Issues

**Problem:**
```
Error: connect ECONNREFUSED
```

**Solutions:**
```bash
# Check DATABASE_URL environment variable
echo $DATABASE_URL

# Push database schema
npm run db:push

# Verify database is running
```

## Prevention Tips

1. **Use npm scripts** instead of manual commands
2. **Keep dependencies updated** regularly
3. **Use cross-env** for environment variables
4. **Test on multiple platforms** if developing for cross-platform use
5. **Check port availability** before starting server

## Getting Help

If none of these solutions work:

1. **Check the console output** for specific error messages
2. **Verify Node.js version** (requires 18+)
3. **Try a clean install**:
   ```bash
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   ```
4. **Use the cross-platform Node.js script**:
   ```bash
   node start-dev.js
   ```

## Platform-Specific Notes

### Windows
- Use `dev.bat` or `node start-dev.js` for best compatibility
- Avoid PowerShell execution policy issues with batch files
- Use Git Bash or Command Prompt for npm commands

### macOS/Linux
- Use `./dev.sh` or standard npm scripts
- Ensure shell scripts are executable: `chmod +x dev.sh`
- Use Terminal or your preferred shell

### Replit
- Standard npm scripts work best
- Database URL is automatically configured
- Port 5000 is the only allowed port