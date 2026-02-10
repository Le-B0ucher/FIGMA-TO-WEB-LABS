# Course 02 — Figma for Developers

> **Type:** Theory & Guided Exploration · **Time:** 45–60 min · **Code:** None (Figma only)

---

## Overview

Figma is the industry-standard tool for UI/UX design. As a developer, you don't need to *create* designs — you need to **read, inspect, and extract** information from them efficiently. This module teaches you to think like a developer inside Figma.

---

## Learning Objectives

By the end of this module you will be able to:

1. Navigate the Figma interface confidently (layers, pages, canvas, properties panel)
2. Use **Dev Mode** to inspect CSS-ready values
3. Extract exact colors, fonts, spacing, and dimensions
4. Understand **Auto Layout** and how it maps to CSS Flexbox
5. Export assets (icons, images) in the correct formats
6. Read **component** and **variant** structures
7. Understand the difference between a designer's intent and pixel-perfect implementation

---

## 1 — The Figma Interface (Developer's Perspective)

When you open a Figma file, you see four main areas:

```
┌─────────────────────────────────────────────────────┐
│  Toolbar (top)                                       │
├──────────┬──────────────────────┬───────────────────┤
│          │                      │                   │
│  Layers  │      Canvas          │   Properties      │
│  Panel   │   (the design)       │   Panel (right)   │
│  (left)  │                      │                   │
│          │                      │                   │
├──────────┴──────────────────────┴───────────────────┤
│  Pages (top-left tabs)                               │
└─────────────────────────────────────────────────────┘
```

### What each area tells you

| Area | Developer use |
|---|---|
| **Pages** | Switch between design pages (Desktop, Mobile, Components, etc.) |
| **Layers panel** | See the element tree — similar to the HTML DOM |
| **Canvas** | The visual design — click to select elements |
| **Properties panel** | Inspect dimensions, colors, fonts, spacing, CSS |

### Essential Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl/Cmd + \` | Toggle the UI panels |
| `Ctrl/Cmd + 0` | Zoom to 100% |
| `Ctrl/Cmd + 1` | Zoom to fit all |
| `Alt` + hover | Show distances between elements |
| `Ctrl/Cmd + click` | Select nested element directly |
| `Escape` | Select parent |

---

## 2 — Dev Mode

Figma's **Dev Mode** (toggle in the top-right corner) is designed specifically for developers. It changes the interface to show:

### 2.1 What Dev Mode Shows

- **CSS code** for any selected element (font, color, size, layout properties)
- **Spacing annotations** automatically visible on hover
- **Asset export** options
- **Red-line measurements** between elements

### 2.2 Reading the CSS Panel

When you select an element in Dev Mode, the right panel shows CSS like:

```css
/* Figma Dev Mode output example */
width: 380px;
height: 48px;
padding: 12px 24px;
background: #2563EB;
border-radius: 6px;
font-family: 'Source Sans 3';
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
```

**Important notes:**
- Figma outputs `width` and `height`, but in responsive design you often **don't** hard-code these
- Figma uses `px` values; you may convert to `rem` in your CSS (1rem = 16px)
- The CSS output is a **starting point**, not copy-paste production code

### 2.3 How to Enable Dev Mode

1. Open a Figma file
2. Click the **`</>`** icon in the top toolbar, or press `Shift + D`
3. The interface switches to Dev Mode
4. Click any element → inspect the CSS panel on the right

**Exercise:** Open the FocusFlow Figma file. Switch to Dev Mode. Click on the primary button in the hero section. Compare the CSS Figma shows with the button styles in `design/figma-design-brief.md` (in this folder). Are they the same?

---

## 3 — Inspecting Design Properties

### 3.1 Colors

Click any element and look at the **Fill** section in the properties panel:

- **Hex code:** `#2563EB` — most common in CSS
- **RGB:** `rgb(37, 99, 235)` — useful for opacity: `rgba(37, 99, 235, 0.5)`
- **HSL:** `hsl(217, 91%, 53%)` — useful for creating color palettes

**Tip:** Always verify colors against the design tokens document. Designers sometimes tweak colors slightly — the tokens are the source of truth.

### 3.2 Typography

Select a text element to see:

| Property | Where to find it | CSS equivalent |
|---|---|---|
| Font family | Typography section | `font-family` |
| Font weight | Typography section (Regular, Bold, etc.) | `font-weight` |
| Font size | Typography section | `font-size` |
| Line height | Typography section (may show as %, px, or auto) | `line-height` |
| Letter spacing | Typography section (may show as %) | `letter-spacing` |
| Text alignment | Typography section | `text-align` |
| Text color | Fill section | `color` |

### 3.3 Spacing & Dimensions

- **Element size:** Width and height shown in the top of the properties panel
- **Padding:** Visible inside Auto Layout frames (shows as internal spacing)
- **Margins/Gaps:** Hold `Alt` and hover over nearby elements — Figma shows the distance in pixels
- **Border radius:** Look in the properties panel, corner radius field

**Exercise:** In the FocusFlow file, select a feature card. Write down:
1. Card width and height
2. Internal padding (all four sides)
3. Border radius
4. Gap between the card title and card description
5. Background color and border color

---

## 4 — Understanding Auto Layout → Flexbox

Figma's **Auto Layout** is almost a 1:1 mapping to CSS Flexbox:

| Figma Auto Layout | CSS Flexbox |
|---|---|
| Direction: Horizontal | `flex-direction: row` |
| Direction: Vertical | `flex-direction: column` |
| Gap between items | `gap` |
| Padding | `padding` |
| Alignment (primary axis) | `justify-content` |
| Alignment (counter axis) | `align-items` |
| Hug contents | `width: auto` (shrink to fit) |
| Fill container | `flex: 1` or `width: 100%` |
| Fixed width | `width: 380px` |

### Reading Auto Layout in Figma

1. Select a **frame** (not a shape or text) — it should say "Auto layout" in the right panel
2. Note the **direction arrow** (→ or ↓)
3. Note the **gap value** (space between children)
4. Note the **padding** values (space inside the frame)
5. Check each child's **sizing** (Hug, Fill, or Fixed)

**Exercise:** In the FocusFlow file, select the header frame. Write the CSS flexbox equivalent:
```css
.header {
  display: flex;
  flex-direction: /* ? horizontal or vertical? */;
  justify-content: /* ? how are items distributed? */;
  align-items: /* ? how are items aligned vertically? */;
  padding: /* ? what padding did you read? */;
  gap: /* ? space between logo and nav? */;
}
```

---

## 5 — Exporting Assets

### 5.1 When to Export

Not everything in a Figma file needs to be exported. You export:

- **Icons** → SVG format (scalable, small file size)
- **Photos/Illustrations** → PNG (transparency) or JPG (photos, smaller file)
- **Logos** → SVG (vector, scales perfectly)

You do **not** export:
- Rectangles, buttons, or cards — you build those with HTML + CSS
- Text — you type it in HTML
- Background colors or gradients — you set those in CSS

### 5.2 How to Export

1. Select the element (e.g., an icon)
2. In the right panel, scroll to the **Export** section
3. Click `+` to add an export setting
4. Choose format: **SVG** for icons, **PNG @2x** for images
5. Click **Export [element name]**

### 5.3 Export Best Practices

| Asset type | Format | Scale | Naming |
|---|---|---|---|
| Icons | SVG | 1x | `icon-check.svg` |
| Logo | SVG | 1x | `logo.svg` |
| Photos | JPG | 2x | `hero-image.jpg` |
| Illustrations | PNG | 2x | `feature-illustration.png` |

**Exercise:** Find an icon in the FocusFlow file (or any Figma community file). Export it as SVG. Open the SVG file in a text editor — you'll see it's actually XML/HTML-like code!

---

## 6 — Components & Variants

### 6.1 What Are Components?

In Figma, a **Component** is a reusable design element (just like a reusable CSS class or HTML snippet). When a designer creates a component:

- The **main component** (purple diamond icon ◆) is the source of truth
- **Instances** (hollow diamond ◇) are copies that inherit from the main

As a developer, this maps to your mental model:

```
Figma Component  →  CSS class (reusable style)
Figma Instance   →  HTML element using that class
Figma Variant    →  CSS modifier class (e.g., .button--primary)
```

### 6.2 Reading Variants

A Figma component can have **variants** — think of them as different states or types:

```
Button (Component)
├── Variant: Type = Primary    → .button--primary
├── Variant: Type = Secondary  → .button--secondary
├── Variant: Type = Ghost      → .button--ghost
├── Variant: State = Hover     → .button:hover
├── Variant: State = Disabled  → .button:disabled
└── Variant: Size = Small      → .button--sm
```

In the properties panel, variants appear as dropdowns. Clicking through them shows you each visual state.

### 6.3 Mapping Components to Code

When you see a component, ask yourself:

1. **What is the base HTML element?** (`<button>`, `<div>`, `<input>`, etc.)
2. **What is the base CSS class?** (`.button`, `.card`, `.input`)
3. **How many variants are there?** Each variant = a modifier class
4. **What changes between variants?** (color? size? border? background?)

**Exercise:** In the FocusFlow file, find the Button component page. List all the variants. For each, note what CSS properties change.

---

## 7 — The Developer Mindset in Figma

### What designers expect from developers

| Designers expect... | Developers should... |
|---|---|
| Visual fidelity | Match colors, fonts, spacing closely — but ask about edge cases |
| Responsive behavior | Ask: "How should this look at 768px?" if not specified |
| Interaction states | Implement hover, focus, active, disabled states |
| Consistency | Use the same values as the design tokens, not "close enough" |

### What designers do NOT expect

- **Pixel-perfect at every breakpoint** — responsive behavior requires developer judgment
- **Hard-coded widths from Figma** — use `max-width`, `flex`, `%` instead of `width: 1440px`
- **Copy-paste Figma CSS** — it's a starting point, not production code

### Common Developer Mistakes with Figma

| Mistake | Better approach |
|---|---|
| Copying `width: 1440px` from Figma | Use `max-width: 1440px` + `margin: 0 auto` |
| Using Figma's absolute positioning | Use Flexbox/Grid for layout |
| Ignoring spacing tokens | Use consistent spacing variables |
| Building without checking mobile frame | Always build mobile-first, then desktop |
| Guessing hover states | Ask the designer or check the component variants |

---

## Summary

| Skill | What you learned |
|---|---|
| Navigation | Layers, pages, canvas, properties panel |
| Dev Mode | One-click CSS inspection, spacing annotations |
| Color extraction | Hex, RGB, HSL from the Fill section |
| Typography | Font family, size, weight, line-height from text properties |
| Spacing | Alt+hover for distances, Auto Layout for padding/gap |
| Auto Layout → Flexbox | Direct mapping from Figma layout to CSS flex properties |
| Asset export | SVG for icons, PNG/JPG for images |
| Components | Read variants to plan CSS classes and modifiers |

---

## Self-Check Questions

1. You select a button in Figma Dev Mode and see `width: 180px`. Should you write `width: 180px` in your CSS? Why or why not?
2. A Figma frame shows "Auto Layout: Horizontal, Gap: 24, Padding: 16 32". Write the equivalent CSS.
3. When should you export an element as SVG vs PNG?
4. A designer's button component has 4 variants: Primary, Secondary, Ghost, Disabled. How would you structure this in HTML + CSS using BEM?

---

## Further Reading

- 📖 [Figma for Developers (official)](https://www.figma.com/best-practices/tips-for-developer-handoff/)
- 🎬 [Figma Dev Mode Overview (YouTube)](https://www.youtube.com/results?search_query=figma+dev+mode+for+developers)
- 📐 [A Developer's Guide to Figma Auto Layout](https://www.figma.com/blog/auto-layout/)
- 🧩 [Understanding Figma Components](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma)

---

*Previous → [Course 01: Design Fundamentals](../course-01-design-fundamentals/README.md)*
*Next → [Course 03: Design-to-Code Workflow](../course-03-design-to-code-workflow/README.md)*
