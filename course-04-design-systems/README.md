# Course 04 — Design Systems

> **Type:** Theory & Case Study · **Time:** 40–50 min · **Code:** None

---

## Overview

A **design system** is the bridge between design and development at scale. While design tokens define the atomic values and components define the building blocks, a design system is the **complete, living documentation** that ties everything together. Understanding design systems is essential for any developer working in a professional team.

---

## Learning Objectives

By the end of this module you will be able to:

1. Define what a design system is (and what it is *not*)
2. Explain **Atomic Design** methodology (atoms → molecules → organisms → templates → pages)
3. Understand how design tokens, components, and patterns relate
4. Read and contribute to a **style guide / component library**
5. Recognize real-world design systems (Material Design, Apple HIG, Tailwind)
6. Apply design-system thinking to the FocusFlow project

---

## 1 — What Is a Design System?

### 1.1 Definition

> A design system is a **collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.**

It includes:

| Layer | Examples | Who maintains it |
|---|---|---|
| **Principles** | "Clarity over decoration", "Mobile-first" | Design + Product |
| **Design Tokens** | Colors, fonts, spacing, shadows | Design + Dev |
| **Components** | Button, Card, Input, Modal, Navbar | Dev (built), Design (designed) |
| **Patterns** | Form layout, navigation flow, error handling | Design + Dev |
| **Documentation** | Usage guidelines, do's and don'ts, code examples | Dev + Tech writer |

### 1.2 What a Design System Is NOT

| It is NOT... | Why |
|---|---|
| A Figma file | Figma is one *artifact* within a design system |
| A CSS framework | CSS frameworks provide code; design systems provide intent + code |
| A component library alone | Components are *part of* a system, not the whole system |
| A style guide alone | Style guides document visual rules; systems also include behavior + patterns |
| Finished | A design system is **living** — it evolves with the product |

---

## 2 — Atomic Design

Brad Frost's **Atomic Design** is the most widely used mental model for organizing design systems.

### 2.1 The Five Levels

```
┌─────────────────────────────────────────────────┐
│                    PAGES                         │  Complete, real-content screens
├─────────────────────────────────────────────────┤
│                  TEMPLATES                       │  Page-level layouts (no real content)
├─────────────────────────────────────────────────┤
│                 ORGANISMS                        │  Complex UI sections
├─────────────────────────────────────────────────┤
│                 MOLECULES                        │  Simple component groups
├─────────────────────────────────────────────────┤
│                   ATOMS                          │  Smallest building blocks
└─────────────────────────────────────────────────┘
```

### 2.2 Each Level Explained

| Level | What it is | FocusFlow examples |
|---|---|---|
| **Atoms** | Smallest UI elements that can't be broken down further | Button, Input field, Label, Icon, Heading |
| **Molecules** | Groups of atoms that form a simple functional unit | Search bar (input + button), Navigation link (icon + text) |
| **Organisms** | Complex UI components made of molecules and atoms | Header (logo + nav links + CTA button), Feature card (icon + heading + text) |
| **Templates** | Page-level layouts showing structure without real content | Landing page layout (header + hero + features + footer) |
| **Pages** | Templates filled with real content | The actual FocusFlow landing page |

### 2.3 Why Atomic Design Matters for Developers

```
Without atomic thinking:
  ├── styles.css (1500 lines, everything mixed)
  └── index.html (one monolithic file)

With atomic thinking:
  ├── tokens.css      (design tokens — atoms)
  ├── buttons.css     (atom)
  ├── inputs.css      (atom)
  ├── card.css        (molecule/organism)
  ├── header.css      (organism)
  ├── layout.css      (template)
  └── index.html      (page)
```

Even if you write all your CSS in one file (which is fine for small projects), **thinking** in atoms helps you structure your code logically.

**Exercise:** Classify every visual element in the FocusFlow landing page into Atomic Design levels. Draw a tree diagram showing: Atoms → Molecules → Organisms → Template → Page.

---

## 3 — Design Tokens in Depth

We introduced design tokens in Course 03. Here we go deeper.

### 3.1 Token Categories

| Category | Examples | CSS property |
|---|---|---|
| **Color** | Primary, secondary, neutral shades, semantic | `color`, `background`, `border-color` |
| **Typography** | Font families, sizes, weights, line-heights | `font-family`, `font-size`, `font-weight`, `line-height` |
| **Spacing** | Margin/padding scale | `margin`, `padding`, `gap` |
| **Sizing** | Component sizes, icon sizes | `width`, `height` |
| **Border** | Radius, width, style | `border-radius`, `border` |
| **Shadow** | Elevation levels | `box-shadow` |
| **Motion** | Duration, easing | `transition`, `animation` |
| **Z-index** | Layer ordering | `z-index` |

### 3.2 Token Naming Conventions

Good token names are **descriptive** and **hierarchical**:

```css
/* ❌ Bad: unclear, not scalable */
--blue: #2563EB;
--padding: 16px;

/* ✅ Good: category + purpose */
--color-primary: #2563EB;
--space-md: 16px;

/* ✅ Better: category + purpose + variant (for large systems) */
--color-primary-base: #2563EB;
--color-primary-hover: #1D4ED8;
--color-primary-light: #DBEAFE;
```

### 3.3 Token Tiers (Reference vs System vs Component)

Large design systems organize tokens in tiers:

```
Tier 1: Reference Tokens (raw values)
  --blue-500: #2563EB;
  --gray-100: #F1F5F9;

Tier 2: System Tokens (semantic purpose)
  --color-primary: var(--blue-500);
  --color-bg: var(--gray-100);

Tier 3: Component Tokens (specific usage)
  --button-bg: var(--color-primary);
  --button-color: var(--color-white);
```

For the FocusFlow project, **Tier 2 (System Tokens)** is sufficient. Tiers are important to understand for professional work.

**Exercise:** Rewrite the FocusFlow design tokens using all three tiers. Start with reference tokens (raw color values), then system tokens (semantic names), then component tokens (button-specific, card-specific).

---

## 4 — Building a Component Library

### 4.1 What Is a Component Library?

A **component library** is the code implementation of your design system's components. Each component is:

- **Self-contained** — it works independently of where it's placed
- **Documented** — it has usage guidelines and code examples
- **Configurable** — it supports variants via modifiers
- **Accessible** — it has proper ARIA attributes and keyboard support

### 4.2 Documenting a Component

A well-documented component includes:

```markdown
## Button

### Description
A clickable element that triggers an action.

### Variants
| Variant | Class | Use case |
|---|---|---|
| Primary | `.button--primary` | Main actions (Submit, Sign Up) |
| Secondary | `.button--secondary` | Secondary actions (Learn More) |
| Ghost | `.button--ghost` | Tertiary actions (Cancel, Back) |

### Sizes
| Size | Class | Padding |
|---|---|---|
| Small | `.button--sm` | 8px 16px |
| Default | `.button` | 12px 24px |
| Large | `.button--lg` | 16px 32px |

### States
- **Default** — base appearance
- **Hover** — darker background
- **Focus** — visible outline (keyboard navigation)
- **Disabled** — reduced opacity, no pointer cursor

### Usage
✅ DO: Use primary for the single most important action on a page
❌ DON'T: Use more than one primary button per section
✅ DO: Always include visible focus styles for accessibility
❌ DON'T: Use a button when a link (`<a>`) is more appropriate

### Code Example
​```html
<button class="button button--primary">Sign Up Free</button>
<button class="button button--secondary">Learn More</button>
<button class="button button--ghost">Cancel</button>
​```
```

### 4.3 Building a Style Guide Page

A style guide page is a single HTML page that showcases all your components:

```
style-guide.html
├── Colors (swatches with hex values)
├── Typography (heading sizes, body text)
├── Spacing (visual blocks showing the scale)
├── Buttons (all variants, all states)
├── Cards (all variants)
├── Inputs (all states: empty, focused, error, disabled)
├── Navigation (header, footer)
└── Layout examples (grid, flex)
```

**Exercise:** After completing Lab 05, create a `style-guide.html` page that displays every component you built using BEM classes, side by side, with labels.

---

## 5 — Real-World Design Systems

### 5.1 Famous Design Systems

| Design System | Company | Key idea |
|---|---|---|
| [Material Design](https://m3.material.io/) | Google | Physical-world metaphors, elevation via shadows |
| [Human Interface Guidelines](https://developer.apple.com/design/) | Apple | Platform consistency, clarity, deference |
| [Lightning Design System](https://www.lightningdesignsystem.com/) | Salesforce | Enterprise-grade, token-based |
| [Polaris](https://polaris.shopify.com/) | Shopify | E-commerce focus, accessibility-first |
| [Carbon](https://carbondesignsystem.com/) | IBM | Enterprise, data-dense interfaces |
| [Tailwind CSS](https://tailwindcss.com/) | Open Source | Utility-first, token-based (in a way) |

### 5.2 What to Learn from Each

| System | Study it for... |
|---|---|
| **Material Design** | Component anatomy, state behavior, accessibility |
| **Polaris** | How to write component documentation |
| **Carbon** | Token organization, grid system |
| **Tailwind** | How design tokens can be expressed as utility classes |

### 5.3 Investigating a Design System

**Exercise:** Visit [Material Design 3](https://m3.material.io/) and find the Button component page. Answer:
1. How many button types are there?
2. What are the defined states?
3. How is the anatomy of a button described?
4. What accessibility guidelines are mentioned?

---

## 6 — Design System Thinking Applied to FocusFlow

Let's apply everything to our course project:

### 6.1 FocusFlow as a Mini Design System

```
FocusFlow Design System
│
├── Principles
│   ├── Clean and minimal
│   ├── Mobile-first responsive
│   └── Accessible (visible focus states)
│
├── Tokens (defined in course-02-figma-for-developers/design/README.md)
│   ├── Colors: 7 tokens
│   ├── Typography: 2 font families, 7 sizes
│   ├── Spacing: 6 values (4–48px)
│   └── Border radius: 3 values
│
├── Atoms
│   ├── Button (Primary, Secondary, Ghost)
│   ├── Input Field
│   ├── Heading (H1, H2, H3)
│   └── Paragraph
│
├── Molecules
│   ├── Feature Card (icon + heading + text)
│   ├── Pricing Box (price + description + button)
│   └── Navigation (logo + link group)
│
├── Organisms
│   ├── Header (logo + nav + CTA button)
│   ├── Hero (content block + image)
│   ├── Features Grid (3 × feature card)
│   └── Footer (text + links)
│
└── Template
    └── Landing Page layout
```

### 6.2 Scaling the System

If FocusFlow grew into a real product, you'd add:

- **New components:** Table, Dropdown, Tabs, Tooltip, Avatar
- **New tokens:** Animation durations, z-index layers, breakpoints
- **New patterns:** Form validation flow, toast notifications, loading states
- **Dark mode:** A second set of color tokens
- **Tools:** You'd move from vanilla CSS to a preprocessor like **Sass/SCSS** for better organization (see Lab 07!)

---

## 7 — When Does a Project Need a Design System?

| Project size | Recommendation |
|---|---|
| Single landing page | Design tokens + consistent class names (what we do in this course) |
| 2–5 page website | Tokens + documented components + a style guide page |
| SaaS application | Full design system with principles, tokens, components, patterns, documentation |
| Multi-team enterprise | Shared design system package (npm, Figma library), versioned, with a dedicated team |

---

## Summary

| Concept | Key takeaway |
|---|---|
| Design System | Collection of reusable components + clear standards + documentation |
| Atomic Design | Atoms → Molecules → Organisms → Templates → Pages |
| Design Tokens | Named, hierarchical values (color, spacing, typography) organized in tiers |
| Component Library | Self-contained, documented, configurable, accessible components |
| Style Guide | A reference page showing all components and their variants |
| Real-world systems | Material, Polaris, Carbon — study them for best practices |

---

## Self-Check Questions

1. Explain the difference between a **CSS framework** (like Bootstrap) and a **design system**. When would you use each?
2. In Atomic Design, is a navigation bar an **atom**, **molecule**, or **organism**? Justify your answer.
3. Why do large design systems use three tiers of tokens (reference → system → component)?
4. A teammate writes `background: #2563EB;` directly in their CSS instead of using `var(--color-primary)`. Why is this a problem?
5. When is it overkill to build a design system?

---

## Further Reading

- 📖 [*Atomic Design*](https://atomicdesign.bradfrost.com/) — Brad Frost (free online book)
- 📖 [*Design Systems*](https://www.smashingmagazine.com/design-systems-book/) — Alla Kholmatova (Smashing Magazine)
- 🎨 [Design Systems Gallery](https://designsystemsrepo.com/design-systems/) — collection of real design systems
- 📐 [Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- 🏗️ [Component Gallery](https://component.gallery/) — compare components across 60+ design systems

---

*Previous → [Course 03: Design-to-Code Workflow](../course-03-design-to-code-workflow/README.md)*
*Next → [Lab 00: Figma Basics](../lab-00-figma-basics/README.md) (Start the hands-on labs!)*
