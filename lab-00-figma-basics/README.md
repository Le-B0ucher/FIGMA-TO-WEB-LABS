# Lab 00: Figma Basics — Reading a Design as a Developer

**Difficulty**: ⭐ Beginner
**Time**: 30–40 minutes
**Concepts**: Figma interface, design inspection, color extraction, font identification, spacing measurement

## 🎯 Learning Objectives

- Understand what Figma is and why developers use it
- Navigate a Figma file confidently (pages, layers, canvas)
- Inspect and extract colors, fonts, and spacing values
- Identify page sections and reusable components
- Build a "design spec sheet" that you will use when coding

## 📋 Exercise Description

In this lab, you will **not write any code**. Instead, you will learn how to read a Figma design file and extract all the information you need before writing a single line of HTML or CSS.

> 💡 This is the most important step in real-world web development: **understanding the design before coding**.

## 🛠️ Setup

### Step 1: Create a Figma Account

1. Go to [figma.com](https://www.figma.com/)
2. Click **Sign up** (it's free)
3. Verify your email address

### Step 2: Open a Practice Design

Option A — Use the course Figma file:
1. Open the link provided by your instructor
2. Click **Duplicate to your drafts** (top-right corner)

Option B — Use a Figma Community file:
1. Go to [Figma Community](https://www.figma.com/community)
2. Search for **"Simple Landing Page"**
3. Click **Duplicate** on any free template

### Step 3: Prepare a Document

Open a text file, Google Doc, or notebook. You will take notes during this lab.

## 📝 Step-by-Step Instructions

### Step 1: Understand the Figma Interface

When you open a Figma file, you will see 4 main areas:

| Area | Position | Purpose |
|------|----------|---------|
| **Pages panel** | Top-left | Switch between pages (Desktop, Mobile, etc.) |
| **Layers panel** | Left sidebar | See the hierarchy of all elements |
| **Canvas** | Center | The main design area |
| **Properties panel** | Right sidebar | See size, color, font, spacing of selected element |

**Try this now:**
1. Click on different elements in the canvas
2. Look at the right panel — it changes for each element
3. Click on a page name in the top-left to switch pages

### Step 2: Learn to Navigate

| Action | How |
|--------|-----|
| Move around the canvas | Hold **Space** + drag |
| Zoom in/out | **Ctrl + scroll wheel** (or Cmd on Mac) |
| Zoom to fit | **Ctrl + 1** |
| Select an element | Click on it |
| Select a nested element | Double-click to enter groups |

**Try this now:**
1. Zoom in on the header area
2. Double-click a button to select the text inside
3. Zoom back out with Ctrl+1

### Step 3: Inspect Colors

1. Click on any **shape** or **text element**
2. In the right panel, find the **Fill** section
3. Click on the color swatch to see the HEX value (e.g., `#1F2937`)
4. Copy the HEX value

**Write down in your notes:**
```
COLORS:
- Background: #______
- Primary text: #______
- Secondary text: #______
- Button color: #______
- Accent color: #______
```

### Step 4: Inspect Typography

1. Click on a **text element** (heading, paragraph, button text)
2. In the right panel, find the **Text** section
3. Note these properties:
   - **Font family** (e.g., Inter, Roboto, Poppins)
   - **Font size** (e.g., 48px, 16px)
   - **Font weight** (e.g., Regular 400, Bold 700)
   - **Line height** (e.g., 120%, 1.5)

**Write down in your notes:**
```
TYPOGRAPHY:
- Heading font: ______, weight: ______, size: ______
- Paragraph font: ______, weight: ______, size: ______
- Button text font: ______, weight: ______, size: ______
```

### Step 5: Measure Spacing

1. Click on an element (e.g., a card)
2. Hold **Alt** (Option on Mac) and hover over another element
3. Figma will show the **distance in pixels** between them
4. Also check the **padding** inside elements (select the container and look at "Auto layout" or "Padding" in the right panel)

**Write down in your notes:**
```
SPACING:
- Space between header and hero: ______px
- Space between cards: ______px
- Padding inside a card: ______px
- Page horizontal padding: ______px
```

### Step 6: Identify Sections

Look at the full page and identify the main blocks:

1. **Header**: Usually contains logo + navigation links
2. **Hero**: The big top section with main heading + call-to-action button
3. **Features/Content**: Repeated blocks (often cards)
4. **Footer**: Bottom section with links and copyright

**Write down in your notes:**
```
PAGE SECTIONS:
1. Header — contains: ______
2. Hero — contains: ______
3. Features — contains: ______
4. Footer — contains: ______
```

### Step 7: Identify Components

Components are elements that appear multiple times with the same structure:
- Buttons (same shape, different text)
- Cards (same layout, different content)
- Input fields (same style)

**Write down in your notes:**
```
COMPONENTS:
- Button: colors ______, border-radius ______, padding ______
- Card: width ______, padding ______, border ______
- Input: height ______, border ______, border-radius ______
```

## ✅ Expected Outcome

By the end of this lab, you should have a **design spec sheet** with:
1. A list of all colors used in the design (HEX values)
2. Typography details for headings, body text, and buttons
3. Spacing values (margins, paddings, gaps)
4. A list of page sections
5. A list of reusable components

## 🧪 Testing Checklist

- [ ] I can navigate the Figma canvas (zoom, pan, select)
- [ ] I extracted at least 4 color values
- [ ] I know the font family and sizes for headings and body text
- [ ] I measured at least 3 spacing values
- [ ] I listed all main page sections
- [ ] I identified at least 2 reusable components
- [ ] I wrote everything in my notes document

## 🎓 Key Concepts

### Design-to-Code Workflow
```
Figma Design → Read & Extract → Notes/Spec Sheet → Write HTML → Write CSS → Test
```
Always start from the design. Never start coding without understanding the design first.

### The Developer's Checklist
Before writing any code, a developer should know:
1. **Structure**: What sections does the page have?
2. **Colors**: What is the color palette?
3. **Typography**: What fonts and sizes are used?
4. **Spacing**: How much space between elements?
5. **Components**: What elements are reused?

### Figma ≠ Pixel-Perfect
Your goal is to get **as close as possible** to the design, not to be pixel-perfect. Focus on:
- Correct colors
- Correct fonts
- Correct spacing proportions
- Correct layout structure

## 🚀 Bonus Challenges

1. **Export assets**: Try right-clicking an image in Figma → Export as PNG
2. **CSS code**: Select a text element → Look for "Code" in the right panel → Figma generates CSS code for you!
3. **Compare frames**: If the design has both Desktop and Mobile frames, list the differences between them

## 📚 Resources

- [Figma for Developers — Official Guide](https://www.figma.com/best-practices/tips-on-developer-handoff/)
- [MDN Web Docs — Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
- [Figma YouTube — Dev Mode Tutorial](https://www.youtube.com/watch?v=B_PZQB0rQSo)

## 🤔 Reflection Questions

1. Why is it important to read the full design before coding?
2. What would happen if you started coding without knowing the colors or fonts?
3. How does identifying sections help you write better HTML?
4. What is the difference between a "section" and a "component"?

## 💡 Common Mistakes

- **Skipping the reading step**: Jumping into code without understanding the design leads to wrong structure and many rewrites
- **Forgetting to check spacing**: Colors and fonts are easy to spot, but spacing is what makes a design look "right"
- **Not noting down values**: You'll forget the HEX codes and font sizes — always write them down

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ You can navigate any Figma file comfortably
- ✅ You have a complete design spec sheet
- ✅ You can explain the structure of the page to someone else
- ✅ You feel confident to start coding in the next lab

---

**Next**: [Lab 01: HTML Structure](../lab-01-html-structure/) →
**[Back to Course Home](../README.md)**
