# Graph Report - src  (2026-11-04)

## Corpus Check
- 37 files · ~7,560 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: .ico 1, .css 1)

## Summary
- 208 nodes · 468 edges · 10 communities (8 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6870841d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- field.tsx
- signin-form.tsx
- api.types.ts
- Button
- auth.ts
- layout.tsx
- use-auth.ts
- routes.ts
- Order
- Product

## God Nodes (most connected - your core abstractions)
1. `Button()` - 17 edges
2. `SignInForm()` - 16 edges
3. `SignUpForm()` - 15 edges
4. `ForgotPasswordForm()` - 13 edges
5. `ResetPasswordForm()` - 13 edges
6. `Field()` - 10 edges
7. `FieldLabel()` - 10 edges
8. `Card()` - 9 edges
9. `CardContent()` - 9 edges
10. `FieldDescription()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `SignUpPage()` --calls--> `SignUpForm()`  [EXTRACTED]
  app/auth/signup/page.tsx → components/auth/signup-form.tsx
- `ForgotPasswordPage()` --calls--> `ForgotPasswordForm()`  [EXTRACTED]
  app/auth/forgot-password/page.tsx → components/auth/forgot-password-form.tsx
- `SignInPage()` --calls--> `SignInForm()`  [EXTRACTED]
  app/auth/signin/page.tsx → components/auth/signin-form.tsx
- `ResetPasswordContent()` --calls--> `ResetPasswordForm()`  [EXTRACTED]
  app/auth/reset-password/reset-password-content.tsx → components/auth/reset-password-form.tsx
- `readSessionToken()` --calls--> `getAuthClient()`  [EXTRACTED]
  services/auth.service.ts → lib/auth/auth-client.ts

## Import Cycles
- None detected.

## Communities (10 total, 2 thin omitted)

### Community 0 - "field.tsx"
Cohesion: 0.07
Nodes (8): Checkbox(), SelectContent(), SelectScrollDownButton(), SelectScrollUpButton(), Separator(), SheetContent(), SheetOverlay(), SheetPortal()

### Community 1 - "signin-form.tsx"
Cohesion: 0.14
Nodes (27): ForgotPasswordPage(), SignInPage(), SignUpPage(), ForgotPasswordForm(), ResetPasswordForm(), ResetPasswordFormProps, ResetPasswordFormValues, SignInForm() (+19 more)

### Community 2 - "api.types.ts"
Cohesion: 0.05
Nodes (36): Category, CategoryTranslationRow, CreateAddressDto, CreateOrderDto, CreateOrderItemDto, CreatePaymentDto, LocaleApiRow, OrderCouponSummary (+28 more)

### Community 3 - "Button"
Cohesion: 0.15
Nodes (13): VerifyEmailPage(), Button(), buttonVariants, DialogContent(), DialogFooter(), DialogOverlay(), DialogPortal(), useResendVerificationEmail() (+5 more)

### Community 4 - "auth.ts"
Cohesion: 0.14
Nodes (11): GET, POST, appUrl, auth, pool, internalApi, internalSecret(), postAuthEmail() (+3 more)

### Community 5 - "layout.tsx"
Cohesion: 0.22
Nodes (6): inter, metadata, RootLayout(), spaceGrotesk, createQueryClient(), QueryProvider()

### Community 6 - "use-auth.ts"
Cohesion: 0.22
Nodes (10): AuthToastMessages, authService, AuthResponse, ForgotPasswordDto, ForgotPasswordResponse, ResetPasswordDto, ResetPasswordResponse, SignInDto (+2 more)

### Community 7 - "routes.ts"
Cohesion: 0.27
Nodes (4): ResetPasswordPage(), ResetPasswordContent(), ROUTES, axiosInstance

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Button()` connect `Button` to `field.tsx`, `signin-form.tsx`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Should `field.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Why does `ROUTES` connect `routes.ts` to `signin-form.tsx`, `Button`, `use-auth.ts`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Should `signin-form.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13860544217687074 - nodes in this community are weakly interconnected._
- **Why does `getAuthClient()` connect `Button` to `use-auth.ts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Should `api.types.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05405405405405406 - nodes in this community are weakly interconnected._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.14624505928853754 - nodes in this community are weakly interconnected._