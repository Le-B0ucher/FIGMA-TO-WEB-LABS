# Lab 06: JavaScript Interactions — Add Interactivity with Vanilla JS

**Difficulty**: ⭐⭐ Beginner to Intermediate
**Time**: 30–40 minutes
**Concepts**: DOM selection, addEventListener, classList, toggle, event handling, modal pattern

## 🎯 Learning Objectives

- Understand how JavaScript connects to HTML elements
- Select elements with `document.querySelector`
- React to user clicks with `addEventListener`
- Show and hide elements using CSS classes
- Build a modal (popup) interaction from scratch

## 📋 Exercise Description

You will add a simple modal interaction to the page: clicking a button opens a modal window, clicking the close button hides it. This is a very common pattern in real websites.

> 💡 JavaScript doesn't change HTML directly — it adds or removes CSS classes. The CSS does the visual work.

## 🛠️ Setup

### Step 1: Open the Starter Files

1. Open `lab-06-javascript-interactions/index.html`, `style.css`, and `script.js`
2. The HTML and CSS are provided — you will write the JavaScript

### Step 2: Review the HTML Structure

Look at the HTML and find:
- The **open button**: `<button id="open-modal">`
- The **modal container**: `<div class="modal" id="modal">`
- The **close button**: `<button id="close-modal">`

### Step 3: Preview

- Open with Live Server
- Click the "Open Modal" button — nothing happens yet (you'll fix that!)

## 📝 Step-by-Step Instructions

### Step 1: Understand the DOM

The **DOM** (Document Object Model) is how JavaScript sees your HTML:

```
document
└── body
    ├── header
    ├── main
    │   ├── button#open-modal
    │   └── div#modal
    │       └── div.modal__content
    │           └── button#close-modal
    └── script
```

JavaScript can:
1. **Select** elements from the DOM
2. **Listen** for events (clicks, typing, etc.)
3. **Modify** elements (add/remove classes, change text, etc.)

### Step 2: Select Elements

In `script.js`, select the 3 elements you need:

```javascript
// Step 1: Select elements from the HTML
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
```

> 💡 `querySelector` uses the same selectors as CSS: `#id`, `.class`, `tag`

### Step 3: Add Click Event to Open the Modal

```javascript
// Step 2: When the open button is clicked, show the modal
openButton.addEventListener("click", function () {
  modal.classList.add("modal--open");
});
```

**What this does:**
1. `addEventListener("click", ...)` — waits for a click on the button
2. `modal.classList.add("modal--open")` — adds the class `modal--open` to the modal
3. CSS takes over: `.modal--open { display: flex; }` makes the modal visible

### Step 4: Add Click Event to Close the Modal

```javascript
// Step 3: When the close button is clicked, hide the modal
closeButton.addEventListener("click", function () {
  modal.classList.remove("modal--open");
});
```

### Step 5: Close Modal by Clicking Outside (Bonus)

```javascript
// Step 4 (bonus): Close modal when clicking the dark background
modal.addEventListener("click", function (event) {
  // Only close if the click was on the background, not the content
  if (event.target === modal) {
    modal.classList.remove("modal--open");
  }
});
```

### Step 6: Test Your Code

1. Click "Open Modal" → The modal should appear with a dark overlay
2. Click "Close" → The modal should disappear
3. Click the dark area outside the modal → It should also close
4. Open the browser Console (F12) → Check for any errors

## 💻 Code Structure

### script.js (complete)

```javascript
// =============================================
// MODAL INTERACTION
// =============================================

// 1. Select the elements we need
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");

// 2. Open the modal when button is clicked
openButton.addEventListener("click", function () {
  modal.classList.add("modal--open");
});

// 3. Close the modal when close button is clicked
closeButton.addEventListener("click", function () {
  modal.classList.remove("modal--open");
});

// 4. Close the modal when clicking outside the content
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("modal--open");
  }
});
```

### style.css (modal-specific)

```css
/* Modal: hidden by default */
.modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.6);
}

/* Modal: visible when class is added by JS */
.modal--open {
  display: flex;
}

/* Modal content box */
.modal__content {
  background: #ffffff;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  border-radius: 8px;
}
```

## ✅ Expected Outcome

Your page should:
1. Display a "Open Modal" button
2. Clicking the button opens a centered modal with a dark overlay
3. The modal has a title, text, and a "Close" button
4. Clicking "Close" hides the modal
5. Clicking the dark background also closes the modal
6. No errors in the console

## 🧪 Testing Checklist

- [ ] Elements are selected with `querySelector`
- [ ] `addEventListener` is used (no inline `onclick`)
- [ ] Modal opens when clicking the open button
- [ ] Modal closes when clicking the close button
- [ ] Modal closes when clicking the dark overlay
- [ ] No JavaScript errors in the console
- [ ] Comments explain each step in the JS file
- [ ] No external libraries are used

## 🎓 Key Concepts

### Selecting Elements
```javascript
document.querySelector("#id");      // Select by ID
document.querySelector(".class");   // Select by class
document.querySelector("tag");      // Select by tag name
```

### Adding Event Listeners
```javascript
element.addEventListener("event", function () {
  // Code runs when the event happens
});
```

Common events:
| Event | When it fires |
|-------|--------------|
| `"click"` | User clicks the element |
| `"input"` | User types in an input field |
| `"submit"` | Form is submitted |
| `"keydown"` | A key is pressed |
| `"mouseover"` | Mouse hovers the element |

### classList Methods
```javascript
element.classList.add("class-name");      // Add a class
element.classList.remove("class-name");   // Remove a class
element.classList.toggle("class-name");   // Add if missing, remove if present
element.classList.contains("class-name"); // Check if class exists
```

### The Show/Hide Pattern
```
Default CSS:  display: none     → Element is hidden
JS adds class: .modal--open     → CSS changes to display: flex
JS removes class:               → Back to display: none
```

## 🚀 Bonus Challenges

1. **Keyboard support**: Close the modal when the user presses `Escape`
   ```javascript
   document.addEventListener("keydown", function (event) {
     if (event.key === "Escape") {
       modal.classList.remove("modal--open");
     }
   });
   ```
2. **Toggle button**: Create a button that toggles a dark/light theme on the page using `classList.toggle`
3. **Character counter**: Add an input field that shows how many characters have been typed (use `"input"` event)
4. **Disable scroll**: When the modal is open, add `overflow: hidden` to `<body>` to prevent scrolling behind it

## 📚 Resources

- [MDN — querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [JavaScript.info — Introduction to Events](https://javascript.info/introduction-browser-events)

## 🤔 Reflection Questions

1. Why do we use `addEventListener` instead of `onclick` in the HTML?
2. What is the difference between `classList.add` and `classList.toggle`?
3. Why do we check `event.target === modal` before closing?
4. What other interactions could you add to a website using this same pattern?

## 💡 Common Mistakes

- **Script loaded before HTML**: Make sure `<script src="script.js"></script>` is at the **bottom** of `<body>`, not in `<head>`
- **Wrong selector**: `querySelector("#modal")` needs the `#` — without it, it looks for a `<modal>` tag
- **Typo in class name**: `classList.add("modal--opn")` won't match `.modal--open` in CSS
- **Using `innerHTML` to show/hide**: Don't remove/recreate HTML — just toggle classes
- **Forgetting `event` parameter**: In the overlay click handler, you need `function (event)` to access `event.target`

## 🎯 Success Criteria

You've successfully completed this exercise when:
- ✅ The modal opens and closes correctly
- ✅ All JavaScript uses `querySelector` and `addEventListener`
- ✅ Every line of JS has a comment explaining its purpose
- ✅ No inline event handlers in HTML (`onclick`, etc.)
- ✅ No console errors
- ✅ The page works without any libraries

---

**Previous**: [Lab 05: UI Components](../lab-05-ui-components/) ←
**Next**: [Lab 07: Mini Project](../lab-07-mini-project/) →
**[Back to Course Home](../README.md)**
