# Lab 05: UI Components — Build Reusable Pieces from Figma

**Difficulty**: ⭐⭐ Intermediate
**Time**: 30–40 minutes
**Concepts**: Component thinking, BEM naming, CSS modifiers, reusability, design system basics

## 🎯 Learning Objectives

- Think in terms of reusable components
- Use BEM-like naming convention for CSS classes
- Create modifiers for component variants (primary, secondary, etc.)
- Build 3 core UI components: Button, Card, Input
- Understand how designers think about components in Figma

## 📋 Exercise Description

You will build a small **component library** — a collection of reusable UI pieces that can be used anywhere on a page. Each component should have a base style and at least one variant.

> 💡 In Figma, designers create "components" with variants. As developers, we do the same with CSS classes and modifiers.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-05-ui-components/index.html` and `lab-05-ui-components/style.css`
2. The HTML shows all 3 components — you will style them

### Step 2: Study the Figma Components

In the Figma file, look for a "Components" page or frame that shows:
- Buttons in different colors/sizes
- Cards with title, text, and action
- Input fields with labels

### Step 3: Preview

- Right-click `index.html` → **Open with Live Server**

## 📝 Step-by-Step Instructions

### Step 1: Understand Component Thinking

A **component** is a self-contained, reusable UI piece:

```
Component = Base Style + Variants (Modifiers)

Example: Button
├── Base: .button (padding, font, cursor)
├── Variant: .button--primary (blue background)
├── Variant: .button--secondary (lighter blue)
└── Variant: .button--ghost (transparent, border only)
```

### Step 2: Learn BEM Naming

**BEM** = Block, Element, Modifier:

| Part | Syntax | Example |
|------|--------|---------|
| Block | `.block` | `.card` |
| Element | `.block__element` | `.card__title` |
| Modifier | `.block--modifier` | `.card--highlighted` |

```html
<article class="card">
  <h3 class="card__title">Title</h3>
  <p class="card__text">Text content</p>
  <button class="button button--primary">Action</button>
</article>
```

### Step 3: Build the Button Component

**Base styles** (shared by all buttons):

```css
.button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.2s;
}

.button:hover {
  opacity: 0.85;
}
```

**Modifier styles** (specific to each variant):

```css
.button--primary {
  background: var(--color-primary);
  color: #ffffff;
}

.button--secondary {
  background: var(--color-secondary);
  color: #ffffff;
}
```

### Step 4: Build the Card Component

```css
/* Card base */
.card {
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

/* Card elements */
.card__title {
  margin: 0 0 8px 0;
  font-size: 18px;
}

.card__text {
  margin: 0 0 16px 0;
  color: var(--color-muted);
  line-height: 1.5;
}
```

### Step 5: Build the Input Component

```css
/* Field wrapper */
.field {
  display: block;
  margin-bottom: 16px;
}

/* Label */
.field__label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
}

/* Input */
.field__input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
}

.field__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

### Step 6: Create New Variants (Exercise)

Now create these new variants yourself:

1. **Ghost button**: transparent background, border, colored text
   ```css
   .button--ghost {
     background: transparent;
     border: 2px solid var(--color-primary);
     color: var(--color-primary);
   }
   ```

2. **Highlighted card**: add a colored left border
3. **Disabled input**: gray background, `cursor: not-allowed`

## 💻 Code Structure

### HTML with BEM classes

```html
<!-- Buttons with modifiers -->
<button class="button button--primary">Primary</button>
<button class="button button--secondary">Secondary</button>
<button class="button button--ghost">Ghost</button>

<!-- Card with elements -->
<article class="card">
  <h3 class="card__title">Card Title</h3>
  <p class="card__text">Card description text.</p>
  <button class="button button--primary">Action</button>
</article>

<!-- Input with label -->
<label class="field">
  <span class="field__label">Email</span>
  <input class="field__input" type="email" placeholder="you@example.com" />
</label>
```

## ✅ Expected Outcome

Your page should:
1. Show at least 2 button variants (primary, secondary)
2. Show a card with title, text, and a button inside
3. Show an input field with a label
4. All components look clean and consistent
5. Hover effects work on buttons and inputs

## 🧪 Testing Checklist

- [ ] Buttons use BEM naming: `.button`, `.button--primary`
- [ ] Card uses BEM naming: `.card`, `.card__title`, `.card__text`
- [ ] Input uses BEM naming: `.field`, `.field__label`, `.field__input`
- [ ] At least 2 button variants exist
- [ ] Hover effects are visible on buttons
- [ ] Focus effect is visible on inputs
- [ ] Components look consistent (same border-radius, same spacing)
- [ ] No JavaScript is used

## 🎓 Key Concepts

### Why Components?
- **Reusability**: Write once, use everywhere
- **Consistency**: Same button looks the same on every page
- **Maintainability**: Change the button style in one place

### BEM Naming Convention
```
.block                    → The component itself
.block__element           → A part of the component
.block--modifier          → A variant of the component

.card                     → The card component
.card__title              → The title inside the card
.card--highlighted        → A highlighted version of the card
```

### Modifier Pattern in HTML
```html
<!-- Base + Modifier together -->
<button class="button button--primary">Click me</button>
```
The element always has the **base class** AND the **modifier class**.

## 🚀 Bonus Challenges

1. **Button sizes**: Create `.button--sm` (small) and `.button--lg` (large) modifiers
2. **Card with image**: Add a `.card__image` element at the top of the card
3. **Input states**: Create `.field__input--error` with a red border and error message
4. **Component page**: Create a full "style guide" page showing all components and variants
5. **Figma match**: Export a button from Figma and compare it pixel-by-pixel with yours

## 📚 Resources

- [BEM — Block Element Modifier](https://getbem.com/)
- [MDN — Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)
- [CSS-Tricks — BEM 101](https://css-tricks.com/bem-101/)
- [Refactoring UI](https://www.refactoringui.com/) — Design tips for developers

## 🤔 Reflection Questions

1. Why do we separate base styles from modifier styles?
2. What is the advantage of BEM naming over generic class names like `.blue-btn`?
3. How would you organize components in a real project with 20+ components?
4. What makes a component "reusable" vs "specific to one page"?

## 💡 Common Mistakes

- **Forgetting the base class**: `<button class="button--primary">` won't work — you need `class="button button--primary"`
- **Too specific selectors**: Don't write `.page .section .card .button` — just `.button`
- **Inconsistent naming**: Pick BEM and stick with it throughout the project
- **Hardcoded colors in components**: Use CSS variables so components adapt to theme changes
- **No focus styles on inputs**: Always style `:focus` for accessibility

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ All 3 components are styled (Button, Card, Input)
- ✅ BEM naming is used consistently
- ✅ At least 2 button variants exist
- ✅ Components look similar to the Figma design
- ✅ Hover and focus states are implemented
- ✅ You created at least 1 new variant yourself

---

**Previous**: [Lab 04: Responsive Design](../lab-04-responsive/) ←
**Next**: [Lab 06: JavaScript Interactions](../lab-06-javascript-interactions/) →
**[Back to Course Home](../README.md)**
