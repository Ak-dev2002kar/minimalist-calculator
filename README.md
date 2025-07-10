# React Calculator App

A modern calculator application built with React, Vite, and Node.js, designed for cross-platform compatibility.

## Features

- ✅ Full calculator functionality (add, subtract, multiply, divide)
- ✅ Modern UI with rounded buttons and gradient background
- ✅ Dark display screen with monospace font
- ✅ Keyboard support for all operations
- ✅ Error handling (division by zero, invalid inputs)
- ✅ Clear and All Clear buttons with icons
- ✅ Cross-platform compatibility (Windows, macOS, Linux)

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development

#### Option 1: Using cross-env (Recommended)
```bash
npm run dev
```

#### Option 2: Platform-specific scripts
**Windows:**
```bash
dev.bat
```

**macOS/Linux:**
```bash
chmod +x dev.sh
./dev.sh
```

### Production Build
```bash
npm run build
npm start
```

## Cross-Platform Compatibility

This app is designed to work on all platforms without issues:

### Environment Variables
- Uses `cross-env` package for setting NODE_ENV across platforms
- Fallback scripts provided for Windows (`dev.bat`) and Unix (`dev.sh`)

### Server Binding
- Smart server binding strategy for Windows compatibility
- Tries `localhost` → `127.0.0.1` → system default
- No more "ENOTSUP" errors on Windows

### Package Dependencies
- All packages are stable and cross-platform compatible
- No deprecated packages that cause build warnings

## Keyboard Shortcuts

- **Numbers (0-9)**: Input numbers
- **Operators (+, -, *, /)**: Perform operations
- **Enter or =**: Calculate result
- **Escape**: Clear all
- **Backspace**: Delete last digit
- **.**: Decimal point

## Architecture

- **Frontend**: React 18 + Vite + TypeScript
- **Backend**: Express.js + Node.js
- **UI**: shadcn/ui components + Tailwind CSS
- **State Management**: Custom React hooks
- **Database**: PostgreSQL with Drizzle ORM (ready for future features)

## Troubleshooting

### Common Issues

1. **'NODE_ENV' is not recognized** (Windows)
   - Solution: Use `npm run dev` (uses cross-env)
   - Or run `dev.bat` directly

2. **ENOTSUP: operation not supported on socket** (Windows)
   - Solution: Updated server.js with smart binding
   - Server tries multiple host configurations automatically

3. **Port already in use**
   - Solution: Change port in `server/index.ts` or kill existing process

### Getting Help

If you encounter any issues:
1. Check that Node.js 18+ is installed
2. Run `npm install` to ensure all dependencies are installed
3. Try the platform-specific scripts (`dev.bat` or `dev.sh`)
4. Check the console for specific error messages

## License

MIT License - feel free to use this project for your own applications!