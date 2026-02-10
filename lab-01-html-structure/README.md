# Lab 01: HTML Structure — From Figma to Semantic HTML

**Difficulty**: ⭐ Beginner
**Time**: 20–30 minutes
**Concepts**: Semantic HTML, page structure, HTML comments, Figma layout analysis

## 🎯 Learning Objectives

- Analyze a Figma layout and identify HTML sections
- Use semantic HTML5 tags (`header`, `main`, `section`, `footer`, `nav`)
- Write clean, commented HTML structure
- Understand the connection between visual design and HTML hierarchy

## 📋 Exercise Description

You will look at a simple landing page design and translate its visual structure into **semantic HTML only** — no CSS yet. The goal is to build a solid HTML skeleton that matches the design's layout.

> 💡 Think of HTML as the **bones** of a page. CSS is the skin. JavaScript is the muscles. You always start with the bones.

## 🛠️ Setup

### Step 1: Open the Reference Design

1. Open `design/reference.html` in your browser (if available) **or** look at the Figma design provided by your instructor
2. Identify the main sections visually before coding

### Step 2: Open the Starter File

1. Open `lab-01-html-structure/index.html` in VS Code
2. You'll see a basic HTML structure — your job is to complete it

### Step 3: Preview Your Work

- Right-click `index.html` → **Open with Live Server**
- Or simply double-click the file to open it in your browser
- Refresh the browser after each change

## 📝 Step-by-Step Instructions

### Step 1: Analyze the Figma Layout

Before writing any code, look at the design and answer these questions:

1. What is at the **top** of the page? → This is the `<header>`
2. What is the **main content**? → This goes inside `<main>`
3. How many **sections** do you see? → Each becomes a `<section>`
4. What is at the **bottom**? → This is the `<footer>`

**Write this down:**
```
Page structure:
├── header (logo + navigation)
├── main
│   ├── section: hero (title, subtitle, button)
│   └── section: features (3 items)
└── footer (contact info)
```

### Step 2: Create the HTML Skeleton

In your `index.html`, create the basic structure:

```html
<body>
  <header>
    <!-- Header content goes here -->
  </header>

  <main>
    <!-- Main content goes here -->
  </main>

  <footer>
    <!-- Footer content goes here -->
  </footer>
</body>
```

### Step 3: Build the Header

The header typically contains a logo and navigation links:

1. Add a `<div>` or `<strong>` for the logo/brand name
2. Add a `<nav>` element for navigation
3. Inside `<nav>`, use a `<ul>` with `<li>` items and `<a>` links

```html
<header>
  <!-- Logo -->
  <div>
    <strong>BrandName</strong>
  </div>

  <!-- Navigation -->
  <nav>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

### Step 4: Build the Hero Section

1. Add a `<section>` with an `id="hero"`
2. Add an `<h1>` for the main heading (only ONE `<h1>` per page!)
3. Add a `<p>` for the subtitle
4. Add an `<a>` for the call-to-action button

### Step 5: Build the Features Section

1. Add a `<section>` with an `id="features"`
2. Add an `<h2>` for the section title
3. Add a `<ul>` with 3 `<li>` items for the features

### Step 6: Build the Footer

1. Add a `<footer>` with an `id="contact"`
2. Add a `<p>` with contact information

### Step 7: Add HTML Comments

Go through your entire file and add comments before each major section:

```html
<!-- Site header: logo and navigation -->
<!-- Hero section: main message and call to action -->
<!-- Features section: three key points -->
<!-- Footer: contact information -->
```

## 💻 Expected Code Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lab 01 HTML Structure</title>
  </head>
  <body>
    <!-- Header -->
    <header>
      ...logo and nav...
    </header>

    <!-- Main content -->
    <main>
      <!-- Hero section -->
      <section id="hero">
        ...heading, text, button...
      </section>

      <!-- Features section -->
      <section id="features">
        ...title and list...
      </section>
    </main>

    <!-- Footer -->
    <footer id="contact">
      ...contact info...
    </footer>
  </body>
</html>
```

## ✅ Expected Outcome

When you open your page in the browser, you should see:

1. A logo and navigation links at the top
2. A big heading with some text and a link
3. A section with 3 feature items
4. Contact information at the bottom
5. **No styling** — just raw HTML content, readable and structured

## 🧪 Testing Checklist

- [ ] The page has exactly ONE `<h1>` tag
- [ ] I used `<header>`, `<main>`, and `<footer>` correctly
- [ ] I used `<section>` for each content block
- [ ] I used `<nav>` for the navigation
- [ ] All links have `href` attributes
- [ ] HTML comments explain each section
- [ ] The page is readable without CSS
- [ ] No errors in the browser console (F12 → Console)

## 🎓 Key Concepts

### Semantic HTML Tags
| Tag | Purpose |
|-----|---------|
| `<header>` | Top of the page (logo, navigation) |
| `<nav>` | Navigation links |
| `<main>` | Main content of the page |
| `<section>` | A thematic grouping of content |
| `<article>` | Self-contained content (blog post, card) |
| `<footer>` | Bottom of the page (links, copyright) |

### Why Semantic HTML?
- **Accessibility**: Screen readers understand your page structure
- **SEO**: Search engines rank semantic pages better
- **Maintainability**: Easier to read and update than `<div>` soup

### Heading Hierarchy
- `<h1>`: Page title (only one per page)
- `<h2>`: Section titles
- `<h3>`: Sub-section titles
- Never skip levels (don't jump from `<h1>` to `<h3>`)

## 🚀 Bonus Challenges

1. **Add an image**: Use `<img src="https://placehold.co/300x200" alt="description" />` in the hero section
2. **Add a second section**: Create a "Testimonials" section with 2 quotes using `<blockquote>`
3. **Validate your HTML**: Go to [validator.w3.org](https://validator.w3.org/) → Direct Input → paste your code

## 📚 Resources

- [MDN — HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN — Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [W3C HTML Validator](https://validator.w3.org/)

## 🤔 Reflection Questions

1. What happens if you use `<div>` everywhere instead of semantic tags?
2. Why should there be only one `<h1>` per page?
3. How does the Figma layout map to your HTML structure?
4. What is the difference between `<section>` and `<article>`?

## 💡 Common Mistakes

- **Using `<div>` for everything**: Use semantic tags first, `<div>` only when no semantic tag fits
- **Multiple `<h1>` tags**: A page should have exactly one `<h1>`
- **Forgetting `alt` on images**: Always add a description for accessibility
- **No comments**: Comments make your code readable for yourself and others
- **Wrong nesting**: `<li>` must be inside `<ul>` or `<ol>`, not directly inside `<nav>`

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ Your HTML uses proper semantic tags
- ✅ The page structure matches the Figma layout
- ✅ Comments explain each section clearly
- ✅ The page is readable in the browser without CSS
- ✅ HTML validation shows no errors

---

**Previous**: [Lab 00: Figma Basics](../lab-00-figma-basics/) ←
**Next**: [Lab 02: CSS Basics](../lab-02-css-basics/) →
**[Back to Course Home](../README.md)**
