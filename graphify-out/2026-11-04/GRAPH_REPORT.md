# Graph Report - ecommerce  (2026-11-04)

## Corpus Check
- 143 files · ~17,226 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .ico 1, .css 1)

## Summary
- 950 nodes · 1713 edges · 75 communities (52 shown, 23 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2d831cae`
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
- User
- Logger & Correlation ID
- next
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
- use-auth.ts
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
- signin-form.tsx
- client/eslint.config.mjs
- client/README.md
- TypeOrmConfigService
- AGENTS.md
- prettier
- cn
- tsx
- @types/express
- product.entity.ts
- field.tsx
- select.tsx
- Gender
- UserRole
- @eslint/eslintrc
- @types/supertest
- @vitest/coverage-v8
- @types/node@^24.0.0

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
10. `Button()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `SignInPage()` --calls--> `SignInForm()`  [EXTRACTED]
  client/src/app/auth/signin/page.tsx → client/src/components/auth/signin-form.tsx
- `ForgotPasswordPage()` --calls--> `ForgotPasswordForm()`  [EXTRACTED]
  client/src/app/auth/forgot-password/page.tsx → client/src/components/auth/forgot-password-form.tsx
- `VerifyEmailPage()` --calls--> `getAuthClient()`  [EXTRACTED]
  client/src/app/auth/verify-email/page.tsx → client/src/lib/auth/auth-client.ts
- `ForgotPasswordForm()` --calls--> `Button()`  [EXTRACTED]
  client/src/components/auth/forgot-password-form.tsx → client/src/components/ui/button.tsx
- `ForgotPasswordForm()` --calls--> `Field()`  [EXTRACTED]
  client/src/components/auth/forgot-password-form.tsx → client/src/components/ui/field.tsx

## Import Cycles
- None detected.

## Communities (75 total, 23 thin omitted)

### Community 0 - "signin-form.tsx"
Cohesion: 0.26
Nodes (16): ForgotPasswordPage(), SignUpPage(), ForgotPasswordForm(), SignInForm(), SignUpForm(), SignUpFormValues, Card(), CardContent() (+8 more)

### Community 1 - "API Types & DTOs"
Cohesion: 0.05
Nodes (42): Category, CategoryTranslationRow, CreateAddressDto, CreateOrderDto, CreateOrderItemDto, CreatePaymentDto, LocaleApiRow, Order (+34 more)

### Community 2 - "Auth Controller"
Cohesion: 0.09
Nodes (9): AuthController, AuthService, SessionAuthService, cookieValue(), extractBearerToken(), extractSessionTokenFromHeaders(), readSessionCookieValue(), SESSION_COOKIE_NAMES (+1 more)

### Community 3 - "Client Dependencies"
Cohesion: 0.09
Nodes (29): devDependencies, babel-plugin-react-compiler@1.0.0, dotenv-cli@^11.1.0, eslint@^9, eslint-config-prettier@^10.1.8, eslint-plugin-prettier@^5.5.6, tailwindcss@^4, @tailwindcss/postcss@^4 (+21 more)

### Community 4 - "Product Image & Email Specs"
Cohesion: 0.12
Nodes (6): @nestjs/testing, CreateProductImageDto, UpdateProductImageDto, ProductImageController, ProductImageModule, ProductImageService

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
Cohesion: 0.06
Nodes (31): cookie-parser, ioredis, @nestjs/observe, @nestjs/platform-express, @nestjs/swagger, nodemailer, pino-http, reflect-metadata (+23 more)

### Community 9 - "Server TSConfig"
Cohesion: 0.07
Nodes (27): compilerOptions, allowSyntheticDefaultImports, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, incremental, isolatedModules (+19 more)

### Community 10 - "Auth DTOs & Zod"
Cohesion: 0.19
Nodes (12): CheckAuthResponseDto, GetSessionResponseDto, VerifyEmailResponseDto, CheckAuthResponseSchema, GetSessionResponseSchema, VerifyEmailResponseSchema, GetCurrentUserResponseDto, GetCurrentUserResponseSchema (+4 more)

### Community 11 - "Better Auth Setup"
Cohesion: 0.13
Nodes (15): axios@^1.20.0, better-auth@^1.7.5, GET, POST, appUrl, auth, pool, internalApi (+7 more)

### Community 12 - "app.module.ts"
Cohesion: 0.12
Nodes (12): @nestjs/core, @nestjs/throttler, nestjs-zod, @nestjs/core@^12.0.1, @nestjs/throttler@^6.5.0, AuthModule, AppModule, allConfigs (+4 more)

### Community 13 - "Server Dev Deps"
Cohesion: 0.08
Nodes (24): @nestjs/cli, @nestjs/schematics, pino-pretty, source-map-support, supertest, ts-patch, @types/cookie-parser, @types/uuid (+16 more)

### Community 14 - "shadcn Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 15 - "Client UI Deps"
Cohesion: 0.11
Nodes (19): dependencies, @base-ui/react@^1.8.0, lucide-react@^1.46.0, pg@^8.23.0, react@19.2.8, react-dom@19.2.8, server-only@^0.0.1, shadcn@^4.21.0 (+11 more)

### Community 16 - "Nest Feature Modules"
Cohesion: 0.23
Nodes (10): @nestjs/common, @nestjs/typeorm, UserModule, UserService, apiBadRequest(), ApiMessageKey, apiNotFound(), apiUnauthorized() (+2 more)

### Community 17 - "Docker Compose Dev"
Cohesion: 0.10
Nodes (19): POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, container_name, environment, image, ports, volumes (+11 more)

### Community 18 - "Internal Email Controller"
Cohesion: 0.13
Nodes (4): InternalEmailController, SendAuthEmailDto, SendAuthEmailSchema, EmailService

### Community 19 - "Client TSConfig"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "Server Scripts"
Cohesion: 0.11
Nodes (19): scripts, build, deploy, format, lint, migration:generate, migration:revert, migration:run (+11 more)

### Community 21 - "Database Config"
Cohesion: 0.19
Nodes (10): typeorm-naming-strategies, typeorm-naming-strategies@^4.1.0, env, DATABASE_CONFIG, DatabaseConfig, configSchema, Env, envFile (+2 more)

### Community 22 - "Email Module"
Cohesion: 0.18
Nodes (4): EmailModule, EmailOptions, internalSecretGuard, verifyInternalSecret()

### Community 23 - "Auth Entities"
Cohesion: 0.28
Nodes (3): typeorm, Verification, BaseEntity

### Community 24 - "server/package.json"
Cohesion: 0.12
Nodes (15): dotenv, @nestjs/mau, typescript-transform-paths, author, description, dotenv@^17.4.2, eslint-plugin-prettier@^5.5.6, @nestjs/mau@^0.2.6 (+7 more)

### Community 25 - "Exception Filter"
Cohesion: 0.23
Nodes (8): AllExceptionFilter, ApiErrorContext, ApiErrorPayload, buildApiErrorPayload(), extractFromHttpExceptionBody(), formatClientErrorMessage(), NestHttpErrorBody, payloadFromUnknownException()

### Community 26 - "App Config & Swagger"
Cohesion: 0.33
Nodes (8): @nestjs/config, nestjs-pino, setupApp(), setupSwagger(), APP_CONFIG, AppConfig, bootstrap(), parseEnvOrigins()

### Community 28 - "Root Layout & Query"
Cohesion: 0.22
Nodes (9): @tanstack/react-query-devtools@^5.102.8, inter, metadata, RootLayout(), spaceGrotesk, createQueryClient(), QueryProvider(), @tanstack/react-query (+1 more)

### Community 30 - "Logger & Correlation ID"
Cohesion: 0.24
Nodes (3): PinoLoggerModule, CorrelationIdMiddleware, CORRELATION_ID_HEADER

### Community 31 - "next"
Cohesion: 0.33
Nodes (3): nextConfig, next@16.3.5, next

### Community 32 - "sheet.tsx"
Cohesion: 0.22
Nodes (3): SheetContent(), SheetOverlay(), SheetPortal()

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
Cohesion: 0.47
Nodes (5): AuthClient, createConfiguredClient(), getAuthClient(), serverBaseUrl(), readSessionToken()

### Community 40 - "Vitest Config"
Cohesion: 0.40
Nodes (4): vite-tsconfig-paths, vitest, vite-tsconfig-paths@^5.1.4, vitest@^4.1.2

### Community 42 - "package.json"
Cohesion: 0.15
Nodes (13): author, dependencies, husky@^9.1.7, description, keywords, license, main, name (+5 more)

### Community 43 - "use-auth.ts"
Cohesion: 0.18
Nodes (12): sonner@^2.0.8, ROUTES, AuthToastMessages, axiosInstance, authService, AuthResponse, ForgotPasswordDto, ForgotPasswordResponse (+4 more)

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

### Community 54 - "signin-form.tsx"
Cohesion: 0.20
Nodes (8): @hookform/resolvers@^5.9.1, react-hook-form@^7.90.0, SignInPage(), Checkbox(), useSignIn(), @hookform/resolvers, lucide-react, react-hook-form

### Community 55 - "client/eslint.config.mjs"
Cohesion: 0.25
Nodes (5): eslintConfig, eslint-config-next@16.3.5, @tanstack/eslint-plugin-query@^5.102.8, eslint-config-next, @tanstack/eslint-plugin-query

### Community 56 - "client/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 60 - "cn"
Cohesion: 0.29
Nodes (4): cn@^0.3.0, Separator(), @base-ui/react, cn

### Community 64 - "product.entity.ts"
Cohesion: 0.70
Nodes (3): decimalColumn, decimalColumnTransformer, nullableDecimalColumn

### Community 66 - "field.tsx"
Cohesion: 0.21
Nodes (6): class-variance-authority@^0.7.1, Field(), fieldVariants, Label(), class-variance-authority, react

### Community 67 - "select.tsx"
Cohesion: 0.24
Nodes (3): SelectContent(), SelectScrollDownButton(), SelectScrollUpButton()

### Community 68 - "Gender"
Cohesion: 0.40
Nodes (4): Gender, FAMALE, MALE, OTHER

### Community 69 - "UserRole"
Cohesion: 0.40
Nodes (4): UserRole, ADMIN, CUSTOMER, UNREGISTER

## Knowledge Gaps
- **6 isolated node(s):** `FAMALE`, `MALE`, `OTHER`, `ADMIN`, `CUSTOMER` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 369 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **23 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `Nest Feature Modules` to `Product Image & Email Specs`, `Address Controller`, `Category Controller`, `Product Controller & DTOs`, `Server Runtime Deps`, `Auth DTOs & Zod`, `app.module.ts`, `Database Config`, `Email Module`, `server/package.json`, `Exception Filter`, `App Config & Swagger`, `Logger & Correlation ID`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **What connects `FAMALE`, `MALE`, `OTHER` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `API Types & DTOs` be split into smaller, more focused modules?**
  _Cohesion score 0.048726467331118496 - nodes in this community are weakly interconnected._
- **Why does `typeorm` connect `Auth Entities` to `product.entity.ts`, `Server Runtime Deps`, `Migration: User/Auth`, `Nest Feature Modules`, `Migration: Address`, `Migration: Category`, `Migration: Product`, `Migration: Product Image`, `Database Config`, `server/package.json`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `Auth Controller` be split into smaller, more focused modules?**
  _Cohesion score 0.09411764705882353 - nodes in this community are weakly interconnected._
- **Why does `react` connect `field.tsx` to `signin-form.tsx`, `dialog.tsx`, `sheet.tsx`, `Client Dependencies`, `select.tsx`, `Client UI Deps`, `signin-form.tsx`, `Root Layout & Query`, `card.tsx`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Should `Client Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09425287356321839 - nodes in this community are weakly interconnected._