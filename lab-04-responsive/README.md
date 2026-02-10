# Lab 04: Responsive Design — Mobile-First from Figma

**Difficulty**: ⭐⭐ Beginner to Intermediate
**Time**: 30–40 minutes
**Concepts**: Media queries, mobile-first approach, breakpoints, responsive images, viewport meta tag

## 🎯 Learning Objectives

- Understand the difference between desktop and mobile Figma frames
- Apply a mobile-first CSS strategy
- Write a media query with a single breakpoint (768px)
- Make images and text scale correctly on all screen sizes
- Test responsive behavior using browser DevTools

## 📋 Exercise Description

You will take a simple page and make it **responsive**: it should look correct on mobile phones AND desktop screens, using only ONE breakpoint.

> 💡 **Mobile-first** means: write CSS for mobile first (default), then add rules for larger screens inside a `@media` query.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-04-responsive/index.html` and `lab-04-responsive/style.css`
2. The HTML and base CSS are provided

### Step 2: Open the Reference

1. Study the Figma design — look for **two frames**: one narrow (mobile) and one wide (desktop)
2. Note the differences: stacked vs side-by-side layout

### Step 3: Preview and Test

1. Open the page with Live Server
2. Open DevTools (F12) → Click the **device toolbar** icon (or Ctrl+Shift+M)
3. Test different screen widths

## 📝 Step-by-Step Instructions

### Step 1: Understand Desktop vs Mobile in Figma

Designers provide different frames for different screen sizes:

```
MOBILE (375px wide)          DESKTOP (1440px wide)
┌─────────────┐              ┌──────────────────────────┐
│ Logo        │              │ Logo          Home Links  │
│ Home Links  │              ├──────────────────────────┤
├─────────────┤              │ Title        │ Image     │
│ Title       │              │ Subtitle     │           │
│ Subtitle    │              │ [Button]     │           │
│ [Button]    │              └──────────────────────────┘
│ Image       │
└─────────────┘
```

**Key differences:**
- Mobile: everything is **stacked** (column)
- Desktop: some elements are **side by side** (row)

### Step 2: Ensure the Viewport Meta Tag

In your HTML `<head>`, this line **must** be present:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Without it, mobile browsers will render the page at desktop width and zoom out.

### Step 3: Write Mobile Styles First (Default)

The default CSS targets **mobile phones** — everything is stacked:

```css
/* Mobile layout (default) */
.site-header {
  display: flex;
  flex-direction: column;   /* Stack logo and links */
  gap: 12px;
  margin-bottom: 24px;
}

.hero {
  display: flex;
  flex-direction: column;   /* Stack text and image */
  gap: 16px;
}

.hero-image img {
  max-width: 100%;          /* Image never overflows */
  display: block;
}
```

### Step 4: Add the Breakpoint for Desktop

Use `@media (min-width: 768px)` to add desktop styles:

```css
/* Desktop layout (768px and above) */
@media (min-width: 768px) {
  .site-header {
    flex-direction: row;           /* Logo and links side by side */
    justify-content: space-between;
    align-items: center;
  }

  .hero {
    flex-direction: row;           /* Text and image side by side */
    align-items: center;
  }
}
```

### Step 5: Test at Different Widths

1. Open DevTools (F12)
2. Click the device toolbar icon (📱 icon)
3. Drag the width handle or type specific widths:
   - **375px**: Mobile phone (should be stacked)
   - **768px**: Breakpoint (should switch to row)
   - **1024px**: Desktop (should be side by side)

### Step 6: Fine-Tune Spacing

Adjust padding and font sizes for mobile if needed:

```css
body {
  padding: 16px;   /* Less padding on mobile */
}

@media (min-width: 768px) {
  body {
    padding: 32px;   /* More padding on desktop */
  }
}
```

## 💻 Code Structure

### style.css (complete example)

```css
/* === MOBILE FIRST (default) === */

body {
  margin: 0;
  padding: 16px;
  font-family: "Source Sans 3", Arial, sans-serif;
}

.site-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.nav-links {
  display: flex;
  gap: 12px;
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-image img {
  max-width: 100%;
  display: block;
}

/* === DESKTOP (768px and above) === */

@media (min-width: 768px) {
  body {
    padding: 32px;
  }

  .site-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .hero {
    flex-direction: row;
    align-items: center;
  }
}
```

## ✅ Expected Outcome

Your page should:
1. **On mobile** (< 768px): Header items stacked, hero text above image
2. **On desktop** (≥ 768px): Header items side by side, hero text next to image
3. Images never overflow the screen
4. Text is readable at all sizes

## 🧪 Testing Checklist

- [ ] The viewport meta tag is present in `<head>`
- [ ] Mobile layout is stacked (column)
- [ ] Desktop layout is side by side (row) at 768px
- [ ] Images scale with `max-width: 100%`
- [ ] Only ONE `@media` query is used
- [ ] Text is readable on mobile (no tiny text)
- [ ] No horizontal scrollbar on mobile
- [ ] Tested in DevTools device toolbar

## 🎓 Key Concepts

### Mobile-First vs Desktop-First

| Approach | Default CSS targets | Media query targets |
|----------|-------------------|-------------------|
| **Mobile-first** ✅ | Small screens | `@media (min-width: 768px)` for larger |
| Desktop-first | Large screens | `@media (max-width: 767px)` for smaller |

**Mobile-first is the industry standard** because:
- More people browse on phones than desktops
- Simpler to add complexity than to remove it

### Common Breakpoints

| Width | Device |
|-------|--------|
| 375px | iPhone SE |
| 768px | Tablets / small laptops |
| 1024px | Laptops |
| 1440px | Desktop monitors |

For this course, **768px** is enough.

### Responsive Images
```css
img {
  max-width: 100%;   /* Never wider than parent */
  height: auto;      /* Keep aspect ratio */
  display: block;    /* Remove bottom gap */
}
```

## 🚀 Bonus Challenges

1. **Hide nav on mobile**: Use `display: none` on `.nav-links` for mobile and `display: flex` in the media query
2. **Add a second breakpoint**: At `1024px`, increase max-width of the content area
3. **Responsive font sizes**: Make `h1` smaller on mobile (28px) and larger on desktop (40px)
4. **Test on your phone**: Deploy to GitHub Pages or use the VS Code Live Server IP address

## 📚 Resources

- [MDN — Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [MDN — Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS-Tricks — A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)

## 🤔 Reflection Questions

1. Why do we write mobile styles first instead of desktop styles?
2. What happens if you forget the viewport meta tag?
3. Why do we use `min-width` in the media query instead of `max-width`?
4. How would you decide where to put a breakpoint for a real project?

## 💡 Common Mistakes

- **Forgetting the viewport meta tag**: The page will look zoomed out on mobile
- **Using `max-width` in mobile-first**: Use `min-width` for mobile-first approach
- **Fixed pixel widths**: Use `%`, `max-width`, or `flex` instead of fixed `px` widths
- **Not testing on real devices**: DevTools simulation is good but not perfect
- **Too many breakpoints**: Start with one (768px) — add more only if needed
- **Using `width: 100%` on images without `max-width`**: The image can overflow

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ The page is mobile-first (column layout by default)
- ✅ One media query at 768px switches to desktop layout
- ✅ No horizontal scroll on any screen size
- ✅ Images are responsive
- ✅ The layout matches both the mobile and desktop Figma frames

---

**Previous**: [Lab 03: Flexbox Layout](../lab-03-flexbox-layout/) ←
**Next**: [Lab 05: UI Components](../lab-05-ui-components/) →
**[Back to Course Home](../README.md)**
