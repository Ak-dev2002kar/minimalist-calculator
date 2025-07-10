# React Calculator App

## Overview

This is a modern calculator application built with React, Vite, and Node.js. The project uses a full-stack architecture with a React frontend and Express backend, though the current implementation focuses primarily on the frontend calculator functionality. The app is designed to be responsive and user-friendly, featuring a clean interface with shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: Custom React hooks for calculator logic
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon (serverless PostgreSQL)
- **Session Management**: Ready for implementation with connect-pg-simple
- **API Structure**: RESTful API with `/api` prefix (currently minimal implementation)

### Development Setup
- **Package Manager**: npm with lockfile version 3
- **TypeScript**: Strict configuration with path mapping
- **Development**: Hot module replacement via Vite
- **Production**: Compiled Express server with static file serving

## Key Components

### Calculator Logic (`useCalculator` hook)
- Manages calculator state including current value, previous value, and operations
- Handles number input, decimal points, arithmetic operations, and error states
- Implements calculator-specific business logic like clearing and backspace functionality

### UI Components
- **Calculator Page**: Main calculator interface with display and button grid
- **Button Grid**: Organized layout for numbers, operations, and special functions
- **Display**: Shows current calculation, previous values, and error messages
- **Responsive Design**: Works across desktop and mobile devices

### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema with username/password fields
- **Route Registration**: Modular route handling system
- **Middleware**: Request logging and error handling

## Data Flow

1. **User Input**: User clicks calculator buttons or uses keyboard
2. **State Updates**: `useCalculator` hook processes input and updates state
3. **UI Rendering**: React re-renders calculator display and buttons
4. **Error Handling**: Invalid operations display user-friendly error messages
5. **API Ready**: Backend routes prepared for future calculator history or user features

## External Dependencies

### Frontend Dependencies
- **React Query**: For future server state management
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Wouter**: Lightweight routing library
- **Lucide React**: Icon library for UI elements

### Backend Dependencies
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL hosting
- **Express.js**: Web application framework
- **Zod**: Schema validation library

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety and better developer experience
- **ESBuild**: Fast JavaScript bundler for production
- **Replit Integration**: Development environment optimization

## Deployment Strategy

### Development Mode
- Vite development server for frontend with HMR
- Express server running via tsx for TypeScript execution
- Cross-platform compatibility with cross-env for environment variables
- Smart server binding (localhost → 127.0.0.1 → system default) for Windows compatibility
- Database migrations via Drizzle Kit
- Replit-specific optimizations for cloud development

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Serving**: Express serves built frontend files
4. **Database**: Neon PostgreSQL for production data
5. **Environment**: NODE_ENV=production for optimized performance

### Database Management
- **Schema**: Defined in `shared/schema.ts` for type safety
- **Migrations**: Generated in `./migrations` directory
- **Connection**: Environment variable `DATABASE_URL` required
- **ORM**: Drizzle provides type-safe database operations

The application is structured to be easily extensible, with clear separation between frontend calculator logic and backend infrastructure, making it ready for future features like user accounts, calculation history, or advanced mathematical operations.