# Figma to Web — Bachelor Exercises

Welcome to the **Figma to Web** exercises repository! This collection of hands-on labs will guide you through learning how to translate a Figma design into clean HTML, CSS, and vanilla JavaScript — from the very basics to building a complete landing page.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Course Modules](#course-modules)
- [Exercise Structure](#exercise-structure)
- [Exercises](#exercises)
- [Figma Design Files](#figma-design-files)
- [Student Report](#student-report)
- [Getting Help](#getting-help)
- [Tips for Success](#tips-for-success)
- [👨‍🏫 Credits](#-credits)

## Prerequisites

Before starting, you'll need:

- **A code editor**: [VS Code](https://code.visualstudio.com/) recommended
- **A modern web browser**: Chrome or Firefox
- **A free Figma account**: [figma.com](https://www.figma.com/) (sign up for free)
- **Basic computer skills**: file management, using a browser
- No Node.js, no npm, no frameworks — just your editor and browser!

## Installation

### Step 1: Clone This Repository

```bash
git clone https://github.com/YOUR-USERNAME/figma-to-web-labs.git
cd figma-to-web-labs
```

### Step 2: Open in VS Code

```bash
code .
```

### Step 3: Install Live Server Extension (Recommended)

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for **Live Server** by Ritwick Dey
4. Click Install

This extension lets you preview your HTML files in the browser with automatic reload.

### Step 4: Verify Your Setup

1. Open `lab-01-html-structure/index.html`
2. Right-click in the editor → **Open with Live Server**
3. You should see a basic HTML page in your browser 🎉

## Course Modules

Before diving into the hands-on labs, study these **theory modules** that give you the knowledge foundation for Figma-to-web integration:

| # | Module | Time | Topics |
|---|---|---|---|
| 01 | [Design Fundamentals](course-01-design-fundamentals/) | 45–60 min | CRAP principles, color theory, typography, whitespace, visual hierarchy |
| 02 | [Figma for Developers](course-02-figma-for-developers/) | 45–60 min | Dev Mode, inspecting properties, Auto Layout → Flexbox, exporting assets, components & variants |
| 03 | [Design-to-Code Workflow](course-03-design-to-code-workflow/) | 40–50 min | The 7-step pipeline: Receive → Audit → Extract → Plan → Build → Review → Refine |
| 04 | [Design Systems](course-04-design-systems/) | 40–50 min | Atomic Design, design tokens in depth, component libraries, style guides, real-world systems |

> 💡 **Recommended reading order:** Course 01 → 02 → 03 → 04, then start the labs.

## Exercise Structure

Each exercise folder contains:

- **README.md**: Detailed step-by-step instructions
- **Starter code**: HTML, CSS, and/or JS files to work with
- **Design spec**: A reference design to match (`course-02-figma-for-developers/design/` folder for visual references)

### How to Approach Each Exercise

1. **Read** the README.md completely before starting
2. **Open** the Figma design file or reference image
3. **Try** to solve it independently first
4. **Check** the expected outcome and testing checklist
5. **Compare** with classmates (but do your own work first!)

## Exercises

### [00. Figma Basics](lab-00-figma-basics/)

Getting started with Figma from a developer perspective. Theory only — no code.

### 01. HTML & CSS Fundamentals

- [Lab 01: HTML Structure](lab-01-html-structure/) — Translate a Figma layout into semantic HTML
- [Lab 02: CSS Basics](lab-02-css-basics/) — Apply colors & typography from Figma
- [Lab 03: Flexbox Layout](lab-03-flexbox-layout/) — Reproduce a Figma layout with Flexbox

### 02. Responsive & Components

- [Lab 04: Responsive Design](lab-04-responsive/) — Mobile-first responsive integration
- [Lab 05: UI Components](lab-05-ui-components/) — Build reusable components from Figma

### 03. Interactivity

- [Lab 06: JavaScript Interactions](lab-06-javascript-interactions/) — Add interactivity with vanilla JS

### 03. Professional Tooling

- [Lab 07: CSS to Sass/SCSS](lab-07-sass-scss/) — Convert CSS to SCSS with variables, nesting, mixins & partials

### 04. Integration Project

- [Lab 08: Mini Project](lab-08-mini-project/) — Integrate a full Figma page from scratch (capstone)

## Figma Design Files

Each lab comes with a design specification in the `course-02-figma-for-developers/design/` folder.

### 🎨 Course Figma File

The official Figma design for this course is available here:

👉 **[Open Figma Design File](https://www.figma.com/design/YfjoAoy9KjlbmIDsECNy2q/Figma-File-Template--Community-?node-id=86-150&m=dev&t=ZpA46hVhYV0rpdJW-1)**

**How to use it:**
1. Click the link above to open the file in Figma
2. Log in with your free Figma account
3. Click **"Duplicate to your drafts"** (top-right) to get your own editable copy
4. Switch to **Dev Mode** (toggle in top-right) to inspect spacing, colors, and fonts
5. Use this design as the reference for **Lab 08 — Mini Project**

> 💡 **Tip**: The `course-02-figma-for-developers/design/` folder also contains HTML reference pages that you can open in your browser to see the design.

## Student Report

As part of this course, each student must submit a **written report** (PDF or Word) at the end of the module. The report documents your learning journey across all labs.

### Report Structure

Your report must include the following sections:

1. **Cover Page**
   - Full name, student ID, group
   - Course title: *Figma to Web — HTML, CSS & JavaScript*
   - Date of submission

2. **Lab 00 — Figma Basics**
   - Your completed design spec sheet (colors, fonts, spacing)
   - Screenshots of the Figma file you inspected
   - Answers to the reflection questions

3. **Lab 01 — HTML Structure**
   - Screenshot of your HTML page in the browser
   - Explanation of the semantic tags you chose and why
   - Challenges encountered

4. **Lab 02 — CSS Basics**
   - Screenshot of your styled page
   - List of CSS variables you defined
   - Comparison: your page vs. the reference design

5. **Lab 03 — Flexbox Layout**
   - Screenshot of your layout
   - Explanation of each Flexbox rule you used
   - What you changed during the mini-exercises

6. **Lab 04 — Responsive Design**
   - Screenshots on mobile width AND desktop width
   - Your media query code with a brief explanation
   - How you tested responsiveness

7. **Lab 05 — UI Components**
   - Screenshot of your component library
   - Explanation of your BEM naming choices
   - The new variant(s) you created

8. **Lab 06 — JavaScript Interactions**
   - Screenshot of the modal open and closed
   - Your JavaScript code with explanations
   - Any bonus interactions you implemented

9. **Lab 07 — CSS to Sass/SCSS**
    - Screenshots of your SCSS file structure (partials)
    - Comparison: original CSS vs compiled SCSS output
    - Explanation of the mixins you created and why
    - Reflection: when is Sass worth the extra tooling?

10. **Lab 08 — Mini Project**
    - Screenshots of the final page (mobile + desktop)
    - Self-evaluation against the grading criteria
    - What you learned and what you would improve

11. **Conclusion**
    - Summary of what you learned throughout the course
    - Your favorite lab and why
    - Skills you plan to develop next

### Report Guidelines

- **Format**: PDF preferred (Word accepted)
- **Length**: 15–25 pages (including screenshots)
- **Screenshots**: Must show YOUR code and YOUR browser result — not copy-pasted examples
- **Code snippets**: Include only the relevant parts, not the entire files
- **Deadline**: Announced by the instructor
- **Submission**: Upload to the platform specified by your instructor

> ⚠️ **Plagiarism warning**: Each report must be your own work. Identical reports will receive a grade of 0.

---

## Getting Help

- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org/) — The best reference for HTML, CSS, and JavaScript
- **CSS-Tricks**: [css-tricks.com](https://css-tricks.com/) — Excellent guides for CSS and Flexbox
- **Figma Help Center**: [help.figma.com](https://help.figma.com/)
- **Stack Overflow**: Tag your questions with `html`, `css`, or `javascript`
- **Classmates**: Collaborate and learn together!

## Tips for Success

1. **Code every day**: Even 20 minutes of practice helps
2. **Read error messages**: Right-click → Inspect → Console tab shows errors
3. **Use DevTools**: Learn Chrome DevTools (F12) to inspect elements and debug CSS
4. **Experiment**: Try things beyond the exercise requirements
5. **Compare with the design**: Always check your result against the Figma reference
6. **Comment your code**: Future-you will thank present-you

## Browser DevTools — Your Best Friend

Learn to use your browser's developer tools for easier debugging:

- **Chrome**: Press F12 or Ctrl+Shift+I
- **Firefox**: Press F12 or Ctrl+Shift+I
- **Elements tab**: Inspect and modify HTML/CSS live
- **Console tab**: See JavaScript errors and logs

---

**Good luck with your exercises!** 🚀

Remember: The goal is to learn, not just to finish. Take your time and understand each concept.

---

## 👨‍🏫 Credits

Course Author: Dr. Amine SOUMIAA
Program: Bachelor IW
Institution: ESGI — École Supérieure de Génie Informatique
Website: [https://www.esgi.fr/](https://www.esgi.fr/)

© 2026 — All rights reserved for academic use.
