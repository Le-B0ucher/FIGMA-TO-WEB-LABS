# Lab 07 — CSS to Sass/SCSS

> **Difficulty:** Beginner to Intermediate · **Time:** 40–50 min · **Prerequisites:** Lab 02–05 completed

---

## Overview

In Labs 02–05 you wrote all your styles in plain CSS. That works perfectly for small projects, but as projects grow, vanilla CSS becomes hard to organise and maintain. **Sass** (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds powerful features — variables, nesting, mixins, partials, and more — while compiling down to standard CSS that every browser understands.

In this lab you will **convert existing CSS into SCSS** and learn the features that make Sass the most widely used CSS preprocessor in the industry.

---

## Learning Objectives

By the end of this lab you will be able to:

1. Explain what a CSS preprocessor is and why Sass/SCSS exists
2. Distinguish between **Sass** (indented syntax) and **SCSS** (CSS-like syntax)
3. Use SCSS **variables** (`$name`) and understand how they differ from CSS custom properties
4. Use **nesting** to mirror your HTML structure
5. Create **partials** and use `@use` to organize styles into multiple files
6. Write **mixins** for reusable style patterns
7. Use **`@extend`** for shared styles and understand when to use it vs mixins
8. Compile SCSS to CSS using a VS Code extension (no Node.js required)

---

## Background: What Is a CSS Preprocessor?

```
┌─────────────┐      compile      ┌─────────────┐      browser
│  style.scss │  ──────────────►  │  style.css  │  ──────────────►  renders
│  (you write)│                   │ (generated)  │                   the page
└─────────────┘                   └─────────────┘
```

A **preprocessor** takes a file written in an enhanced syntax (SCSS) and compiles it into standard CSS. The browser never sees your SCSS — it only loads the final `.css` file.

### Sass vs SCSS

| Syntax | File extension | Style |
|---|---|---|
| **Sass** (indented) | `.sass` | No braces, no semicolons (Python-like) |
| **SCSS** (Sassy CSS) | `.scss` | Uses braces and semicolons (CSS-like) |

We use **SCSS** in this lab because it looks like CSS — every valid CSS file is already valid SCSS.

```scss
// SCSS (what we use — CSS-like)
.button {
  padding: 10px 16px;
  &--primary {
    background: $color-primary;
  }
}

// Sass (indented — alternative syntax)
.button
  padding: 10px 16px
  &--primary
    background: $color-primary
```

---

## Setup: Compiling SCSS Without Node.js

We keep this course dependency-free. Use the **Live Sass Compiler** VS Code extension:

1. Open VS Code
2. Go to Extensions (`Ctrl + Shift + X`)
3. Search for **"Live Sass Compiler"** by *Glenn Marks*
4. Install it
5. After installation, a button **"Watch Sass"** appears in the VS Code status bar (bottom)
6. Click **"Watch Sass"** — it will automatically compile any `.scss` file into a `.css` file in the same folder

**Test it:** Create a file called `test.scss` with `body { color: red; }`. Save it. A `test.css` file should appear automatically. Delete both files when confirmed.

---

## Step 1 — Understand the Starting CSS

Open the provided `style.css` file in this folder. It contains the component styles from Lab 05:

```css
/* Current: plain CSS with custom properties */
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-primary: #2563eb;
  --color-secondary: #0ea5e9;
  --color-white: #ffffff;
  --color-border: #e2e8f0;
}
```

Your task: convert this step-by-step into SCSS.

---

## Step 2 — SCSS Variables

SCSS variables use the `$` prefix and are resolved **at compile time** (unlike CSS custom properties which are resolved at runtime):

```scss
// ─── SCSS Variables ───
$color-bg:        #f8fafc;
$color-text:      #0f172a;
$color-muted:     #64748b;
$color-primary:   #2563eb;
$color-secondary: #0ea5e9;
$color-white:     #ffffff;
$color-border:    #e2e8f0;

$font-body:    'Source Sans 3', Arial, sans-serif;
$font-heading: 'Playfair Display', serif;

$radius-sm: 4px;
$radius-md: 6px;
$radius-lg: 8px;

$space-xs:  4px;
$space-sm:  8px;
$space-md:  16px;
$space-lg:  24px;
$space-xl:  32px;
$space-2xl: 48px;
```

### SCSS Variables vs CSS Custom Properties

| Feature | SCSS `$variable` | CSS `var(--variable)` |
|---|---|---|
| Resolved | At compile time | At runtime in the browser |
| Scope | Follows SCSS file structure | Follows CSS cascade |
| Can change with media queries | ❌ No | ✅ Yes |
| Can be used in `calc()` | Only the computed value | ✅ Yes, dynamically |
| Browser support | All (compiles to plain values) | Modern browsers only |
| Best for | Static values, math, logic | Theming, runtime changes, dark mode |

**Best practice:** Use SCSS variables for build-time values (spacing scale, breakpoints, configuration). Keep CSS custom properties for values that need to change at runtime (themes, dark mode).

**✏️ Action:** Open `style.scss` and add the SCSS variables at the top. Replace all hard-coded values in your styles with the corresponding `$variable`.

---

## Step 3 — Nesting

Nesting is SCSS's most popular feature. It lets you mirror your HTML structure:

### Before (flat CSS):

```css
.card {
  padding: 16px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
}

.card__title {
  margin-top: 0;
  margin-bottom: 8px;
}

.card__text {
  margin-top: 0;
  color: #64748b;
}
```

### After (nested SCSS):

```scss
.card {
  padding: $space-md;
  border: 1px solid $color-border;
  background: $color-white;

  &__title {
    margin-top: 0;
    margin-bottom: $space-sm;
  }

  &__text {
    margin-top: 0;
    color: $color-muted;
  }
}
```

### The `&` Parent Selector

The `&` symbol refers to the parent selector. When compiled:

```scss
.card {
  &__title { ... }   // Compiles to: .card__title
  &__text { ... }     // Compiles to: .card__text
  &--featured { ... } // Compiles to: .card--featured
  &:hover { ... }     // Compiles to: .card:hover
}
```

### Nesting Rules

| ✅ Do | ❌ Don't |
|---|---|
| Nest BEM elements (`&__element`) | Nest more than 3 levels deep |
| Nest pseudo-classes (`&:hover`, `&:focus`) | Nest unrelated elements |
| Nest modifiers (`&--variant`) | Create selectors like `.a .b .c .d .e` |
| Keep nesting shallow (max 3 levels) | Nest just because you can |

**The golden rule:** If your compiled CSS selector has more than **3 parts**, you're nesting too deep.

**✏️ Action:** Convert the `.button`, `.card`, and `.field` blocks in `style.scss` to use nesting with `&`.

---

## Step 4 — Partials and @use

As your project grows, one giant SCSS file becomes unwieldy. **Partials** let you split styles into smaller files:

### 4.1 Creating Partials

A partial is an SCSS file whose name starts with `_` (underscore):

```
lab-07-sass-scss/
├── scss/
│   ├── _variables.scss    ← design tokens
│   ├── _base.scss         ← reset, body, global styles
│   ├── _buttons.scss      ← button component
│   ├── _cards.scss        ← card component
│   ├── _fields.scss       ← input field component
│   └── main.scss          ← imports everything
├── css/
│   └── main.css           ← compiled output
└── index.html
```

### 4.2 Using @use

The modern way to import partials is `@use` (not the older `@import` which is deprecated):

```scss
// main.scss
@use 'variables' as *;    // Makes all $ variables available without prefix
@use 'base';
@use 'buttons';
@use 'cards';
@use 'fields';
```

**Note:** You don't write the `_` prefix or `.scss` extension in the `@use` statement.

### 4.3 Namespacing with @use

By default, `@use` namespaces variables under the file name:

```scss
// In _variables.scss
$color-primary: #2563eb;

// In _buttons.scss
@use 'variables';

.button--primary {
  background: variables.$color-primary;  // Namespaced!
}

// OR use `as *` to remove the namespace:
@use 'variables' as *;

.button--primary {
  background: $color-primary;  // Direct access
}
```

**✏️ Action:** Split your `style.scss` into partials: `_variables.scss`, `_base.scss`, `_buttons.scss`, `_cards.scss`, `_fields.scss`. Create a `main.scss` that imports them all.

---

## Step 5 — Mixins

A **mixin** is a reusable block of styles. Think of it like a function that outputs CSS:

### 5.1 Basic Mixin

```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Usage:
.hero {
  @include flex-center;
  min-height: 400px;
}
```

Compiles to:

```css
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}
```

### 5.2 Mixin with Arguments

```scss
@mixin button-variant($bg-color, $text-color: $color-white) {
  background: $bg-color;
  color: $text-color;

  &:hover {
    background: darken($bg-color, 10%);  // Built-in Sass color function!
  }
}

// Usage:
.button {
  &--primary {
    @include button-variant($color-primary);
  }
  &--secondary {
    @include button-variant($color-secondary);
  }
  &--ghost {
    @include button-variant(transparent, $color-primary);
  }
}
```

### 5.3 Responsive Mixin

```scss
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;

@mixin respond-to($breakpoint) {
  @if $breakpoint == 'md' {
    @media (min-width: $breakpoint-md) { @content; }
  } @else if $breakpoint == 'lg' {
    @media (min-width: $breakpoint-lg) { @content; }
  }
}

// Usage:
.features {
  display: flex;
  flex-direction: column;
  gap: $space-md;

  @include respond-to('md') {
    flex-direction: row;
  }
}
```

### 5.4 Useful Starter Mixins

```scss
// Truncate text with ellipsis
@mixin text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Visually hidden (accessible to screen readers)
@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

// Flex shorthand
@mixin flex($direction: row, $justify: flex-start, $align: stretch) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}
```

**✏️ Action:** Create a `_mixins.scss` partial. Add `flex-center`, `button-variant`, and `respond-to` mixins. Use them in your button and layout styles.

---

## Step 6 — @extend and Placeholder Selectors

### 6.1 @extend

`@extend` lets one selector inherit styles from another:

```scss
.button {
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.button--primary {
  @extend .button;
  background: $color-primary;
  color: $color-white;
}
```

### 6.2 Placeholder Selectors (%)

To avoid generating a `.button` class in the compiled CSS (if you only want the extended versions), use a **placeholder**:

```scss
%button-base {
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.button--primary {
  @extend %button-base;
  background: $color-primary;
  color: $color-white;
}

.button--secondary {
  @extend %button-base;
  background: $color-secondary;
  color: $color-white;
}
```

Compiles to:

```css
.button--primary, .button--secondary {
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.button--primary {
  background: #2563eb;
  color: #ffffff;
}

.button--secondary {
  background: #0ea5e9;
  color: #ffffff;
}
```

### 6.3 @extend vs @mixin — When to Use Which

| Use | When |
|---|---|
| `@extend` | The styles are identical and the selectors are logically related |
| `@mixin` | The styles need arguments, or they are used in unrelated contexts |

**Rule of thumb:** If it takes parameters, use a mixin. If it's a fixed shared base, use `@extend`.

---

## Step 7 — Built-in Sass Functions

Sass includes powerful built-in functions:

### Color Functions

```scss
$primary: #2563eb;

darken($primary, 10%)      // → #1d4fbc  (darker shade for hover)
lighten($primary, 30%)     // → #b3cdfa  (lighter shade for backgrounds)
rgba($primary, 0.5)        // → rgba(37, 99, 235, 0.5)
mix($primary, #000, 80%)   // → mix 80% primary + 20% black
adjust-hue($primary, 30)   // → shift hue by 30°
```

### Math

```scss
$base: 16px;

math.div($base, 2)       // → 8px (modern Sass division)
$base * 1.5               // → 24px
percentage(math.div(1, 3))// → 33.3333%
```

### String Functions

```scss
to-upper-case('hello')  // → 'HELLO'
str-index('Source Sans', 'Sans')  // → 8
```

**✏️ Action:** In your button styles, use `darken()` for hover states and `lighten()` for focus ring colors instead of hard-coding hex values.

---

## Step 8 — Complete Conversion

At this point, your folder structure should look like:

```
lab-07-sass-scss/
├── scss/
│   ├── _variables.scss     ← $colors, $spacing, $fonts, $radii
│   ├── _mixins.scss        ← flex-center, button-variant, respond-to
│   ├── _base.scss          ← reset, body, .page styles
│   ├── _buttons.scss       ← .button with nested BEM + mixin usage
│   ├── _cards.scss         ← .card with nested BEM
│   ├── _fields.scss        ← .field with nested BEM
│   └── main.scss           ← @use imports everything
├── css/
│   └── main.css            ← auto-compiled by Live Sass Compiler
├── style.css               ← original CSS (keep for comparison)
├── index.html              ← links to css/main.css
└── README.md
```

Check that:
- [ ] `index.html` links to `css/main.css` (the compiled output)
- [ ] Live Sass Compiler is watching
- [ ] The page looks **identical** to Lab 05 — the compiled CSS should produce the same result

---

## Bonus Challenges

1. **Dark mode with SCSS maps:** Create a `$themes` map with `light` and `dark` keys, and a mixin that generates CSS custom properties for each theme
2. **Loop for spacing utilities:** Use `@each` to generate utility classes like `.mt-xs`, `.mt-sm`, `.mt-md`, etc.
3. **Button size mixin:** Create a mixin that takes a size (`sm`, `md`, `lg`) and sets appropriate padding and font-size
4. **Sass `@forward`:** Research `@forward` and use it to create a `_index.scss` barrel file

---

## Reflection Questions

1. If SCSS compiles to CSS, why not just write CSS directly? When does the extra tooling pay off?
2. SCSS `$variables` are static (compile-time), CSS `var()` is dynamic (runtime). Give a use case where each is better.
3. You nested 5 levels deep and ended up with `.page .section .card .card__body .card__text`. What's the problem and how would you fix it?
4. A teammate asks: "Should we switch from CSS to Sass for our 3-page website?" What's your advice?

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Nesting too deep (4+ levels) | Flatten — use BEM to avoid deep nesting |
| Using `@import` instead of `@use` | `@import` is deprecated — always use `@use` |
| Forgetting the `_` prefix on partials | Partials must start with `_` (e.g., `_variables.scss`) |
| Putting `@use` after other rules | `@use` must be at the **top** of the file (before any other rules) |
| Not watching for compilation | Click "Watch Sass" in the VS Code status bar |

---

## Success Criteria

- [ ] SCSS compiles without errors
- [ ] The compiled CSS produces the **same visual result** as the original plain CSS
- [ ] You used variables, nesting, at least one mixin, and at least one partial
- [ ] No nesting deeper than 3 levels
- [ ] Code is commented and organized

---

*Previous → [Lab 06: JavaScript Interactions](../lab-06-javascript-interactions/README.md)*
*Next → [Lab 08: Mini Project](../lab-08-mini-project/README.md)*
