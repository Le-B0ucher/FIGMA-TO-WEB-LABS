# Course 03 — Design-to-Code Workflow

> **Type:** Theory & Process · **Time:** 40–50 min · **Code:** None

---

## Overview

Knowing HTML, CSS, and Figma individually is not enough. The real skill is the **workflow** — the systematic process of going from a design file to a production-ready web page. This module teaches you the professional handoff process used in teams worldwide.

---

## Learning Objectives

By the end of this module you will be able to:

1. Describe the complete design-to-code pipeline (7 steps)
2. Create a **design audit** before writing any code
3. Extract and organize **design tokens** into CSS custom properties
4. Plan an **HTML structure** from a visual layout
5. Follow a systematic **build order** (structure → style → layout → responsive → interactivity)
6. Perform a **design review** to catch discrepancies

---

## 1 — The Design-to-Code Pipeline

Professional developers follow a predictable pipeline:

```
┌──────────────┐
│  1. RECEIVE  │  Get the Figma file / design specs
└──────┬───────┘
       ▼
┌──────────────┐
│  2. AUDIT    │  Study the design — don't code yet
└──────┬───────┘
       ▼
┌──────────────┐
│  3. EXTRACT  │  Pull out tokens (colors, fonts, spacing)
└──────┬───────┘
       ▼
┌──────────────┐
│  4. PLAN     │  Map visual sections → HTML structure
└──────┬───────┘
       ▼
┌──────────────┐
│  5. BUILD    │  Code in order: HTML → CSS → Layout → Responsive → JS
└──────┬───────┘
       ▼
┌──────────────┐
│  6. REVIEW   │  Compare your build to the design
└──────┬───────┘
       ▼
┌──────────────┐
│  7. REFINE   │  Fix discrepancies, clean up code
└──────────────┘
```

**Key insight:** Steps 2–4 (Audit, Extract, Plan) happen **before you write any code**. Skipping them is the #1 cause of messy, hard-to-maintain front-end code.

---

## 2 — Step 1: Receive the Design

In a professional setting, a designer hands off a design via:

- **Figma link** — you open it in the browser and use Dev Mode
- **Design brief** — a document describing the design intent (like our `figma-design-brief.md`)
- **Design tokens file** — a structured list of colors, fonts, and spacing
- **Verbal walkthrough** — the designer explains interactions, edge cases, and priorities

### What to ask when you receive a design

| Question | Why it matters |
|---|---|
| "Which breakpoints should I support?" | Mobile, tablet, desktop? Just mobile + desktop? |
| "Are there hover/focus states defined?" | You need to know *before* building |
| "What content is dynamic vs static?" | Affects HTML structure (e.g., loops, conditionals) |
| "Are there animations or transitions?" | May need JS or CSS animations |
| "What's the priority: pixel-perfect or speed?" | Affects your time investment |
| "Is there a component library or style guide?" | Avoid reinventing existing patterns |

**Exercise:** Imagine you just received the FocusFlow design. Write down 5 questions you'd ask the designer.

---

## 3 — Step 2: The Design Audit

Before writing a single line of code, spend **15–20 minutes** studying the design. This is called a **Design Audit**.

### The Audit Checklist

```markdown
## Design Audit: [Project Name]

### Colors
- [ ] List all unique colors used
- [ ] Identify: primary, secondary, neutrals, semantic
- [ ] Check: are all colors from the design tokens?

### Typography
- [ ] List all font families used
- [ ] List all font sizes (heading sizes, body, small text)
- [ ] List all font weights used
- [ ] Note line-heights if specified

### Spacing
- [ ] Identify the spacing scale (4px? 8px? custom?)
- [ ] Note section padding
- [ ] Note gaps between elements
- [ ] Note internal component padding

### Layout
- [ ] How many major sections? List them.
- [ ] What layout model? (flex row, flex column, grid)
- [ ] How many columns in multi-column areas?
- [ ] Is there a max-width container?

### Components
- [ ] List all reusable components (buttons, cards, inputs, etc.)
- [ ] For each component, list its variants
- [ ] Note interaction states (hover, focus, active, disabled)

### Responsive
- [ ] Are there mobile + desktop frames?
- [ ] What changes between breakpoints?
- [ ] What elements hide/show on different sizes?

### Assets
- [ ] Icons needed? → will export as SVG
- [ ] Images needed? → will export as PNG/JPG
- [ ] Any custom illustrations?
```

**Exercise:** Complete this audit checklist for the FocusFlow design using the Figma file and the design brief in `../course-02-figma-for-developers/design/figma-design-brief.md`.

---

## 4 — Step 3: Extract Design Tokens

Design tokens are the **atomic values** that make up a design. They are:

### 4.1 What Are Design Tokens?

```
Design Tokens = the smallest design decisions
                → colors, fonts, sizes, spacing, shadows, borders
```

They are called "tokens" because they are **named references** — instead of writing `#2563EB` everywhere, you write `--color-primary` and define it once.

### 4.2 Organizing Tokens in CSS

```css
:root {
  /* ─── Colors ─── */
  --color-bg:        #F8FAFC;
  --color-text:      #0F172A;
  --color-muted:     #64748B;
  --color-primary:   #2563EB;
  --color-secondary: #0EA5E9;
  --color-white:     #FFFFFF;
  --color-border:    #E2E8F0;

  /* ─── Typography ─── */
  --font-heading: 'Playfair Display', serif;
  --font-body:    'Source Sans 3', sans-serif;

  /* ─── Font Sizes ─── */
  --text-xs:  12px;
  --text-sm:  14px;
  --text-md:  16px;
  --text-lg:  20px;
  --text-xl:  24px;
  --text-2xl: 32px;
  --text-3xl: 40px;

  /* ─── Spacing ─── */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-2xl: 48px;

  /* ─── Border Radius ─── */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;

  /* ─── Shadows ─── */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
}
```

### 4.3 Benefits of Tokens

| Without tokens | With tokens |
|---|---|
| `color: #2563EB;` scattered in 20 places | `color: var(--color-primary);` — change once, update everywhere |
| "Is this blue the same blue?" guessing game | Token name guarantees consistency |
| Designer changes a color → you search-and-replace | Designer changes → you update one variable |

**Exercise:** Look at the `../course-02-figma-for-developers/design/README.md` file. Are all the design tokens already documented? Create a complete `:root` block in a text file with every token.

---

## 5 — Step 4: Plan the HTML Structure

Before coding, sketch the HTML tree on paper or in a comment block:

### 5.1 Visual-to-HTML Mapping

```
Figma layout                    HTML structure
──────────────                  ──────────────
Header bar          →           <header>
  Logo              →             <div class="logo">
  Navigation        →             <nav>
    Link, Link...   →               <a>, <a>, <a>

Hero section        →           <section class="hero">
  Left column       →             <div class="hero__content">
    Heading         →               <h1>
    Paragraph       →               <p>
    Two buttons     →               <div class="hero__actions">
  Right column      →             <div class="hero__image">
    Image           →               <img>

Features section    →           <section class="features">
  3 cards           →             <div class="card"> × 3

Pricing section     →           <section class="pricing">
  Price box         →             <div class="pricing__box">

Footer              →           <footer>
```

### 5.2 Naming Convention

Use a consistent naming approach. For this course we recommend **BEM**:

| Element | BEM class |
|---|---|
| The hero section | `.hero` (block) |
| The content area inside hero | `.hero__content` (element) |
| A highlighted hero variant | `.hero--dark` (modifier) |

### 5.3 Semantic HTML Decision Tree

```
Is it the page header with logo + nav?     → <header>
Is it the main content area?               → <main>
Is it a thematic section with a heading?   → <section>
Is it navigation links?                    → <nav>
Is it the page footer?                     → <footer>
Is it a standalone, self-contained content? → <article>
Is it a generic container for styling?     → <div>
```

**Exercise:** Without looking at Lab 01's code, create an HTML tree diagram for the FocusFlow landing page based solely on the design brief.

---

## 6 — Step 5: The Build Order

Always build in this order — each layer depends on the previous one:

```
Layer 1: HTML Structure        (semantic tags, content, no styles)
    ↓
Layer 2: CSS Reset + Tokens    (:root variables, box-sizing, font import)
    ↓
Layer 3: Typography & Color    (font-family, font-size, color, background)
    ↓
Layer 4: Component Styles      (buttons, cards, inputs — self-contained)
    ↓
Layer 5: Layout (Flexbox)      (flex containers, gaps, alignment)
    ↓
Layer 6: Responsive            (mobile-first, then media queries)
    ↓
Layer 7: JavaScript            (interactions, only after the DOM is stable)
```

### Why this order matters

- **HTML first:** If your structure is wrong, CSS and JS work becomes exponentially harder
- **Tokens before styles:** Ensures consistency from the start
- **Typography before layout:** Text content determines element sizes, which affects layout
- **Components before layout:** Isolated component styles don't depend on their position
- **Responsive last (but designed first):** Mobile-first CSS is written base → up
- **JS last:** The DOM structure should be stable before attaching event listeners

**Exercise:** Looking at Labs 01–07, verify that they follow this build order. Which lab corresponds to which layer?

---

## 7 — Step 6: Design Review

After building, systematically compare your implementation to the design:

### The Overlay Method

1. Take a screenshot of your web page (same viewport width as the Figma frame)
2. Place it in an image editor with 50% opacity over the Figma design
3. Look for misalignments — especially:
   - Font sizes
   - Spacing between elements
   - Color matching
   - Border radius
   - Button padding

### The Checklist Method

```markdown
## Design Review Checklist

### Colors
- [ ] Background color matches
- [ ] Text colors match (heading, body, muted)
- [ ] Button colors match (primary, secondary)
- [ ] Border colors match

### Typography
- [ ] Correct font families loaded (check network tab)
- [ ] Heading sizes match
- [ ] Body text size matches
- [ ] Font weights match
- [ ] Line heights feel correct

### Spacing
- [ ] Section padding matches
- [ ] Element gaps match
- [ ] Component internal padding matches

### Layout
- [ ] Header alignment matches
- [ ] Hero layout matches (side-by-side on desktop)
- [ ] Feature cards are equal width
- [ ] Footer alignment matches

### Responsive
- [ ] Mobile layout matches mobile frame
- [ ] Breakpoint transition is smooth
- [ ] No horizontal scrollbar at any width

### Components
- [ ] Button variants look correct
- [ ] Cards match the design
- [ ] Hover states work as expected
```

**Exercise:** Build a habit — after completing each lab, use this checklist to review your work.

---

## 8 — Step 7: Refine

Common refinements after the first review:

| Issue | Fix |
|---|---|
| Colors slightly off | Double-check hex values against tokens |
| Spacing feels wrong | Use browser DevTools to measure, compare to design |
| Font not loading | Check the `@import` URL and network tab |
| Layout breaks at certain width | Add a breakpoint or use `min-width`/`max-width` |
| Button looks different | Compare padding, border-radius, font properties |
| Text overflows on mobile | Use `overflow-wrap: break-word` or reduce font size |

### Using Browser DevTools for Refinement

1. **Right-click → Inspect** any element
2. In the **Styles** panel, modify CSS values live to see the effect
3. In the **Computed** panel, see the final applied values
4. Use the **box model diagram** to see margin, border, padding, content
5. Toggle **device toolbar** to test responsive widths

---

## The Complete Workflow — Summary

```
RECEIVE → AUDIT → EXTRACT → PLAN → BUILD → REVIEW → REFINE
           │        │         │       │        │        │
           │        │         │       │        │        └── Fix discrepancies
           │        │         │       │        └── Compare to design file
           │        │         │       └── HTML → CSS → Layout → Responsive → JS
           │        │         └── Map visual sections to HTML tree
           │        └── Design tokens → CSS :root variables
           └── 15-min study: colors, fonts, spacing, components
```

This workflow scales from a single landing page to a 100-page application.

---

## Self-Check Questions

1. Why should you spend 15–20 minutes studying a design *before* writing any code?
2. What is the difference between a design token and a CSS custom property?
3. In the build order, why does typography come before layout?
4. You notice your header padding is `20px` instead of the design's `16px 24px`. At which step in the workflow would you catch this?
5. A teammate asks: "Why don't we just copy the CSS from Figma Dev Mode?" How would you respond?

---

## Further Reading

- 📖 [Design Handoff Best Practices](https://www.figma.com/best-practices/tips-for-developer-handoff/)
- 📐 [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- 🔍 [Chrome DevTools for CSS Debugging](https://developer.chrome.com/docs/devtools/css/)
- 🏗️ [CSS Architecture for Modern Front-end](https://cube.fyi/)

---

*Previous → [Course 02: Figma for Developers](../course-02-figma-for-developers/README.md)*
*Next → [Course 04: Design Systems](../course-04-design-systems/README.md)*
