# Graph Report - ecommerce  (2026-11-05)

## Corpus Check
- 152 files · ~19,268 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .ico 1, .css 1)

## Summary
- 989 nodes · 1856 edges · 67 communities (47 shown, 20 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `35d388ae`
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
- Gender
- Better Auth Setup
- app.module.ts
- devDependencies
- shadcn Config
- Client UI Deps
- Nest Feature Modules
- Docker Compose Dev
- Internal Email Controller
- Client TSConfig
- Server Scripts
- Database Config
- Email Module
- typeorm
- server/package.json
- Exception Filter
- App Config & Swagger
- Product Entities
- Root Layout & Query
- User
- Logger & Correlation ID
- next
- google/page.tsx
- Address
- Category Entity
- Server ESLint
- Nest CLI Config
- product.entity.ts
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
- UserRole
- client/eslint.config.mjs
- client/README.md
- AGENTS.md
- @nestjs/cli
- pino-pretty
- prettier
- tsx
- @vitest/coverage-v8
- typescript@^6.0.2
- select.tsx

## God Nodes (most connected - your core abstractions)
1. `@nestjs/common` - 36 edges
2. `compilerOptions` - 22 edges
3. `BaseEntity` - 21 edges
4. `typeorm` - 21 edges
5. `react` - 20 edges
6. `Button()` - 19 edges
7. `scripts` - 19 edges
8. `SignInForm()` - 18 edges
9. `SignUpForm()` - 16 edges
10. `User` - 16 edges

## Surprising Connections (you probably didn't know these)
- `SignInPage()` --calls--> `SignInForm()`  [EXTRACTED]
  client/src/app/auth/signin/page.tsx → client/src/components/auth/signin-form.tsx
- `SignUpPage()` --calls--> `SignUpForm()`  [EXTRACTED]
  client/src/app/auth/signup/page.tsx → client/src/components/auth/signup-form.tsx
- `readSessionToken()` --calls--> `getAuthClient()`  [EXTRACTED]
  client/src/services/auth.service.ts → client/src/lib/auth/auth-client.ts
- `Account` --references--> `User`  [EXTRACTED]
  server/src/app/auth/entities/account.entity.ts → server/src/app/user/entities/user.entity.ts
- `Account` --inherits--> `BaseEntity`  [EXTRACTED]
  server/src/app/auth/entities/account.entity.ts → server/src/config/database/base.entity.ts

## Import Cycles
- None detected.

## Communities (67 total, 20 thin omitted)

### Community 0 - "signin-form.tsx"
Cohesion: 0.06
Nodes (50): ForgotPasswordPage(), SignInPage(), SignUpPage(), ForgotPasswordForm(), ResetPasswordForm(), ResetPasswordFormProps, ResetPasswordFormValues, SignInForm() (+42 more)

### Community 1 - "API Types & DTOs"
Cohesion: 0.05
Nodes (40): Category, CategoryTranslationRow, CreateAddressDto, CreateOrderDto, CreateOrderItemDto, CreatePaymentDto, LocaleApiRow, Order (+32 more)

### Community 2 - "Auth Controller"
Cohesion: 0.09
Nodes (9): AuthController, AuthService, SessionAuthService, cookieValue(), extractBearerToken(), extractSessionTokenFromHeaders(), readSessionCookieValue(), SESSION_COOKIE_NAMES (+1 more)

### Community 3 - "Client Dependencies"
Cohesion: 0.09
Nodes (29): devDependencies, babel-plugin-react-compiler@1.0.0, dotenv-cli@^11.1.0, eslint@^9, eslint-config-prettier@^10.1.8, eslint-plugin-prettier@^5.5.6, tailwindcss@^4, @tailwindcss/postcss@^4 (+21 more)

### Community 4 - "Product Image & Email Specs"
Cohesion: 0.12
Nodes (5): CreateProductImageDto, UpdateProductImageDto, ProductImageController, ProductImageModule, ProductImageService

### Community 5 - "Address Controller"
Cohesion: 0.12
Nodes (5): AddressController, AddressModule, AddressService, CreateAddressDto, UpdateAddressDto

### Community 6 - "Category Controller"
Cohesion: 0.12
Nodes (6): @nestjs/testing, CategoryController, CategoryModule, CategoryService, CreateCategoryDto, UpdateCategoryDto

### Community 7 - "Product Controller & DTOs"
Cohesion: 0.12
Nodes (5): CreateProductDto, UpdateProductDto, ProductController, ProductModule, ProductService

### Community 8 - "Server Runtime Deps"
Cohesion: 0.06
Nodes (32): cookie-parser, ioredis, @nestjs/observe, @nestjs/platform-express, nodemailer, pino-http, reflect-metadata, rxjs (+24 more)

### Community 9 - "Server TSConfig"
Cohesion: 0.07
Nodes (27): compilerOptions, allowSyntheticDefaultImports, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, incremental, isolatedModules (+19 more)

### Community 10 - "Gender"
Cohesion: 0.40
Nodes (4): Gender, FAMALE, MALE, OTHER

### Community 11 - "Better Auth Setup"
Cohesion: 0.09
Nodes (27): axios@^1.20.0, better-auth@^1.7.5, GET, POST, buildNestUrl(), DELETE(), FORWARDED_HEADERS, GET() (+19 more)

### Community 12 - "app.module.ts"
Cohesion: 0.10
Nodes (12): @nestjs/core, @nestjs/throttler, nestjs-zod, @nestjs/core@^12.0.1, AuthModule, AppModule, allConfigs, TypeOrmConfigService (+4 more)

### Community 13 - "devDependencies"
Cohesion: 0.08
Nodes (24): dotenv, @eslint/eslintrc, @nestjs/mau, @nestjs/schematics, ts-patch, @types/cookie-parser, @types/express, @types/supertest (+16 more)

### Community 14 - "shadcn Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 15 - "Client UI Deps"
Cohesion: 0.09
Nodes (22): dependencies, @base-ui/react@^1.8.0, class-variance-authority@^0.7.1, cn@^0.3.0, @hookform/resolvers@^5.9.1, lucide-react@^1.46.0, pg@^8.23.0, react@19.2.8 (+14 more)

### Community 16 - "Nest Feature Modules"
Cohesion: 0.21
Nodes (10): @nestjs/common, @nestjs/typeorm, UserModule, UserService, apiBadRequest(), ApiMessageKey, apiNotFound(), apiUnauthorized() (+2 more)

### Community 17 - "Docker Compose Dev"
Cohesion: 0.10
Nodes (19): POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, container_name, environment, image, ports, volumes (+11 more)

### Community 18 - "Internal Email Controller"
Cohesion: 0.08
Nodes (16): CheckAuthResponseDto, GetSessionResponseDto, VerifyEmailResponseDto, CheckAuthResponseSchema, GetSessionResponseSchema, VerifyEmailResponseSchema, InternalEmailController, SendAuthEmailDto (+8 more)

### Community 19 - "Client TSConfig"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "Server Scripts"
Cohesion: 0.11
Nodes (19): scripts, build, deploy, format, lint, migration:generate, migration:revert, migration:run (+11 more)

### Community 21 - "Database Config"
Cohesion: 0.18
Nodes (10): typeorm-naming-strategies, EmailOptions, env, DATABASE_CONFIG, DatabaseConfig, configSchema, Env, envFile (+2 more)

### Community 22 - "Email Module"
Cohesion: 0.20
Nodes (4): @nestjs/swagger, EmailModule, internalSecretGuard, verifyInternalSecret()

### Community 23 - "typeorm"
Cohesion: 0.28
Nodes (3): typeorm, Verification, BaseEntity

### Community 24 - "server/package.json"
Cohesion: 0.11
Nodes (17): source-map-support, supertest, @types/uuid, author, description, eslint-config-prettier@^10.1.8, source-map-support@^0.5.21, supertest@^7.0.0 (+9 more)

### Community 25 - "Exception Filter"
Cohesion: 0.23
Nodes (8): AllExceptionFilter, ApiErrorContext, ApiErrorPayload, buildApiErrorPayload(), extractFromHttpExceptionBody(), formatClientErrorMessage(), NestHttpErrorBody, payloadFromUnknownException()

### Community 26 - "App Config & Swagger"
Cohesion: 0.33
Nodes (8): @nestjs/config, nestjs-pino, setupApp(), setupSwagger(), APP_CONFIG, AppConfig, bootstrap(), parseEnvOrigins()

### Community 28 - "Root Layout & Query"
Cohesion: 0.20
Nodes (10): @tanstack/react-query@^5.102.8, @tanstack/react-query-devtools@^5.102.8, inter, metadata, RootLayout(), spaceGrotesk, createQueryClient(), QueryProvider() (+2 more)

### Community 30 - "Logger & Correlation ID"
Cohesion: 0.24
Nodes (3): PinoLoggerModule, CorrelationIdMiddleware, CORRELATION_ID_HEADER

### Community 31 - "next"
Cohesion: 0.24
Nodes (5): nextConfig, next@16.3.5, ResetPasswordPage(), ResetPasswordContent(), next

### Community 32 - "google/page.tsx"
Cohesion: 0.27
Nodes (9): sonner@^2.0.8, fetchMeWithRetry(), GoogleCallbackPage(), GoogleCallbackPageInner(), ROUTES, axiosInstance, User, AuthMeResponse (+1 more)

### Community 35 - "Server ESLint"
Cohesion: 0.25
Nodes (6): @eslint/js, globals, typescript-eslint, @eslint/js@^10.0.1, globals@^17.12.0, typescript-eslint@^8.69.0

### Community 36 - "Nest CLI Config"
Cohesion: 0.29
Nodes (6): collection, compilerOptions, deleteOutDir, plugins, $schema, sourceRoot

### Community 37 - "product.entity.ts"
Cohesion: 0.70
Nodes (3): decimalColumn, decimalColumnTransformer, nullableDecimalColumn

### Community 38 - "Client Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, lint:fix, start

### Community 39 - "Auth Client"
Cohesion: 0.33
Nodes (8): VerifyEmailPage(), buttonVariants, useResendVerificationEmail(), AuthClient, createConfiguredClient(), getAuthClient(), serverBaseUrl(), readSessionToken()

### Community 40 - "Vitest Config"
Cohesion: 0.40
Nodes (4): vite-tsconfig-paths, vitest, vite-tsconfig-paths@^5.1.4, vitest@^4.1.2

### Community 42 - "package.json"
Cohesion: 0.15
Nodes (13): author, dependencies, husky@^9.1.7, description, keywords, license, main, name (+5 more)

### Community 43 - "use-auth.ts"
Cohesion: 0.24
Nodes (9): AuthToastMessages, authService, AuthResponse, ForgotPasswordDto, ForgotPasswordResponse, ResetPasswordDto, ResetPasswordResponse, SignInDto (+1 more)

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

### Community 54 - "UserRole"
Cohesion: 0.40
Nodes (4): UserRole, ADMIN, CUSTOMER, UNREGISTER

### Community 55 - "client/eslint.config.mjs"
Cohesion: 0.25
Nodes (5): eslintConfig, eslint-config-next@16.3.5, @tanstack/eslint-plugin-query@^5.102.8, eslint-config-next, @tanstack/eslint-plugin-query

### Community 56 - "client/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 67 - "select.tsx"
Cohesion: 0.24
Nodes (3): SelectContent(), SelectScrollDownButton(), SelectScrollUpButton()

## Knowledge Gaps
- **6 isolated node(s):** `FAMALE`, `MALE`, `OTHER`, `ADMIN`, `CUSTOMER` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 372 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `Nest Feature Modules` to `Product Image & Email Specs`, `Address Controller`, `Category Controller`, `Product Controller & DTOs`, `Server Runtime Deps`, `app.module.ts`, `Database Config`, `Email Module`, `server/package.json`, `Exception Filter`, `App Config & Swagger`, `Logger & Correlation ID`?**
  _High betweenness centrality (0.193) - this node is a cross-community bridge._
- **What connects `FAMALE`, `MALE`, `OTHER` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `signin-form.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06222832303820636 - nodes in this community are weakly interconnected._
- **Why does `typeorm` connect `typeorm` to `product.entity.ts`, `Server Runtime Deps`, `Migration: User/Auth`, `Nest Feature Modules`, `Migration: Address`, `Migration: Category`, `Migration: Product`, `Migration: Product Image`, `Database Config`, `server/package.json`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `API Types & DTOs` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._
- **Why does `react` connect `signin-form.tsx` to `google/page.tsx`, `Client Dependencies`, `select.tsx`, `Auth Client`, `use-auth.ts`, `Client UI Deps`, `Root Layout & Query`, `next`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Should `Auth Controller` be split into smaller, more focused modules?**
  _Cohesion score 0.09411764705882353 - nodes in this community are weakly interconnected._