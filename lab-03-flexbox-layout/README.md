# Lab 03: Flexbox Layout — Reproduce a Figma Layout with Flexbox

**Difficulty**: ⭐⭐ Beginner to Intermediate
**Time**: 30–40 minutes
**Concepts**: Flexbox, display flex, flex-direction, justify-content, align-items, gap, flex property

## 🎯 Learning Objectives

- Understand the Flexbox model (main axis, cross axis)
- Use `display: flex` to create horizontal and vertical layouts
- Use `gap` instead of margins for spacing between flex items
- Reproduce a multi-column layout from a Figma design
- Comment each flexbox rule to explain its purpose

## 📋 Exercise Description

You will use Flexbox to recreate a page layout from Figma with:
- A **header** with logo on the left and navigation on the right
- A **hero section** with text and image side by side
- A **features section** with 3 cards in a row

> 💡 Flexbox is the #1 CSS tool for alignment. If you learn `display: flex`, `justify-content`, and `align-items`, you can build almost any layout.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-03-flexbox-layout/index.html` and `lab-03-flexbox-layout/style.css`
2. The HTML is ready — you will focus on the CSS

### Step 2: Open the Reference

1. Open `design/reference.html` in your browser or study the Figma design
2. Pay attention to how elements are **aligned** and **spaced**

### Step 3: Preview

- Right-click `index.html` → **Open with Live Server**

## 📝 Step-by-Step Instructions

### Step 1: Understand the Flexbox Model

Before coding, understand these core concepts:

```
┌─────────────────────────────────────────────┐
│  FLEX CONTAINER (display: flex)             │
│                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐              │
│  │ Item │  │ Item │  │ Item │  ← flex items │
│  └──────┘  └──────┘  └──────┘              │
│                                             │
│  ← ─ ─ ─ ─ main axis ─ ─ ─ ─ →            │
│  ↕ cross axis                               │
└─────────────────────────────────────────────┘
```

| Property | What it does |
|----------|-------------|
| `display: flex` | Makes element a flex container |
| `flex-direction: row` | Items in a row (default) |
| `flex-direction: column` | Items stacked vertically |
| `justify-content` | Align on **main axis** (horizontal by default) |
| `align-items` | Align on **cross axis** (vertical by default) |
| `gap` | Space between items |
| `flex: 1` | Item takes equal available space |

### Step 2: Make the Header a Flex Container

The header should have: logo on the left, links on the right.

```css
.site-header {
  display: flex;              /* Enable flexbox */
  justify-content: space-between; /* Push items to edges */
  align-items: center;        /* Center items vertically */
  margin-bottom: 32px;
}
```

### Step 3: Align the Navigation Links

```css
.nav-links {
  display: flex;   /* Put links in a row */
  gap: 16px;       /* Space between each link */
}
```

### Step 4: Create the Hero Layout

Text and image side by side:

```css
.hero {
  display: flex;        /* Side by side layout */
  gap: 24px;            /* Space between text and image */
  align-items: center;  /* Vertically center both sides */
  margin-bottom: 32px;
}

.hero-text {
  flex: 1;  /* Text takes remaining space */
}
```

### Step 5: Create the Feature Cards Row

```css
.features {
  display: flex;   /* Cards in a row */
  gap: 16px;       /* Space between cards */
}

.card {
  flex: 1;         /* Each card gets equal width */
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
}
```

### Step 6: Test and Experiment

Try these changes one at a time (undo after each):

1. **Change direction**: Add `flex-direction: column` to `.hero` — what happens?
2. **Change alignment**: Change `justify-content` to `center` in `.site-header`
3. **Change gap**: Set `gap: 48px` on `.features` — is it too much or too little?
4. **Remove flex: 1**: Remove `flex: 1` from `.card` — what changes?

## 💻 Code Structure

### style.css (key sections)

```css
/* Header: logo left, links right */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Navigation: links in a row with gap */
.nav-links {
  display: flex;
  gap: 16px;
}

/* Hero: text + image side by side */
.hero {
  display: flex;
  gap: 24px;
  align-items: center;
}

/* Features: 3 equal cards in a row */
.features {
  display: flex;
  gap: 16px;
}

.card {
  flex: 1;
}
```

## ✅ Expected Outcome

Your page should:
1. Have a header with logo on the left and links on the right (same line)
2. Have a hero section with text on the left and image on the right
3. Have 3 feature cards side by side with equal widths
4. Have consistent spacing using `gap`

## 🧪 Testing Checklist

- [ ] Header items are on opposite sides
- [ ] Hero text and image are side by side
- [ ] Feature cards have equal width
- [ ] Spacing comes from `gap`, not margin hacks
- [ ] Every `display: flex` has a comment explaining its purpose
- [ ] No horizontal scroll on the page
- [ ] Layout matches the Figma design

## 🎓 Key Concepts

### justify-content Values
```
flex-start:      [A][B][C]              ← default
flex-end:                    [A][B][C]
center:              [A][B][C]
space-between:   [A]     [B]     [C]
space-around:     [A]   [B]   [C]
space-evenly:    [A]    [B]    [C]
```

### align-items Values
```
flex-start:   Items at top
center:       Items at middle
flex-end:     Items at bottom
stretch:      Items fill height (default)
```

### gap vs margin
- `gap` applies **between** items only (not on edges)
- `margin` applies around each item (adds up between items)
- **Prefer `gap`** — it's cleaner and easier to manage

## 🚀 Bonus Challenges

1. **Wrap cards**: Add `flex-wrap: wrap` to `.features` and set `flex: 1 1 200px` on cards — resize the browser to see them wrap
2. **Reverse order**: Try `flex-direction: row-reverse` on the hero
3. **Center a section**: Create a `.centered` class that uses flexbox to center content both horizontally and vertically
4. **Nested flex**: Add a small icon + text layout inside each card using flex

## 📚 Resources

- [CSS-Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — **Bookmark this!**
- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [Flexbox Froggy](https://flexboxfroggy.com/) — A game to learn Flexbox
- [Flexbox Defense](http://www.flexboxdefense.com/) — Another Flexbox game

## 🤔 Reflection Questions

1. What is the difference between `justify-content` and `align-items`?
2. When would you use `flex-direction: column`?
3. Why is `gap` better than adding `margin-right` to every item?
4. What does `flex: 1` do and why is it useful for cards?

## 💡 Common Mistakes

- **Forgetting `display: flex`**: Properties like `justify-content` do nothing without it
- **Confusing axes**: `justify-content` works on the main axis (row = horizontal), not always horizontal
- **Using margin instead of gap**: `gap` is simpler and doesn't double-up between items
- **Fixed widths on flex items**: Use `flex: 1` instead of `width: 33%` for equal columns
- **Not testing resize**: Always resize your browser to check if the layout breaks

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ All layouts use Flexbox (no floats, no absolute positioning)
- ✅ `gap` is used for spacing between items
- ✅ Each flex rule has a comment explaining its purpose
- ✅ The layout matches the Figma reference design
- ✅ You can explain what each flex property does

---

**Previous**: [Lab 02: CSS Basics](../lab-02-css-basics/) ←
**Next**: [Lab 04: Responsive Design](../lab-04-responsive/) →
**[Back to Course Home](../README.md)**
