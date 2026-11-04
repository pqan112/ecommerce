# Graph Report - ecommerce  (2026-11-04)

## Corpus Check
- 140 files · ~16,740 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .ico 1, .css 1)

## Summary
- 943 nodes · 1658 edges · 70 communities (47 shown, 23 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6270f55b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- signin-form.tsx
- API Types & DTOs
- Auth Controller
- Client Dependencies
- Product Image & Email Specs
- Address Controller
- Category Controller
- Product Controller & DTOs
- Server Runtime Deps
- Server TSConfig
- Auth DTOs & Zod
- Better Auth Setup
- app.module.ts
- Server Dev Deps
- shadcn Config
- Client UI Deps
- Nest Feature Modules
- Docker Compose Dev
- Internal Email Controller
- Client TSConfig
- Server Scripts
- Database Config
- Email Module
- Auth Entities
- server/package.json
- Exception Filter
- App Config & Swagger
- Product Entities
- Root Layout & Query
- Session
- Logger & Correlation ID
- Next Config & Axios
- sheet.tsx
- dialog.tsx
- Category Entity
- Server ESLint
- Nest CLI Config
- Address Entity
- Client Scripts
- Auth Client
- Vitest Config
- Account Entity
- package.json
- session-auth.service.ts
- server/README.md
- Client pnpm Workspace
- Server pnpm Workspace
- Migration: User/Auth
- Migration: Address
- Migration: Category
- Migration: Product
- Migration: Product Image
- Graphify
- PostCSS Config
- Order Types
- Product Types
- client/README.md
- TypeOrmConfigService
- AGENTS.md
- prettier
- @nestjs/testing
- tsx
- ts-patch
- @types/express
- typescript-transform-paths
- field.tsx
- select.tsx
- @nestjs/config
- SessionAuthService

## God Nodes (most connected - your core abstractions)
1. `@nestjs/common` - 36 edges
2. `compilerOptions` - 22 edges
3. `BaseEntity` - 21 edges
4. `typeorm` - 21 edges
5. `scripts` - 19 edges
6. `User` - 16 edges
7. `compilerOptions` - 16 edges
8. `@nestjs/config` - 16 edges
9. `SignInForm()` - 15 edges
10. `cn` - 14 edges

## Surprising Connections (you probably didn't know these)
- `SignInPage()` --calls--> `SignInForm()`  [EXTRACTED]
  client/src/app/auth/signin/page.tsx → client/src/components/auth/signin-form.tsx
- `SignUpPage()` --calls--> `SignUpForm()`  [EXTRACTED]
  client/src/app/auth/signup/page.tsx → client/src/components/auth/signup-form.tsx
- `SignInForm()` --calls--> `Button()`  [EXTRACTED]
  client/src/components/auth/signin-form.tsx → client/src/components/ui/button.tsx
- `Account` --references--> `User`  [EXTRACTED]
  server/src/app/auth/entities/account.entity.ts → server/src/app/user/entities/user.entity.ts
- `Account` --inherits--> `BaseEntity`  [EXTRACTED]
  server/src/app/auth/entities/account.entity.ts → server/src/config/database/base.entity.ts

## Import Cycles
- None detected.

## Communities (70 total, 23 thin omitted)

### Community 0 - "signin-form.tsx"
Cohesion: 0.17
Nodes (21): SignInPage(), SignUpPage(), SignInForm(), SignUpForm(), SignUpFormValues, Card(), CardContent(), Checkbox() (+13 more)

### Community 1 - "API Types & DTOs"
Cohesion: 0.05
Nodes (40): Category, CategoryTranslationRow, CreateAddressDto, CreateOrderDto, CreateOrderItemDto, CreatePaymentDto, ForgotPasswordDto, ForgotPasswordResponse (+32 more)

### Community 3 - "Client Dependencies"
Cohesion: 0.07
Nodes (34): eslintConfig, devDependencies, babel-plugin-react-compiler@1.0.0, dotenv-cli@^11.1.0, eslint@^9, eslint-config-next@16.3.5, eslint-config-prettier@^10.1.8, eslint-plugin-prettier@^5.5.6 (+26 more)

### Community 4 - "Product Image & Email Specs"
Cohesion: 0.12
Nodes (5): CreateProductImageDto, UpdateProductImageDto, ProductImageController, ProductImageModule, ProductImageService

### Community 5 - "Address Controller"
Cohesion: 0.12
Nodes (5): AddressController, AddressModule, AddressService, CreateAddressDto, UpdateAddressDto

### Community 6 - "Category Controller"
Cohesion: 0.12
Nodes (5): CategoryController, CategoryModule, CategoryService, CreateCategoryDto, UpdateCategoryDto

### Community 7 - "Product Controller & DTOs"
Cohesion: 0.12
Nodes (5): CreateProductDto, UpdateProductDto, ProductController, ProductModule, ProductService

### Community 8 - "Server Runtime Deps"
Cohesion: 0.07
Nodes (29): cookie-parser, ioredis, @nestjs/core, @nestjs/observe, @nestjs/platform-express, nodemailer, pino-http, reflect-metadata (+21 more)

### Community 9 - "Server TSConfig"
Cohesion: 0.07
Nodes (27): compilerOptions, allowSyntheticDefaultImports, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, incremental, isolatedModules (+19 more)

### Community 10 - "Auth DTOs & Zod"
Cohesion: 0.09
Nodes (24): nestjs-zod, nestjs-zod@^5.5.0, CheckAuthResponseDto, GetSessionResponseDto, VerifyEmailResponseDto, CheckAuthResponseSchema, GetSessionResponseSchema, VerifyEmailResponseSchema (+16 more)

### Community 11 - "Better Auth Setup"
Cohesion: 0.15
Nodes (13): better-auth@^1.7.5, GET, POST, appUrl, auth, pool, internalApi, internalSecret() (+5 more)

### Community 12 - "app.module.ts"
Cohesion: 0.15
Nodes (5): AuthModule, AppModule, allConfigs, PinoLoggerModule, CorrelationIdMiddleware

### Community 13 - "Server Dev Deps"
Cohesion: 0.09
Nodes (23): @nestjs/cli, @nestjs/mau, @nestjs/schematics, pino-pretty, source-map-support, @types/supertest, @types/uuid, devDependencies (+15 more)

### Community 14 - "shadcn Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 15 - "Client UI Deps"
Cohesion: 0.10
Nodes (20): dependencies, class-variance-authority@^0.7.1, @hookform/resolvers@^5.9.1, pg@^8.23.0, react-dom@19.2.8, react-hook-form@^7.90.0, server-only@^0.0.1, shadcn@^4.21.0 (+12 more)

### Community 16 - "Nest Feature Modules"
Cohesion: 0.23
Nodes (10): @nestjs/common, @nestjs/typeorm, UserModule, UserService, apiBadRequest(), ApiMessageKey, apiNotFound(), apiUnauthorized() (+2 more)

### Community 17 - "Docker Compose Dev"
Cohesion: 0.10
Nodes (19): POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, container_name, environment, image, ports, volumes (+11 more)

### Community 18 - "Internal Email Controller"
Cohesion: 0.16
Nodes (3): InternalEmailController, SendAuthEmailDto, EmailService

### Community 19 - "Client TSConfig"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "Server Scripts"
Cohesion: 0.11
Nodes (19): scripts, build, deploy, format, lint, migration:generate, migration:revert, migration:run (+11 more)

### Community 21 - "Database Config"
Cohesion: 0.17
Nodes (11): dotenv, typeorm-naming-strategies, typeorm-naming-strategies@^4.1.0, dotenv@^17.4.2, env, DATABASE_CONFIG, DatabaseConfig, configSchema (+3 more)

### Community 22 - "Email Module"
Cohesion: 0.17
Nodes (6): @nestjs/swagger, @nestjs/swagger@^12.0.1, EmailModule, EmailOptions, internalSecretGuard, verifyInternalSecret()

### Community 23 - "Auth Entities"
Cohesion: 0.23
Nodes (5): typeorm, BaseEntity, decimalColumn, decimalColumnTransformer, nullableDecimalColumn

### Community 24 - "server/package.json"
Cohesion: 0.12
Nodes (15): @eslint/eslintrc, @types/cookie-parser, @vitest/coverage-v8, author, description, @eslint/eslintrc@^3.3.7, @types/cookie-parser@^1.4.10, @types/node@^24.0.0 (+7 more)

### Community 25 - "Exception Filter"
Cohesion: 0.21
Nodes (8): AllExceptionFilter, ApiErrorContext, ApiErrorPayload, buildApiErrorPayload(), extractFromHttpExceptionBody(), formatClientErrorMessage(), NestHttpErrorBody, payloadFromUnknownException()

### Community 26 - "App Config & Swagger"
Cohesion: 0.36
Nodes (6): setupApp(), setupSwagger(), APP_CONFIG, AppConfig, bootstrap(), parseEnvOrigins()

### Community 28 - "Root Layout & Query"
Cohesion: 0.20
Nodes (10): @tanstack/react-query@^5.102.8, @tanstack/react-query-devtools@^5.102.8, inter, metadata, RootLayout(), spaceGrotesk, createQueryClient(), QueryProvider() (+2 more)

### Community 30 - "Logger & Correlation ID"
Cohesion: 0.31
Nodes (4): nestjs-pino, nestjs-pino@^5.1.0, Env, CORRELATION_ID_HEADER

### Community 31 - "Next Config & Axios"
Cohesion: 0.17
Nodes (8): nextConfig, axios@^1.20.0, next@16.3.5, sonner@^2.0.8, axiosInstance, axios, next, sonner

### Community 32 - "sheet.tsx"
Cohesion: 0.12
Nodes (10): @base-ui/react@^1.8.0, cn@^0.3.0, lucide-react@^1.46.0, Separator(), SheetContent(), SheetOverlay(), SheetPortal(), @base-ui/react (+2 more)

### Community 33 - "dialog.tsx"
Cohesion: 0.20
Nodes (8): VerifyEmailPage(), Button(), buttonVariants, DialogContent(), DialogFooter(), DialogOverlay(), DialogPortal(), useResendVerificationEmail()

### Community 35 - "Server ESLint"
Cohesion: 0.25
Nodes (6): @eslint/js, globals, typescript-eslint, @eslint/js@^10.0.1, globals@^17.12.0, typescript-eslint@^8.69.0

### Community 36 - "Nest CLI Config"
Cohesion: 0.29
Nodes (6): collection, compilerOptions, deleteOutDir, plugins, $schema, sourceRoot

### Community 38 - "Client Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, lint:fix, start

### Community 39 - "Auth Client"
Cohesion: 0.25
Nodes (8): AuthClient, createConfiguredClient(), getAuthClient(), serverBaseUrl(), authService, readSessionToken(), AuthResponse, User

### Community 40 - "Vitest Config"
Cohesion: 0.40
Nodes (4): vite-tsconfig-paths, vitest, vite-tsconfig-paths@^5.1.4, vitest@^4.1.2

### Community 42 - "package.json"
Cohesion: 0.15
Nodes (13): author, dependencies, husky@^9.1.7, description, keywords, license, main, name (+5 more)

### Community 43 - "session-auth.service.ts"
Cohesion: 0.48
Nodes (6): cookieValue(), extractBearerToken(), extractSessionTokenFromHeaders(), readSessionCookieValue(), SESSION_COOKIE_NAMES, stripSignature()

### Community 44 - "server/README.md"
Cohesion: 0.18
Nodes (10): Compile and run the project, Deployment, Description, License, Observability, Project setup, Resources, Run tests (+2 more)

### Community 45 - "Client pnpm Workspace"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 46 - "Server pnpm Workspace"
Cohesion: 0.50
Nodes (3): allowBuilds, esbuild, @scarf/scarf

### Community 52 - "Graphify"
Cohesion: 0.50
Nodes (3): Code Exploration, Graph Maintenance, Graphify

### Community 56 - "client/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 60 - "@nestjs/testing"
Cohesion: 0.33
Nodes (4): @nestjs/testing, supertest, @nestjs/testing@^12.0.1, supertest@^7.0.0

### Community 66 - "field.tsx"
Cohesion: 0.14
Nodes (4): react@19.2.8, fieldVariants, Label(), react

### Community 67 - "select.tsx"
Cohesion: 0.24
Nodes (3): SelectContent(), SelectScrollDownButton(), SelectScrollUpButton()

### Community 68 - "@nestjs/config"
Cohesion: 0.31
Nodes (6): @nestjs/config, @nestjs/throttler, @nestjs/throttler@^6.5.0, THROTTLER_CONFIG, ThrottlerConfig, AppThrottlerModule

## Knowledge Gaps
- **6 isolated node(s):** `FAMALE`, `MALE`, `OTHER`, `ADMIN`, `CUSTOMER` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 371 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **23 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `Nest Feature Modules` to `Product Image & Email Specs`, `Address Controller`, `Category Controller`, `Product Controller & DTOs`, `Server Runtime Deps`, `@nestjs/config`, `Auth DTOs & Zod`, `app.module.ts`, `Database Config`, `Email Module`, `server/package.json`, `Exception Filter`, `App Config & Swagger`, `@nestjs/testing`, `Logger & Correlation ID`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **What connects `FAMALE`, `MALE`, `OTHER` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `API Types & DTOs` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Why does `typeorm` connect `Auth Entities` to `Server Runtime Deps`, `Migration: User/Auth`, `Nest Feature Modules`, `Migration: Address`, `Migration: Category`, `Migration: Product`, `Migration: Product Image`, `Database Config`, `server/package.json`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `Client Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07396870554765292 - nodes in this community are weakly interconnected._
- **Why does `react` connect `field.tsx` to `signin-form.tsx`, `dialog.tsx`, `sheet.tsx`, `select.tsx`, `Client Dependencies`, `Root Layout & Query`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Should `Product Image & Email Specs` be split into smaller, more focused modules?**
  _Cohesion score 0.12298387096774194 - nodes in this community are weakly interconnected._