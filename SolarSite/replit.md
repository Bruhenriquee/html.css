# SolarTech Brasil - Solar Energy Landing Page

## Overview

SolarTech Brasil is a modern, responsive landing page for a solar energy company built with React, TypeScript, and TailwindCSS. The application showcases solar energy solutions with a focus on conversion optimization and user engagement. It features a complete landing page experience with sections for hero presentation, company information, services, advantages, project gallery, cost calculator, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component architecture
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with custom CSS variables for solar energy-themed color palette (solar gold, earth green, sky blue)
- **UI Components**: Radix UI primitives with shadcn/ui components for consistent, accessible design system
- **State Management**: React hooks for local state, TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API routes and middleware
- **Development Mode**: Integrated Vite development server with HMR (Hot Module Replacement)
- **Static Serving**: Production-ready static file serving with Express
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Component Structure
- **Section-based Layout**: Modular components for each landing page section (Hero, About, Services, Advantages, Projects, Calculator, Contact, Footer)
- **Responsive Design**: Mobile-first approach with hamburger menu and responsive navigation
- **Animations**: CSS-based fade-in animations triggered by Intersection Observer API
- **Interactive Elements**: Solar energy calculator, contact forms, and smooth scrolling navigation

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Development Storage**: In-memory storage implementation for development and testing
- **Schema Management**: Zod integration for runtime type validation and schema inference
- **Database Migrations**: Drizzle migrations system for schema version control

### Design System
- **Color Palette**: Solar energy-themed colors with CSS custom properties
- **Typography**: Inter font family for modern, clean readability
- **Icons**: Lucide React icons for consistent iconography
- **Responsive Breakpoints**: Mobile-first design with tablet and desktop variations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Performance Optimizations
- **Code Splitting**: Route-based code splitting with dynamic imports
- **Image Optimization**: Responsive images with proper sizing and formats
- **Bundle Optimization**: Vite's built-in optimizations for production builds
- **CSS Optimization**: TailwindCSS purging and PostCSS processing

## External Dependencies

### Core Framework Dependencies
- **React & TypeScript**: Core frontend framework with type safety
- **Wouter**: Lightweight client-side routing
- **TanStack Query**: Server state management and caching

### UI and Styling
- **TailwindCSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide React**: Modern icon library
- **class-variance-authority**: Component variant management
- **Embla Carousel**: Touch-friendly carousel component

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing and optimization
- **ESBuild**: Fast JavaScript bundler for production

### Backend Infrastructure
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe PostgreSQL ORM
- **Zod**: Runtime type validation
- **tsx**: TypeScript execution environment

### Database and Storage
- **PostgreSQL**: Primary database (configured via Drizzle)
- **Neon Database**: Serverless PostgreSQL provider
- **Connect-pg-simple**: PostgreSQL session store

### Form and Validation
- **React Hook Form**: Form state management
- **Hookform Resolvers**: Form validation integration
- **Date-fns**: Date manipulation and formatting

### Testing and Quality
- **TypeScript**: Compile-time type checking
- **ESLint**: Code linting (configured via components.json)