# Montrose LLC - Land Development Website

## Overview

This is a professional multi-page marketing website for Montrose LLC, a land development firm. The application showcases the company's services, featured projects, mission, and values. Built as a full-stack web application with a React frontend and Express backend, it includes a contact form submission system that stores inquiries in a PostgreSQL database.

The site features five main pages: Home (landing page with hero, services preview, and featured projects), Services (comprehensive service listings), Projects (filterable project portfolio), About (company mission and values), and Contact (contact form with company information).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**UI Component Library**: Shadcn/ui components built on Radix UI primitives, providing accessible and customizable components with a consistent design system.

**Styling Approach**: Tailwind CSS with custom design tokens defined in CSS variables. The design follows a hybrid system combining Material Design principles with professional services aesthetics, inspired by Linear's typography and Stripe's layouts.

**Routing**: Wouter for client-side routing, providing a lightweight alternative to React Router.

**State Management**: TanStack Query (React Query) for server state management, with a custom query client configured for API requests.

**Form Handling**: React Hook Form with Zod for schema validation, integrated through @hookform/resolvers.

**Design System**: Custom design guidelines documented in `design_guidelines.md` specifying typography (Inter for headings, Source Serif Pro for body), spacing primitives, container strategies, and grid patterns.

**Key Design Decisions**:
- Component-based architecture with reusable cards (ServiceCard, ProjectCard, ValueCard)
- Shared Hero component with variant support (full/compact)
- Responsive design with mobile-first approach
- Consistent spacing and elevation system through CSS custom properties

### Backend Architecture

**Runtime**: Node.js with Express framework.

**API Structure**: RESTful API with a single endpoint (`POST /api/contact`) for contact form submissions.

**Environment-Specific Entry Points**: 
- Development: `server/index-dev.ts` with Vite middleware integration and HMR support
- Production: `server/index-prod.ts` serving static built files

**Storage Layer**: Abstracted through an `IStorage` interface implemented by `DbStorage`, allowing for future storage backend changes without affecting business logic.

**Request Handling**: Custom logging middleware tracking request duration and API calls, with JSON body parsing and raw body capture for webhook support.

**Development Features**: Integration with Replit-specific plugins (cartographer, dev banner, runtime error overlay) for enhanced development experience.

### Data Storage

**Database**: PostgreSQL accessed through Neon's serverless driver with WebSocket support.

**ORM**: Drizzle ORM for type-safe database operations and schema management.

**Schema Structure**: Single table (`contact_submissions`) storing:
- ID (UUID, auto-generated)
- Name, company, email, phone (text fields)
- Subject and message (text fields)
- Created timestamp

**Migration Strategy**: Drizzle Kit configured to generate migrations in the `/migrations` directory from the schema defined in `shared/schema.ts`.

**Connection Pooling**: Uses Neon's connection pooling with WebSocket constructor for serverless compatibility.

### External Dependencies

**UI & Component Libraries**:
- Radix UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, etc.)
- Embla Carousel for carousel functionality
- Lucide React for icons
- Class Variance Authority (CVA) for component variant management
- CMDK for command menu patterns

**Styling & CSS**:
- Tailwind CSS with PostCSS and Autoprefixer
- Tailwind Merge and CLSX for conditional class management

**Database & ORM**:
- Drizzle ORM with Drizzle Zod for schema-based Zod validators
- @neondatabase/serverless for PostgreSQL connection

**Form & Validation**:
- React Hook Form for form state management
- Zod for runtime type validation
- @hookform/resolvers for integration

**State & Data Fetching**:
- TanStack Query for async state management

**Routing**:
- Wouter for client-side routing

**Development Tools**:
- Vite with React plugin
- Replit-specific plugins (@replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner, @replit/vite-plugin-runtime-error-modal)
- ESBuild for production server bundling
- TypeScript for type safety

**Fonts**: Google Fonts (Inter, Source Serif Pro, DM Sans, Architects Daughter, Fira Code, Geist Mono) loaded via CDN.

**Asset Management**: Images stored in `attached_assets/generated_images/` directory, imported through Vite's alias system (`@assets`).