# Course 01 — Design Fundamentals for Web Developers

> **Type:** Theory & Reading · **Time:** 45–60 min · **Code:** None

---

## Overview

Before you open Figma or write a single line of CSS, you need to understand the **design principles** that guide every visual decision on the web. This module gives you the vocabulary and mental models to *read* a design critically — not just replicate it pixel by pixel.

---

## Learning Objectives

By the end of this module you will be able to:

1. Explain the four core principles of visual design (Contrast, Repetition, Alignment, Proximity — **CRAP**)
2. Recognize and apply a basic **color theory** vocabulary (hue, saturation, lightness, complementary, analogous)
3. Understand **typography fundamentals** (typeface vs font, serif vs sans-serif, hierarchy, line-height, letter-spacing)
4. Describe the role of **whitespace** (negative space) in user-interface readability
5. Identify **visual hierarchy** techniques used in real landing pages

---

## 1 — The Four Principles of Visual Design (CRAP)

These four principles, popularized by Robin Williams in *The Non-Designer's Design Book*, form the foundation of every good layout.

### 1.1 Contrast

> If two elements are not the same, make them **very** different.

Contrast draws the eye and creates hierarchy. Common contrast tools:

| Tool | Example |
|---|---|
| **Size** | A 40 px heading beside 16 px body text |
| **Weight** | Bold title vs regular paragraph |
| **Color** | Dark text on a light background |
| **Shape** | A rounded button on a page of rectangular cards |

**Key rule:** If you mean to make something different, make the difference *obvious*. Subtle differences look like mistakes.

### 1.2 Repetition

> Repeat visual elements throughout the design to create **consistency**.

Repetition builds a sense of unity:

- Same font family for all headings
- Same primary color on every call-to-action button
- Same border-radius on every card
- Same spacing scale everywhere (4 px, 8 px, 16 px, 24 px, 48 px)

In code, repetition maps to **CSS custom properties** and **component reuse**.

### 1.3 Alignment

> Every element should have a visual connection to something else on the page.

Nothing should be placed arbitrarily. In practice:

- Left-align body text (avoid center-align for long paragraphs)
- Align headings with their body text
- Use a **grid** or **flex layout** so elements snap to invisible lines
- In Figma, notice how designers use alignment guides and auto-layout

### 1.4 Proximity

> Group related items together. Separate unrelated items.

Proximity tells the brain what belongs together:

- A label should be **closer** to its input field than to the next label
- Cards in a feature section are grouped with equal gaps
- The footer sits visually apart from the main content

**Exercise:** Open any landing page (e.g., stripe.com, linear.app). For each section, identify which of the four CRAP principles is most strongly used.

---

## 2 — Color Theory Basics

### 2.1 The HSL Model

Designers think in **HSL** (Hue, Saturation, Lightness) rather than hex codes:

```
hsl(220, 90%, 56%)
 │    │    └── Lightness: 0% = black, 100% = white
 │    └─────── Saturation: 0% = grey, 100% = vivid
 └──────────── Hue: 0–360° on the color wheel (0=red, 120=green, 240=blue)
```

### 2.2 Color Relationships

| Relationship | Description | Example |
|---|---|---|
| **Complementary** | Opposite on the wheel (high contrast) | Blue + Orange |
| **Analogous** | Adjacent on the wheel (harmonious) | Blue + Teal + Cyan |
| **Triadic** | Three colors equally spaced (vibrant) | Red + Yellow + Blue |
| **Monochromatic** | One hue, varying saturation/lightness | Light blue → Dark blue |

### 2.3 Color in UI

Most professional web designs use a **limited palette**:

| Role | Count | Purpose |
|---|---|---|
| **Primary** | 1 color | Main brand/action color |
| **Secondary** | 1 color | Supporting accent |
| **Neutral** | 3–5 shades | Backgrounds, text, borders |
| **Semantic** | 3 colors | Success (green), Warning (amber), Error (red) |

**Exercise:** Look at the FocusFlow design tokens in `../course-02-figma-for-developers/design/README.md`. Classify each color into the roles above (Primary, Secondary, Neutral, Semantic).

---

## 3 — Typography Fundamentals

### 3.1 Typeface vs Font

- **Typeface** = the design family (e.g., "Playfair Display")
- **Font** = a specific style within that family (e.g., "Playfair Display Bold 40px")

### 3.2 Serif vs Sans-Serif

| Type | Characteristics | Best for | Examples |
|---|---|---|---|
| **Serif** | Small strokes at letter ends | Headings, editorial | Playfair Display, Georgia, Times |
| **Sans-Serif** | Clean, no strokes | Body text, UI | Source Sans, Inter, Roboto |
| **Monospace** | Equal-width characters | Code blocks | Fira Code, JetBrains Mono |

### 3.3 Typography Hierarchy

A good page uses **3 levels** of typographic hierarchy:

```
Level 1 — Page Title     → largest, boldest (32–48px, 700 weight)
Level 2 — Section Title  → medium (20–28px, 600 weight)
Level 3 — Body Text      → comfortable reading size (16–18px, 400 weight)
```

### 3.4 Key CSS Properties for Typography

| Property | What it controls | Good defaults |
|---|---|---|
| `font-size` | Text size | 16px for body |
| `font-weight` | Thickness | 400 (regular), 600 (semi-bold), 700 (bold) |
| `line-height` | Space between lines | 1.5–1.7 for body, 1.2 for headings |
| `letter-spacing` | Space between characters | Slight negative for large headings |
| `color` | Text color | Never pure `#000000` — use dark grey like `#0F172A` |

**Exercise:** Open the FocusFlow Figma file. For each text element you see, note: typeface, weight, size, line-height, and color.

---

## 4 — Whitespace (Negative Space)

Whitespace is not "empty" — it is an active design element.

### Why whitespace matters

- **Readability:** Text with generous padding and line-height is easier to read
- **Focus:** Whitespace around a CTA button draws the eye to it
- **Elegance:** Premium brands use more whitespace than budget brands

### The Spacing Scale

Designers use a **consistent spacing scale** so spacing never feels random:

```
4px   →  xs   (tight, e.g., icon + label)
8px   →  sm   (within a component)
16px  →  md   (between related elements)
24px  →  lg   (between sections on mobile)
32px  →  xl   (between sections on mobile/tablet)
48px  →  2xl  (between major sections on desktop)
```

Notice that each value is roughly a **multiple of 4** or **8**. This is called a **4-point grid** or **8-point grid** — the most common spatial system in UI design.

**Exercise:** In the FocusFlow design, measure (or look up) the spacing between:
1. The header and the hero section
2. The hero heading and the hero paragraph
3. Two feature cards
4. The last section and the footer

Do those values fit an 8-point grid?

---

## 5 — Visual Hierarchy

Visual hierarchy is the order in which the eye processes information. Designers create hierarchy with:

1. **Size** — Larger elements are seen first
2. **Color/Contrast** — Bright or high-contrast elements pop
3. **Position** — Top-left for LTR languages is seen first
4. **Typography** — Bold, larger type draws attention
5. **Whitespace** — Isolated elements feel more important

### The Squint Test

Blur your eyes (or squint) while looking at a design. The elements you can still identify are the **primary hierarchy** — they should be the most important content (heading, CTA button, hero image).

**Exercise:** Take a screenshot of the FocusFlow design. Apply a Gaussian blur in any image editor (or squint). List the 3 elements that are still identifiable. Are they the most important elements for a landing page?

---

## Summary

| Concept | Key Takeaway |
|---|---|
| CRAP Principles | Contrast, Repetition, Alignment, Proximity guide every layout |
| Color Theory | Use HSL thinking; limit your palette to Primary + Secondary + Neutrals |
| Typography | 3 levels of hierarchy; serif for headings, sans-serif for body |
| Whitespace | Active design tool; follow a consistent spacing scale (4pt/8pt grid) |
| Visual Hierarchy | Size, color, position, type, and space control what the eye sees first |

---

## Self-Check Questions

1. You receive a design where two buttons look *almost* the same but one is slightly darker. Which CRAP principle is being violated?
   On oublie ici le principe de contraste.
3. Why do most UI color palettes include only 1–2 brand colors but 3–5 neutral shades?
   Les neutres premettent de structurer alors que les couleurs de marques sont pour les actios importantes.
5. A designer hands you a mockup where body text is 14px with a line-height of 1.1. What would you suggest changing, and why?
   body text: 16px et line-height: 1.6
7. Explain the difference between *margin* (CSS) and *whitespace* (design principle).
   Le whitespace est un principe visuel alors que le margin est une réel propriété CSS.

---

## Further Reading

- 📖 [*The Non-Designer's Design Book*](https://www.amazon.com/dp/0133966151) — Robin Williams
- 🎨 [Refactoring UI](https://www.refactoringui.com/) — practical visual design for developers
- 🌈 [Color Hunt](https://colorhunt.co/) — curated color palette inspiration
- 📝 [Typewolf](https://www.typewolf.com/) — font pairing recommendations
- 📐 [Spacing, Grids and Layouts](https://www.designsystems.com/space-grids-and-layouts/) — Design Systems article

---

*Next → [Course 02: Figma for Developers](../course-02-figma-for-developers/README.md)*
