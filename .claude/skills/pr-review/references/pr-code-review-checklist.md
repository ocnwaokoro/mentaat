---
description: Rules for performing Pull Request code reviews to guarantee high quality code
globs: 
alwaysApply: false
---

# Pull Request Code Review Rules

Use these rules when reviewing a Pull Request. The goal is to guarantee high quality, maintainable, and secure code before merging into the main branch.

---

## 1. Scope & Focus

- [ ] **Changes are scoped to the ticket/task.** No unrelated modifications, refactors, or drive-by fixes are included. If unrelated improvements are spotted, they should be tracked as separate tickets.
- [ ] **No unnecessary files are touched.** Config files, lockfiles, or unrelated modules should not have unexpected changes.
- [ ] **Commit messages follow the convention:** `TICKET_ID - Short description of the changes`.
- [ ] **No `Co-Authored-By` lines referencing AI assistants** are present in commit messages.

---

## 2. Architecture & Design

### 2.1 SOLID Principles
- [ ] **Single Responsibility:** Each class, module, and component has one reason to change and one clear purpose.
- [ ] **Open/Closed:** New behavior is added via extension (new classes, modules, decorators), not by modifying existing working code, unless explicitly required.
- [ ] **Liskov Substitution:** Subclasses and implementations are valid substitutes for their parent types without breaking behavior.
- [ ] **Interface Segregation:** No class or component is forced to implement methods it does not use.

### 2.2 Code Organization
- [ ] **Backend and frontend are strictly separated.** No backend logic leaks into the frontend and vice versa.
- [ ] **No file exceeds 200-300 lines.** If it does, it must be refactored into smaller units.
- [ ] **Code is DRY.** Check for duplicate logic across the codebase. Shared logic should be extracted into reusable services, concerns, utilities, or common components.
- [ ] **Simplicity is preferred.** The solution should be the simplest approach that satisfies the requirements. Over-engineering is flagged.

---

## 3. Backend (Ruby on Rails)

### 3.1 Conventions & Patterns
- [ ] **Rails conventions are followed** (Convention over Configuration). Default Rails patterns are used unless there is a documented reason not to.
- [ ] **Controllers are thin.** Business logic is extracted into service objects, POROs, or model methods. Controllers only handle request/response flow.
- [ ] **Models are not fat.** Complex validations, callbacks, and queries are extracted into concerns (used sparingly), service objects, or query objects.
- [ ] **Service objects are used** for complex business logic that spans multiple models or involves external integrations.
- [ ] **Jbuilder templates are used** for all JSON responses. No `render json:` with inline hashes unless trivially simple (e.g., status-only responses).
- [ ] **Rails generators were used** for creating new endpoints, models, migrations, and specs where applicable.
- [ ] **Strong parameters are used** in every controller action that accepts user input. No mass assignment vulnerabilities.

### 3.2 Database & Migrations
- [ ] **Migrations include column comments.** Every new table and every new column has a `comment:` parameter explaining its purpose.
- [ ] **Indexes are added** on foreign keys, columns used in `WHERE` clauses, and columns used for sorting or lookups.
- [ ] **N+1 queries are avoided.** Associations accessed in loops or serializers use `includes`, `preload`, or `eager_load`.
- [ ] **Queries are explicit and efficient.** No `Model.all` in production code paths without pagination or scoping. Avoid loading unnecessary columns.
- [ ] **Migrations are reversible** unless there is a documented reason they cannot be.

### 3.3 Background Jobs (Sidekiq)
- [ ] **Long-running operations are offloaded** to Sidekiq workers (emails, external API calls, heavy computations, payment processing).
- [ ] **Jobs are idempotent.** Running the same job twice with the same arguments produces the same result without side effects.
- [ ] **Controllers remain fast and non-blocking.** No synchronous external API calls or heavy processing in the request cycle.
- [ ] **Retry strategies and error handling** are configured appropriately for each job.

### 3.4 Security
- [ ] **Strong parameters** are used for all user input.
- [ ] **JWT authentication** is properly validated for all protected endpoints.
- [ ] **Authorization checks** are present. Users can only access and modify resources they own or have permission to.
- [ ] **No sensitive data is logged** (passwords, tokens, payment info, PII).
- [ ] **No secrets, API keys, or credentials** are hardcoded. All sensitive values come from environment variables.
- [ ] **No `.env` files are modified** without explicit confirmation.

---

## 4. Frontend (React + TypeScript)

### 4.1 Component Design
- [ ] **Components are small and focused.** Each component has a single responsibility.
- [ ] **No component exceeds 25 lines of JSX.** If it does, it must be broken into sub-components in the nearest `Components/` folder.
- [ ] **Components follow the naming convention:** CamelCase naming, test file co-located as `ComponentName.test.tsx`.
- [ ] **Folder structure is respected:**
  - Main components export from `index.tsx`
  - Sub-components live in `Components/` folders
  - Styles live in `Styles/` folders as `.scss` files matching component names
  - Common components (used in 3+ places) live in `src/common/`
  - Pages live in `src/pages/PageName/`
  - Hooks live in `src/hooks/`
  - Services live in `src/services/`
- [ ] **Functional components with hooks are used.** No class components unless there is a documented reason.

### 4.2 TypeScript
- [ ] **TypeScript is used throughout.** No `any` types unless absolutely unavoidable and documented with a comment explaining why.
- [ ] **Interfaces and types are properly defined.** Props, API responses, and state shapes have explicit types.
- [ ] **Types are stored** in `src/common/Types/` when shared across multiple files.

### 4.3 State Management & Data Flow
- [ ] **No prop drilling.** If data passes through more than 2 intermediate components, use Context API or a state management solution.
- [ ] **React Query + Axios is used** for all backend communication. No raw `fetch` calls.
- [ ] **Custom hooks encapsulate** data fetching and complex state logic. Hooks are stored in `src/hooks/`.
- [ ] **DayJS is used** for all date manipulation. No raw `Date` objects or alternative date libraries.

### 4.4 Styling
- [ ] **Chakra UI is the primary design system.** Custom styles supplement, not replace, Chakra components.
- [ ] **SCSS is used** for custom styles. No plain CSS files.
- [ ] **Style files are co-located** in the `Styles/` folder and named to match their component.

### 4.5 Error Handling
- [ ] **API errors are handled gracefully.** User-friendly messages are shown. Errors are not silently swallowed.
- [ ] **Error boundaries** are in place for critical UI sections to prevent full-page crashes.

---

## 5. Testing

### 5.1 General
- [ ] **All major functionality has tests.** No feature code is merged without corresponding specs/tests.
- [ ] **Tests use FactoryBot + Faker** for generating test data. No hardcoded test values.
- [ ] **No mocking or stubbing patterns leak** into dev or prod code. Mocks are test-only.
- [ ] **Existing test files are never deleted or overwritten.** New test cases are appended to existing spec files.

### 5.2 Backend (RSpec)
- [ ] **Every new framework component has a spec:** models, controllers, routes, views, helpers, mailers, rake tasks.
- [ ] **RSpec is the only test framework used.** No MiniTest or default Rails test files.
- [ ] **Test structure follows the user-story pattern** using nested `context` blocks (`WHEN...`, `AND...`) with descriptive `it` blocks.
- [ ] **Model specs cover:** validations, associations (using shoulda-matchers), scopes, and custom methods.
- [ ] **Request specs cover:** happy paths, error paths, authentication, authorization, and edge cases.
- [ ] **Service specs cover:** all branches of business logic with appropriate setup.

### 5.3 Frontend (Vitest + React Testing Library)
- [ ] **All small components have tests** co-located as `ComponentName.test.tsx`.
- [ ] **Tests cover all use cases** of the component (rendering, user interactions, conditional displays, error states).
- [ ] **React Testing Library best practices are followed:** test behavior, not implementation. Query by role, label, or text rather than test IDs or class names when possible.

---

## 6. Code Quality & Linting

- [ ] **RuboCop passes** with no new violations (rubocop, rubocop-rails, rubocop-rspec, rubocop-factory_bot).
- [ ] **ESLint passes** with no new violations.
- [ ] **Prettier formatting is applied** (if configured).
- [ ] **No commented-out code** is left in the PR. Dead code is removed.
- [ ] **No `console.log`, `debugger`, `binding.pry`, or `byebug`** statements are left in the code.
- [ ] **No TODO/FIXME comments** are introduced without a corresponding ticket to address them.
- [ ] **Naming is clear and descriptive.** Variables, methods, classes, and components use meaningful names. No cryptic abbreviations.
- [ ] **Comments explain "why", not "what."** Code should be self-documenting. Comments are reserved for non-obvious decisions, trade-offs, or constraints.

---

## 7. Dependencies

- [ ] **No new dependencies are introduced without justification.** Existing libraries and patterns should be exhausted first.
- [ ] **Dependencies are up to date.** If a dependency requires a lower version than currently installed, the dependency should be updated rather than downgrading.
- [ ] **No known security vulnerabilities** exist in new or updated dependencies (check with `bundle audit` / `npm audit`).
- [ ] **Development/test-only gems and packages** are placed in the correct groups (`development`, `test` in Gemfile; `devDependencies` in `package.json`).

---

## 8. Environment Safety

- [ ] **Code works across environments** (dev, test, prod). No environment-specific hacks without proper guards.
- [ ] **No fake data, stubs, or mocks** exist in code paths reachable by dev or prod.
- [ ] **Environment variables** are used for all configuration that varies by environment. New env vars are documented.
- [ ] **Database configuration uses environment variables** as defined in `config/database.yml`.

---

## 9. Performance Issue Detection

When reviewing code, actively scan for the following patterns. Each is a known source of performance degradation in this stack. **If any pattern is detected, label it as a PERF issue in the review comment** with a severity level:
- **PERF:CRITICAL** - Will cause timeouts, outages, or unacceptable response times under normal production load.
- **PERF:HIGH** - Will cause noticeable slowdowns that degrade user experience as data grows.
- **PERF:MEDIUM** - Will cause inefficiency that accumulates over time or under peak load.

---

### 9.1 Database & ActiveRecord (Backend)

#### 9.1.1 N+1 Queries
**Severity: HIGH.** Accessing an association inside a loop, iterator, jbuilder partial, or serializer without eager loading. Each iteration fires a separate SQL query. Use `includes`, `preload`, or `eager_load` on the parent query.

```ruby
# PERF: N+1 — one query per order to load user
orders = Order.all
orders.each { |o| puts o.user.name }

# SAFE: eager load
orders = Order.includes(:user)
orders.each { |o| puts o.user.name }
```

Also check jbuilder templates: `json.partial!` inside a collection is a common N+1 source if the parent query does not eager load the rendered associations.

#### 9.1.2 Unbounded Queries (`Model.all` Without Pagination)
**Severity: CRITICAL.** Calling `Model.all`, `Model.where(...)` without `.limit()`, or loading entire tables into memory. As data grows, this causes memory bloat and slow responses. All list endpoints and background jobs processing collections must use pagination (`limit`/`offset`, cursor-based, or `find_each`/`find_in_batches`).

```ruby
# PERF: loads every record into memory
User.where(active: true).each { |u| send_email(u) }

# SAFE: batch processing
User.where(active: true).find_each(batch_size: 500) { |u| send_email(u) }
```

#### 9.1.3 Missing Database Indexes
**Severity: HIGH.** Columns used in `WHERE`, `ORDER BY`, `JOIN ON`, `GROUP BY`, or uniqueness constraints that lack a corresponding database index. Check every new migration for:
- Foreign key columns (e.g., `user_id`, `order_id`) — must always be indexed.
- Columns used in scopes or frequent queries.
- Composite conditions that would benefit from a compound index.
- Polymorphic associations — both `_type` and `_id` columns need a compound index.

#### 9.1.4 `SELECT *` When Only Specific Columns Are Needed
**Severity: MEDIUM.** Loading full ActiveRecord objects with all columns when only a few fields are needed (e.g., for a dropdown, count, or ID list). Use `.select(:id, :name)` or `.pluck(:id, :name)` to reduce memory and transfer overhead.

```ruby
# PERF: loads all columns for every product
Product.where(active: true).map(&:name)

# SAFE: only fetches the name column
Product.where(active: true).pluck(:name)
```

#### 9.1.5 Ruby-Side Filtering Instead of SQL Filtering
**Severity: HIGH.** Loading records from the database and filtering in Ruby instead of using SQL `WHERE` clauses. This forces the database to return unnecessary rows and wastes application memory.

```ruby
# PERF: loads ALL orders, then filters in Ruby
Order.all.select { |o| o.status == "pending" && o.created_at > 1.day.ago }

# SAFE: filter in SQL
Order.where(status: "pending").where("created_at > ?", 1.day.ago)
```

Also watch for: `.map { ... }.compact`, `.reject`, `.sort_by`, `.group_by`, or `.uniq` applied to ActiveRecord collections when the equivalent SQL operation exists.

#### 9.1.6 Inefficient COUNT Queries
**Severity: MEDIUM.** Using `.length` or `.size` on a loaded collection when `.count` (SQL `COUNT`) would avoid loading records. Conversely, using `.count` when the collection is already loaded triggers an unnecessary extra query — use `.size` instead, which is smart about this.

```ruby
# PERF: loads all records just to count them
User.where(active: true).to_a.length

# SAFE: SQL count
User.where(active: true).count
```

#### 9.1.7 Expensive Queries Inside Loops
**Severity: CRITICAL.** Any database query inside a loop, callback, or iterator — beyond simple N+1s. This includes `where` lookups, aggregations, or subqueries executed per-item. Restructure to batch-load data before the loop using a hash lookup.

```ruby
# PERF: one query per item
order.line_items.each do |li|
  discount = Discount.where(product_id: li.product_id, active: true).first
  li.apply_discount(discount)
end

# SAFE: batch load, then look up
discounts = Discount.where(product_id: order.line_items.map(&:product_id), active: true)
                     .index_by(&:product_id)
order.line_items.each do |li|
  li.apply_discount(discounts[li.product_id])
end
```

#### 9.1.8 Missing Query Caching for Repeated Identical Queries
**Severity: MEDIUM.** The same query executed multiple times within a single request (e.g., loading `current_user` or configuration settings in multiple places). Use memoization (`@current_user ||= ...`) or Rails' built-in query cache.

#### 9.1.9 Heavy Migrations Without Batching
**Severity: HIGH.** Data migrations that update or backfill large tables in a single `UPDATE` or `each` loop. These lock tables and can cause downtime. Use `find_each` or `in_batches` with `update_all` for large backfills, and consider running them outside of deploy transactions.

---

### 9.2 Rails Controller & Request Cycle

#### 9.2.1 Synchronous External API Calls in the Request Cycle
**Severity: CRITICAL.** Making HTTP calls to Stripe, Forage, or any third-party API synchronously during a web request. If the external service is slow or down, the user's request hangs. Offload to Sidekiq and return a 202/polling endpoint, or use a timeout with a fallback.

#### 9.2.2 Heavy Computation in Controllers or Model Callbacks
**Severity: HIGH.** Running expensive operations (PDF generation, image processing, complex calculations, bulk email sends) synchronously in the request cycle. These should always be in background jobs.

#### 9.2.3 Serializing Large Object Graphs in JSON Responses
**Severity: HIGH.** Jbuilder templates or `as_json` calls that recursively serialize deep association trees (e.g., order -> line_items -> products -> categories -> images). This triggers multiple queries and builds a massive JSON payload. Only serialize what the client needs. Use pagination for nested collections.

#### 9.2.4 Missing HTTP Caching Headers
**Severity: MEDIUM.** API responses for data that rarely changes (product catalog, categories, static configuration) without `Cache-Control`, `ETag`, or `Last-Modified` headers. Adding caching headers reduces redundant requests and database load.

---

### 9.3 Sidekiq & Background Jobs

#### 9.3.1 Unbounded Job Enqueueing
**Severity: CRITICAL.** A single action that enqueues thousands of individual jobs (e.g., one job per user for a notification blast). This floods the queue and can starve other jobs. Use batch processing within fewer jobs, or use Sidekiq Batches.

```ruby
# PERF: enqueues 10,000 individual jobs
User.find_each { |u| NotificationJob.perform_async(u.id) }

# SAFE: batch-process inside fewer jobs
User.find_in_batches(batch_size: 100) do |batch|
  BatchNotificationJob.perform_async(batch.map(&:id))
end
```

#### 9.3.2 Jobs That Load Entire Tables
**Severity: HIGH.** A background job that calls `Model.all` or processes an unbounded query. As the table grows, the job's memory usage and duration grow linearly. Always paginate processing inside jobs with `find_each` or `find_in_batches`.

#### 9.3.3 Expensive Operations Without Throttling
**Severity: MEDIUM.** Jobs that hammer an external API (Stripe, Forage, shipping providers) without rate limiting or concurrency controls. Use Sidekiq rate limiting, or add sleeps/throttles to avoid hitting API rate limits and getting blocked.

---

### 9.4 React Rendering Performance

#### 9.4.1 Unnecessary Re-renders from Unstable References
**Severity: HIGH.** Passing new object/array/function references as props on every render, causing child components to re-render unnecessarily. Stabilize with `useMemo`, `useCallback`, or by hoisting constants outside the component.

```typescript
// PERF: new object on every render, child always re-renders
<ProductList filters={{ category: "groceries" }} />

// SAFE: stable reference
const filters = useMemo(() => ({ category: "groceries" }), []);
<ProductList filters={filters} />
```

#### 9.4.2 Large Lists Rendered Without Virtualization
**Severity: HIGH.** Rendering hundreds or thousands of DOM nodes in a flat list (product catalogs, order histories, search results). The browser struggles with layout, paint, and event handling. Use a virtualization library (e.g., `react-window`, `react-virtuoso`) for lists exceeding ~50 visible items.

#### 9.4.3 Expensive Computations on Every Render
**Severity: HIGH.** Running filtering, sorting, mapping, or aggregation logic directly in the render body without `useMemo`. The computation re-runs on every render, even when the input data hasn't changed.

```typescript
// PERF: sorts on every render, even if items hasn't changed
const sorted = items.sort((a, b) => a.price - b.price);

// SAFE: only re-sorts when items change
const sorted = useMemo(
  () => [...items].sort((a, b) => a.price - b.price),
  [items]
);
```

#### 9.4.4 Uncontrolled Component Trees Re-rendering on Global State Changes
**Severity: MEDIUM.** Storing frequently-changing values (input text, mouse position, animation frames) in a global Context or store. Every consumer of that context re-renders on every change. Keep high-frequency state local, or split contexts into separate providers by update frequency.

#### 9.4.5 Inline Styles and Inline Functions in JSX
**Severity: MEDIUM.** Defining styles as inline objects (`style={{ margin: 10 }}`) or arrow functions (`onClick={() => handleClick(id)}`) inside JSX. Each render creates a new reference, potentially causing unnecessary re-renders in memoized children. Move to SCSS, Chakra props, or `useCallback`.

---

### 9.5 React Data Fetching & Caching

#### 9.5.1 Redundant API Calls on Every Mount
**Severity: HIGH.** Fetching data on every component mount without leveraging React Query's cache. Verify that `staleTime` and `cacheTime` are configured appropriately so navigation between pages does not trigger redundant identical requests.

#### 9.5.2 Fetching Data Not Needed for Initial Render
**Severity: MEDIUM.** Loading all data upfront when only a subset is needed. Use lazy loading, pagination, or conditional fetching (`enabled` flag in React Query) to defer requests until the data is actually needed (e.g., tab content, modal content, below-the-fold sections).

#### 9.5.3 Polling Without Interval Cleanup or Adaptive Backoff
**Severity: MEDIUM.** Using `refetchInterval` in React Query or `setInterval` to poll an endpoint without stopping when the tab is inactive or the data is no longer needed. React Query's `refetchIntervalInBackground: false` should be set, and intervals should be cleaned up on unmount.

#### 9.5.4 Overfetching: Requesting Fields the Component Does Not Use
**Severity: MEDIUM.** API endpoints that return large payloads when the consuming component only needs a few fields. While the backend drives the response shape (jbuilder), verify that endpoints serving list views return lean payloads (no nested associations or large text fields), and detail views are only called when needed.

---

### 9.6 Frontend Bundle & Asset Performance

#### 9.6.1 Importing Entire Libraries When Only a Submodule Is Needed
**Severity: HIGH.** Importing a full library (e.g., `import _ from 'lodash'`, `import * as Icons from '@chakra-ui/icons'`) when only one or two functions/components are used. Use named/destructured imports or subpath imports to enable tree-shaking.

```typescript
// PERF: imports the entire lodash library (~70KB)
import _ from "lodash";
const sorted = _.sortBy(items, "name");

// SAFE: imports only sortBy (~2KB)
import sortBy from "lodash/sortBy";
const sorted = sortBy(items, "name");
```

#### 9.6.2 Missing Code Splitting on Route Level
**Severity: MEDIUM.** All pages imported statically at the router level, bundled into a single chunk. The user downloads the entire app on first load. Use `React.lazy()` + `Suspense` for route-level code splitting so each page is loaded on demand.

```typescript
// PERF: entire page code is in the main bundle
import CheckoutPage from "./pages/Checkout";

// SAFE: lazy loaded, separate chunk
const CheckoutPage = React.lazy(() => import("./pages/Checkout"));
```

#### 9.6.3 Large Static Assets Not Optimized
**Severity: MEDIUM.** Images, fonts, or SVGs in `src/assets/` that are not compressed or properly sized. Verify that images use modern formats (WebP), appropriate dimensions, and that SVGs are optimized. Consider lazy loading images below the fold.

#### 9.6.4 Unused Dependencies in `package.json`
**Severity: MEDIUM.** Dependencies listed in `package.json` that are no longer imported anywhere in the codebase. These inflate `node_modules` and may increase bundle size if bundler tree-shaking is imperfect. Periodically audit with `depcheck` or similar tools.

---

### 9.7 Memory & Resource Leaks

#### 9.7.1 Growing In-Memory Collections Without Bounds
**Severity: HIGH.** Accumulating data in arrays, objects, or Maps that grow over time without eviction (e.g., caching results in a module-level variable, appending to a global log array). In long-running processes (Sidekiq workers, dev servers), this leads to memory bloat and eventual OOM crashes.

#### 9.7.2 ActiveRecord Objects Held in Memory Across Batches
**Severity: HIGH.** Processing large collections with `each` instead of `find_each`, keeping all instantiated ActiveRecord objects in memory simultaneously. `find_each` loads in batches and allows garbage collection between batches.

#### 9.7.3 Event Listeners or Subscriptions Never Removed (Frontend)
**Severity: MEDIUM.** Adding `window.addEventListener`, `document.addEventListener`, or WebSocket subscriptions without corresponding removal in a `useEffect` cleanup or component unmount. Over time, listeners stack up and degrade performance.

of #### 9.7.4 React Query Cache Growing Without Limits
**Severity: MEDIUM.** Dynamic query keys (e.g., including search terms or filter parameters) that generate an unbounded number of cache entries. Configure `cacheTime` to evict stale entries, or use `queryClient.removeQueries` for old entries.

---

## 10. Bug & Race Condition Detection

When reviewing code, actively scan for the following patterns. Each is a known source of bugs, data corruption, or race conditions in this stack. **If any pattern is detected, label it as a BUG in the review comment** with a severity level:
- **BUG:CRITICAL** - Will cause data loss, corruption, security breach, or payment errors in production.
- **BUG:HIGH** - Will cause incorrect behavior under normal usage or moderate load.
- **BUG:MEDIUM** - Will cause incorrect behavior under edge cases, concurrent requests, or specific timing.

---

### 10.1 Rails Race Conditions & Data Integrity

#### 10.1.1 `find_or_create_by` Without a Unique Database Constraint
**Severity: CRITICAL.** Two concurrent requests can both pass the `find` step and both execute `create`, resulting in duplicate records. Always pair `find_or_create_by` with a unique index on the relevant columns and rescue `ActiveRecord::RecordNotUnique` to retry.

```ruby
# BUG: race condition, duplicates possible
user = User.find_or_create_by(email: params[:email])

# SAFE: unique index on email + upsert or rescue
user = User.create_or_find_by(email: params[:email])
```

#### 10.1.2 Read-Then-Write Without Locking (TOCTOU)
**Severity: CRITICAL.** Reading a value, making a decision, and then writing based on that stale read. Another request can modify the record between the read and write. Use `with_lock` or `lock!` for pessimistic locking, or use optimistic locking via `lock_version` column.

```ruby
# BUG: balance can go negative under concurrent requests
order = Order.find(id)
if order.balance >= amount
  order.update!(balance: order.balance - amount)
end

# SAFE: pessimistic lock
order = Order.lock.find(id)
if order.balance >= amount
  order.update!(balance: order.balance - amount)
end
```

#### 10.1.3 Missing Database-Level Constraints
**Severity: HIGH.** Relying solely on ActiveRecord validations (`validates :email, uniqueness: true`) without a corresponding database unique index. Model validations are not race-condition-safe. Always enforce uniqueness, NOT NULL, and foreign keys at the database level in addition to the model.

#### 10.1.4 Operations Outside Transactions That Should Be Inside
**Severity: CRITICAL.** Multiple related database writes that are not wrapped in a transaction. If one fails, the database is left in an inconsistent state.

```ruby
# BUG: if line item creation fails, order exists without items
order = Order.create!(params)
params[:items].each { |item| order.line_items.create!(item) }

# SAFE: all or nothing
ActiveRecord::Base.transaction do
  order = Order.create!(params)
  params[:items].each { |item| order.line_items.create!(item) }
end
```

#### 10.1.5 Non-Atomic Counter Updates
**Severity: HIGH.** Using `update(count: record.count + 1)` instead of `increment!` or SQL atomic updates. Under concurrent requests, increments are lost.

```ruby
# BUG: lost updates under concurrency
product.update(stock: product.stock - quantity)

# SAFE: atomic SQL update
product.class.where(id: product.id).update_all("stock = stock - #{quantity.to_i}")
```

#### 10.1.6 Boolean Columns Without Default Values
**Severity: MEDIUM.** A boolean column without a `default: false` and `null: false` creates a three-state boolean (`true`, `false`, `nil`). Conditions like `unless record.active?` will pass for `nil`, which may not be intended.

#### 10.1.7 Enum Value Insertion in the Middle
**Severity: HIGH.** Adding a new value in the middle of an integer-backed `enum` shifts existing values and silently corrupts data. Always append new enum values at the end, or use hash syntax to assign explicit integers.

```ruby
# BUG: adding :processing in the middle shifts :completed and :refunded
enum status: [:pending, :processing, :completed, :refunded]

# SAFE: explicit integer mapping
enum status: { pending: 0, completed: 1, refunded: 2, processing: 3 }
```

---

### 10.2 Rails Callback & Lifecycle Traps

#### 10.2.1 Callbacks With Unintended Scope
**Severity: HIGH.** An `after_save` or `after_commit` callback that runs on every save when it should only run on create, or only when a specific attribute changes. Always scope callbacks with `on:` or conditional guards.

```ruby
# BUG: sends welcome email on every save, not just creation
after_save :send_welcome_email

# SAFE: scoped to creation only
after_commit :send_welcome_email, on: :create
```

#### 10.2.2 `delete` / `delete_all` Skipping Callbacks and Dependent Destruction
**Severity: HIGH.** Using `delete` or `delete_all` instead of `destroy` / `destroy_all` bypasses `before_destroy`, `after_destroy`, and `dependent: :destroy` on associations. This leaves orphan records and skips cleanup logic.

#### 10.2.3 Missing `dependent:` on Associations
**Severity: HIGH.** A `has_many` or `has_one` association without `dependent: :destroy` (or `:nullify`, `:restrict_with_error`) leaves orphan records when the parent is destroyed. Verify every parent association declares a dependent strategy.

#### 10.2.4 Unscoped Bulk Operations
**Severity: CRITICAL.** `Model.update_all(...)` or `Model.delete_all` without a `where` clause affects the entire table. Always verify bulk operations have explicit scoping.

---

### 10.3 Sidekiq & Background Job Bugs

#### 10.3.1 Non-Idempotent Jobs
**Severity: CRITICAL.** Sidekiq retries failed jobs automatically. If a job creates records, sends emails, charges payments, or calls external APIs without idempotency guards, retries produce duplicates or double-charges. Use unique constraints, idempotency keys, or status checks.

#### 10.3.2 Passing ActiveRecord Objects as Job Arguments
**Severity: HIGH.** Passing full objects instead of IDs. The object is serialized at enqueue time and may be stale when the job runs. Always pass IDs and reload inside the job. Also handle the case where the record no longer exists.

```ruby
# BUG: stale data, serialization issues
OrderProcessorJob.perform_async(order)

# SAFE: pass ID, reload in job, handle missing record
OrderProcessorJob.perform_async(order.id)
```

#### 10.3.3 Jobs Without Dead Record Handling
**Severity: MEDIUM.** A job receives an ID, but the record is deleted before the job executes. The job raises `ActiveRecord::RecordNotFound` and enters retry. Use `find_by` with an early return or rescue the not-found error.

#### 10.3.4 Webhook Double-Processing
**Severity: CRITICAL.** Payment webhooks (Stripe, Forage) can be delivered multiple times. If the handler does not check for prior processing (via an idempotency key or webhook event record), payments/refunds/state changes are processed multiple times.

---

### 10.4 Time & Date Bugs (Rails)

#### 10.4.1 Using `Time.now` or `Date.today` Instead of Rails Time Helpers
**Severity: MEDIUM.** `Time.now` and `Date.today` use the system time zone, not the application time zone. Always use `Time.current`, `Date.current`, `Time.zone.now`, or `DateTime.current`.

#### 10.4.2 Timezone-Naive Date Comparisons
**Severity: MEDIUM.** Comparing dates across time zones without normalization. A user's "today" may be different from the server's "today". Ensure date boundaries account for the user's or application's time zone.

---

### 10.5 Money & Payment Bugs

#### 10.5.1 Floating Point Arithmetic for Currency
**Severity: CRITICAL.** Using `Float` for money calculations causes rounding errors (e.g., `0.1 + 0.2 != 0.3`). Always use `BigDecimal` or integer cents. Verify that all price, amount, and total columns are `decimal` with explicit precision/scale, not `float`.

#### 10.5.2 Payment State Machine Gaps
**Severity: CRITICAL.** Payment records that can transition to invalid states (e.g., refunding an already-refunded order, completing a cancelled order). Verify that state transitions are guarded and that invalid transitions raise errors.

---

### 10.6 React State & Rendering Bugs

#### 10.6.1 Stale Closures in useEffect and Event Handlers
**Severity: HIGH.** A `useEffect` or event handler captures a stale variable from a previous render because the dependency array is missing the variable. The function operates on outdated state.

```typescript
// BUG: count is captured at render time, always uses initial value
useEffect(() => {
  const id = setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(id);
}, []);

// SAFE: use functional updater
useEffect(() => {
  const id = setInterval(() => setCount(prev => prev + 1), 1000);
  return () => clearInterval(id);
}, []);
```

#### 10.6.2 Missing or Incorrect useEffect Dependency Arrays
**Severity: HIGH.** Omitting dependencies causes the effect to run with stale data. Including object/array references that are recreated on every render causes the effect to run infinitely. Stabilize dependencies with `useMemo`/`useCallback` or restructure the effect.

#### 10.6.3 Infinite Re-render Loops
**Severity: CRITICAL.** Setting state inside a `useEffect` where the state variable (or a derived value) is also in the dependency array, causing an infinite cycle of render -> effect -> setState -> render.

```typescript
// BUG: infinite loop - data changes -> effect runs -> setData -> data changes
useEffect(() => {
  setData(transformData(data));
}, [data]);
```

#### 10.6.4 Memory Leaks from Uncleared Subscriptions
**Severity: MEDIUM.** `useEffect` sets up a subscription, timer, or event listener but does not return a cleanup function. On unmount, the callback fires and may call `setState` on an unmounted component or leak memory.

```typescript
// BUG: interval keeps running after unmount
useEffect(() => {
  setInterval(() => fetchData(), 5000);
}, []);

// SAFE: cleanup on unmount
useEffect(() => {
  const id = setInterval(() => fetchData(), 5000);
  return () => clearInterval(id);
}, []);
```

#### 10.6.5 Async State Update After Unmount
**Severity: MEDIUM.** An async operation (API call) completes after the component unmounts and calls `setState`, causing a warning or unexpected behavior. Use React Query's built-in cancellation, or an `AbortController`, or a mounted-check ref.

#### 10.6.6 Incorrect `key` Prop Causing Stale Component State
**Severity: HIGH.** Using array index as `key` in a list that can be reordered, filtered, or have items removed. React reuses the component instance and its internal state gets attached to the wrong item. Always use a stable, unique identifier as `key`.

```typescript
// BUG: index keys cause state to stick to wrong items on reorder
{items.map((item, idx) => <CartItem key={idx} item={item} />)}

// SAFE: use unique ID
{items.map(item => <CartItem key={item.id} item={item} />)}
```

#### 10.6.7 React Query Cache Serving Stale Data After Mutations
**Severity: HIGH.** A mutation (POST/PUT/DELETE) succeeds but the related query cache is not invalidated, causing the UI to show stale data. Always call `queryClient.invalidateQueries` for related queries after a mutation, or use `onSuccess` in the mutation config.

---

### 10.7 React Async & Data Flow Bugs

#### 10.7.1 Unhandled Promise Rejections
**Severity: HIGH.** An `async` function or Axios call without `.catch()` or try/catch. Unhandled rejections crash silently or show cryptic errors. Every async operation must have explicit error handling.

#### 10.7.2 Optimistic UI Without Rollback
**Severity: MEDIUM.** Updating the UI before the API call completes but not reverting the change if the API call fails. The user sees a success state that is actually a failure.

#### 10.7.3 Race Condition in Sequential Async Calls
**Severity: HIGH.** Two rapid user actions (e.g., double-click, rapid navigation) trigger two API calls. The second call's response arrives before the first, but the first response overwrites the second when it eventually arrives, leaving the UI in an inconsistent state. Use request cancellation (AbortController) or sequence IDs to discard stale responses.

---

### 10.8 Security Bugs

#### 10.8.1 Mass Assignment of Sensitive Fields
**Severity: CRITICAL.** Strong parameters that accidentally permit sensitive fields like `role`, `admin`, `balance`, `is_verified`, or `user_id`. Verify that only user-modifiable fields are permitted.

#### 10.8.2 Insecure Direct Object References (IDOR)
**Severity: CRITICAL.** Using user-supplied IDs to fetch records without verifying the current user owns or has access to that record. Always scope queries to the authenticated user (e.g., `current_user.orders.find(params[:id])` instead of `Order.find(params[:id])`).

#### 10.8.3 JWT Tokens Stored in localStorage
**Severity: HIGH.** Storing JWT tokens in `localStorage` makes them accessible to XSS attacks. Prefer `httpOnly` cookies or verify that proper XSS protections are in place. If localStorage is used, verify that user input is sanitized and no `dangerouslySetInnerHTML` is used without sanitization.

#### 10.8.4 Exposing Internal Error Details to the Client
**Severity: MEDIUM.** Returning full exception messages, stack traces, or internal model details in API error responses. Error responses should return generic, user-friendly messages. Log the detailed error server-side.

---

### 10.9 General Logic Bugs

#### 10.9.1 Off-by-One Errors in Pagination and Loops
**Severity: MEDIUM.** Using `>` instead of `>=`, starting at 0 instead of 1, or miscalculating page offsets. Verify boundary conditions in loops, pagination, and array slicing.

#### 10.9.2 Nil/Undefined Not Handled on Conditional Paths
**Severity: HIGH.** Accessing properties on a value that could be `nil` (Ruby) or `undefined`/`null` (TypeScript) without a guard. Check for safe navigation (`&.` in Ruby, `?.` in TypeScript) or explicit nil checks on any value that originates from a database query, API response, or optional parameter.

#### 10.9.3 Silent Rescue / Empty Catch Blocks
**Severity: HIGH.** Rescuing all exceptions (`rescue => e`) or catching errors (`catch (e) {}`) without logging, re-raising, or handling them. This hides bugs and makes debugging nearly impossible. At minimum, log the error. Never rescue `Exception` in Ruby (use `StandardError`).

```ruby
# BUG: swallows all errors silently, including syntax errors
rescue Exception => e
end

# SAFE: specific rescue with logging
rescue ActiveRecord::RecordNotFound => e
  Rails.logger.warn("Record missing: #{e.message}")
  head :not_found
```

#### 10.9.4 Hardcoded IDs, URLs, or Environment-Specific Values
**Severity: MEDIUM.** Hardcoded database IDs, API URLs, or values that differ between environments. These break in staging/production or when data is re-seeded. Use environment variables, configuration objects, or database lookups.

---

## 11. Review Process

### Before Approving
1. Pull the branch locally and run the full test suite if any doubt exists.
2. Verify that all CI checks pass (RSpec, Vitest, RuboCop, ESLint, TypeScript compilation).
3. Verify the PR description clearly describes what was changed and why.
4. Verify the PR is linked to the corresponding Linear ticket.
5. If the PR introduces a new pattern or technology, verify that it was discussed and agreed upon beforehand.

### Requesting Changes
- Be specific about what needs to change and why.
- Reference these rules by section number when requesting changes (e.g., "See Section 3.2 - missing column comment on migration", "BUG:CRITICAL - See Section 10.1.1 - find_or_create_by without unique index", or "PERF:HIGH - See Section 9.1.1 - N+1 query in jbuilder partial").
- Distinguish between blocking issues (must fix) and suggestions (nice to have).

### Approval Criteria
A PR is ready to merge when:
- All checklist items relevant to the changes are satisfied.
- All CI checks pass.
- At least one reviewer has approved.
- No unresolved blocking comments remain.
