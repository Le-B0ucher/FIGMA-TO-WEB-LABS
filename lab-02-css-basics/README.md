# Lab 02: CSS Basics — Colors & Typography from Figma

**Difficulty**: ⭐ Beginner
**Time**: 30–40 minutes
**Concepts**: CSS variables, Google Fonts, color properties, typography, selectors

## 🎯 Learning Objectives

- Extract color and font values from a Figma design
- Define and use CSS custom properties (variables)
- Import and apply Google Fonts
- Style body text, headings, paragraphs, and links
- Understand the cascade and selector specificity basics

## 📋 Exercise Description

You will take the HTML structure from Lab 01 and apply **colors and typography** to match the Figma design. No layout changes yet — just colors, fonts, and text styling.

> 💡 In real projects, typography and colors are the first CSS step. Get them right and the page already looks 80% better.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-02-css-basics/index.html` and `lab-02-css-basics/style.css` in VS Code
2. The HTML is already provided — you will only edit the CSS file

### Step 2: Open the Reference Design

1. Open `../course-02-figma-for-developers/design/reference-landing-page.html` in your browser **or** look at the Figma design
2. Note the colors and fonts used

### Step 3: Preview Your Work

- Right-click `index.html` → **Open with Live Server**
- Keep the browser open — it will reload automatically when you save

## 📝 Step-by-Step Instructions

### Step 1: Extract Values from Figma

Before writing CSS, collect these values from Figma:

```
COLORS (from Figma):
- Background color: #F9FAFB
- Main text color:  #111827
- Muted text color: #6B7280
- Primary color:    #1D4ED8 (button, links)

FONTS (from Figma):
- Heading font: Playfair Display, weight 700
- Body font: Source Sans 3, weight 400/600

SIZES:
- H1: 36px
- H2: 24px
- Body text: 16px
- Button text: 16px, weight 600
```

### Step 2: Import Google Fonts

At the very top of your `style.css`, add a Google Fonts import:

```css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Playfair+Display:wght@700&display=swap");
```

**How to find Google Fonts:**
1. Go to [fonts.google.com](https://fonts.google.com/)
2. Search for your font name
3. Select the weights you need
4. Copy the `@import` code

### Step 3: Define CSS Variables

Inside `:root`, define all your design values:

```css
:root {
  /* Colors from Figma */
  --color-bg: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-primary: #1d4ed8;

  /* Fonts from Figma */
  --font-body: "Source Sans 3", Arial, sans-serif;
  --font-heading: "Playfair Display", "Times New Roman", serif;
}
```

> 💡 **Why CSS variables?** If the designer changes a color, you update it in ONE place instead of searching the entire file.

### Step 4: Style the Body

```css
body {
  margin: 0;
  padding: 24px;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
}
```

### Step 5: Style the Headings

```css
h1, h2 {
  font-family: var(--font-heading);
  color: var(--color-text);
  margin-bottom: 8px;
}
```

### Step 6: Style Paragraphs and Links

```css
p {
  color: var(--color-muted);
  margin-top: 0;
}

nav a {
  color: var(--color-muted);
  text-decoration: none;
}
```

### Step 7: Style the Button Link

```css
.button {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 16px;
  background: var(--color-primary);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}
```

### Step 8: Compare with the Design

Open the reference design and your page side by side:
1. Are the colors the same?
2. Are the fonts the same?
3. Is the text readable?

## 💻 Code Structure

### style.css (complete example)

```css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Playfair+Display:wght@700&display=swap");

:root {
  --color-bg: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-primary: #1d4ed8;
  --font-body: "Source Sans 3", Arial, sans-serif;
  --font-heading: "Playfair Display", "Times New Roman", serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 24px;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  line-height: 1.6;
}

h1, h2 {
  font-family: var(--font-heading);
  color: var(--color-text);
  margin-bottom: 8px;
}

p {
  color: var(--color-muted);
  margin-top: 0;
}

.button {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 16px;
  background: var(--color-primary);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}
```

## ✅ Expected Outcome

Your page should:
1. Have a light gray background
2. Use the correct heading font (serif) and body font (sans-serif)
3. Have dark text for headings, lighter text for paragraphs
4. Have a blue button with white text
5. Look clean and readable

## 🧪 Testing Checklist

- [ ] Google Fonts are loading (check Network tab in DevTools)
- [ ] CSS variables are defined in `:root`
- [ ] Body has the correct background color
- [ ] Headings use the heading font
- [ ] Paragraphs use the body font with muted color
- [ ] The button has the primary color
- [ ] No errors in the browser console
- [ ] Colors match the Figma design

## 🎓 Key Concepts

### CSS Variables (Custom Properties)
```css
:root {
  --my-color: #1d4ed8;     /* Define */
}
.button {
  background: var(--my-color);  /* Use */
}
```

### Google Fonts Import
```css
@import url("https://fonts.googleapis.com/css2?family=FontName:wght@400;700&display=swap");
```
Always import fonts **before** any other CSS rules.

### The Box Model
Every HTML element is a box with:
- **Content**: the text or image
- **Padding**: space inside the border
- **Border**: the edge of the box
- **Margin**: space outside the border

Use `box-sizing: border-box` so padding is included in the element's width.

## 🚀 Bonus Challenges

1. **Add hover effect**: Change the button color on hover using `.button:hover { background: #1e40af; }`
2. **Add font sizes**: Create CSS variables for `--font-size-lg`, `--font-size-md`, `--font-size-sm`
3. **Style the logo**: Make the logo text bold and larger
4. **Add a border-radius**: Round the button corners with `border-radius: 6px`

## 📚 Resources

- [MDN — CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Google Fonts](https://fonts.google.com/)
- [MDN — CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
- [CSS-Tricks — A Complete Guide to Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)

## 🤔 Reflection Questions

1. What are the benefits of using CSS variables instead of hardcoding colors?
2. Why do we add fallback fonts after the Google Font name?
3. What is the difference between `margin` and `padding`?
4. How would you change the entire color scheme of the page quickly?

## 💡 Common Mistakes

- **Forgetting `@import` at the top**: Google Fonts import must be the very first line in CSS
- **Typos in variable names**: `var(--color-primry)` won't work — check spelling
- **Not using `box-sizing: border-box`**: Padding will add to element width without it
- **Overusing `!important`**: If you need it, your selector specificity is wrong — fix the selector instead
- **Mixing up `color` and `background`**: `color` is for text, `background` is for backgrounds

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ Fonts are imported and applied correctly
- ✅ All CSS values come from variables (no hardcoded colors in selectors)
- ✅ Typography matches the Figma design
- ✅ Colors match the Figma design
- ✅ The page is clean and readable

---

**Previous**: [Lab 01: HTML Structure](../lab-01-html-structure/) ←
**Next**: [Lab 03: Flexbox Layout](../lab-03-flexbox-layout/) →
**[Back to Course Home](../README.md)**
