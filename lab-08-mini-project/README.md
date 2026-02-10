# Lab 08: Mini Project — Integrate a Complete Figma Landing Page

**Difficulty**: ⭐⭐⭐ Intermediate
**Time**: 60–90 minutes
**Concepts**: All previous concepts combined — HTML structure, CSS styling, Flexbox, responsive design, components, JavaScript interactions

## 🎯 Project Goals

- Apply **everything** you learned in Lab 00 through Lab 06
- Integrate a full Figma page from scratch
- Write clean, organized, and commented code
- Work autonomously with minimal instructions

## 📋 Project Overview

You are building a **landing page** for a fictional product called **FocusFlow** — a productivity app for students. The page includes:

- **Header**: Logo, navigation links, CTA button
- **Hero section**: Main headline, subtitle, 2 buttons, image
- **Features section**: 3 feature cards
- **Pricing section**: Simple pricing box
- **Footer**: Contact information

## 🛠️ Setup

### Step 1: Review the Design

1. Open the **official Figma file** provided by your instructor:
   👉 **[Open Figma Design File](https://www.figma.com/design/YfjoAoy9KjlbmIDsECNy2q/Figma-File-Template--Community-?node-id=86-150&m=dev&t=ZpA46hVhYV0rpdJW-1)**
2. Click **"Duplicate to your drafts"** to get your own editable copy
3. Switch to **Dev Mode** (toggle in top-right) to inspect elements
4. Take 5 minutes to analyze the layout
5. Write down: colors, fonts, sections, components

> 💡 You can also use the HTML reference in `../course-02-figma-for-developers/design/reference-landing-page.html` as a visual guide.

### Step 2: Plan Your Approach

Before coding, answer these questions:
- [ ] What HTML sections will I need?
- [ ] What CSS variables will I define?
- [ ] What components will I reuse (buttons, cards)?
- [ ] What needs to be responsive?
- [ ] What JavaScript interaction will I add?

### Step 3: Open the Starter Files

Files provided:
- `index.html` — Basic structure (you can modify it)
- `style.css` — Empty or minimal (you build from scratch)
- `script.js` — Empty (add interactions)

## 📝 Step-by-Step Instructions

### Step 1: Build the HTML (15 minutes)

1. Create the full semantic HTML structure
2. Use `<header>`, `<main>`, `<section>`, `<footer>`
3. Add HTML comments before each section
4. Include all content: headings, text, buttons, image placeholders

### Step 2: Set Up CSS Variables (5 minutes)

```css
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-primary: #2563eb;
  --color-secondary: #0ea5e9;
  --font-body: "Source Sans 3", Arial, sans-serif;
  --font-heading: "Playfair Display", "Times New Roman", serif;
}
```

### Step 3: Style Typography and Colors (10 minutes)

- Import Google Fonts
- Apply body font, background, text color
- Style headings, paragraphs, links

### Step 4: Build the Layout with Flexbox (15 minutes)

- Header: logo left, links center, button right
- Hero: text left, image right
- Features: 3 cards in a row
- Pricing: centered box

### Step 5: Make It Responsive (10 minutes)

- Mobile: everything stacked (column)
- Desktop (768px+): side-by-side layouts

### Step 6: Style Components (10 minutes)

- Buttons (primary, secondary)
- Cards (border, padding, shadow)
- Use BEM naming

### Step 7: Add JavaScript Interaction (10 minutes)

Choose at least ONE:
- CTA button shows an alert or modal
- Mobile menu toggle
- FAQ accordion

### Step 8: Review and Clean Up (10 minutes)

- Remove unused code
- Add missing comments
- Check responsive behavior
- Validate HTML at [validator.w3.org](https://validator.w3.org/)

## 🚀 Required Features

| Feature | Status |
|---------|--------|
| Semantic HTML structure | Required |
| CSS variables for colors and fonts | Required |
| Google Fonts imported | Required |
| Flexbox layout | Required |
| Responsive (mobile + desktop) | Required |
| At least 2 button variants | Required |
| Cards for features section | Required |
| At least 1 JS interaction | Required |
| HTML comments on every section | Required |
| Clean, readable code | Required |

## ✅ Evaluation Criteria

Your project will be evaluated on:

1. **Structure** (25%)
   - Correct semantic HTML
   - Well-organized sections
   - HTML comments

2. **Styling** (30%)
   - CSS variables used
   - Colors and fonts match design
   - Consistent spacing
   - Components use BEM naming

3. **Layout** (25%)
   - Flexbox used correctly
   - Responsive with media query
   - No layout bugs

4. **Interactivity** (10%)
   - At least 1 JS interaction works
   - addEventListener used
   - No console errors

5. **Code Quality** (10%)
   - Clean, readable code
   - Good comments
   - No unused code

## 🧪 Testing Checklist

- [ ] Page loads without errors (check console)
- [ ] All sections are visible and structured
- [ ] Colors match the design
- [ ] Fonts are loaded from Google Fonts
- [ ] Buttons have hover effects
- [ ] Layout works on mobile (< 768px)
- [ ] Layout works on desktop (≥ 768px)
- [ ] JS interaction works
- [ ] No horizontal scrollbar on any screen size
- [ ] HTML validates without errors

## 🚀 Bonus Ideas

1. **Testimonials section**: Add 2-3 testimonial cards with quotes
2. **FAQ toggle**: Create collapsible FAQ items with JavaScript
3. **Smooth scroll**: Add `scroll-behavior: smooth` to `html`
4. **Animations**: Add subtle CSS transitions on cards (hover scale effect)
5. **Dark mode toggle**: Use JavaScript to switch between light and dark themes
6. **Custom cursor**: Change cursor behavior on interactive elements

## 📚 Resources

Use any resources from previous labs:
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks — Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Google Fonts](https://fonts.google.com/)
- Your previous Lab solutions!

## 🤔 Questions to Ask Yourself

- Does my HTML structure match the Figma layout?
- Am I using CSS variables for all colors and fonts?
- Is every flex container commented to explain its purpose?
- Does the page look good on both mobile and desktop?
- Is my JavaScript clean and commented?
- Would another developer understand my code?

## 💡 Tips for Success

1. **Start with HTML first**: Get the full structure before touching CSS
2. **Work section by section**: Don't try to style everything at once
3. **Test often**: Check the browser after every few changes
4. **Use DevTools**: Inspect elements to debug layout issues
5. **Compare with the design**: Put the reference and your page side by side
6. **Ask for help**: It's okay to research and ask questions!

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ The page closely matches the Figma design
- ✅ All required features are implemented
- ✅ Code is clean, organized, and well-commented
- ✅ The page is responsive
- ✅ At least 1 JavaScript interaction works
- ✅ You can explain your code to someone else

---

## 🎉 Congratulations!

This is your final exercise. You've learned how to go from a Figma design to a fully working web page using only HTML, CSS, and JavaScript. These are foundational skills that every web developer needs.

**What you've accomplished:**
- Lab 00: Reading Figma designs
- Lab 01: Semantic HTML structure
- Lab 02: CSS colors and typography
- Lab 03: Flexbox layouts
- Lab 04: Responsive design
- Lab 05: Reusable UI components
- Lab 06: JavaScript interactivity
- Lab 07: CSS to Sass/SCSS
- Lab 08: Full page integration ← **You are here!**

**Next steps:**
- Push your code to GitHub
- Try integrating a different Figma design
- Learn CSS Grid for more complex layouts
- Learn a framework like Vue.js or React

Good luck! 🚀

---

**Previous**: [Lab 07: CSS to Sass/SCSS](../lab-07-sass-scss/) ←
**[Back to Course Home](../README.md)**
