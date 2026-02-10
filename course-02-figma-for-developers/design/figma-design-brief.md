# Figma Design Brief — FocusFlow Landing Page

This document describes the Figma design that students should reproduce throughout the course.
Use this as a reference when you don't have access to Figma.

---

## Page: Desktop (1440 × 900)

### Header
- **Height**: ~72px
- **Layout**: Flex row, `space-between`, vertically centered
- **Logo**: "FocusFlow" — Playfair Display, 700, 22px, color #0F172A
- **Nav links**: "Features", "Pricing", "Contact" — Source Sans 3, 600, 15px, color #64748B
- **CTA button**: "Try Free" — Primary button style

### Hero Section
- **Layout**: Flex row, 40px gap, vertically centered
- **Left side** (flex: 1):
  - **H1**: "Stay focused, every day" — Playfair Display, 700, 40px, line-height 1.2
  - **Paragraph**: Source Sans 3, 400, 18px, color #64748B, max-width 480px
  - **Buttons**: "Get Started" (Primary) + "View Demo" (Secondary), 12px gap
- **Right side**:
  - **Image**: 420 × 280px, border-radius 12px, placeholder

### Features Section
- **H2**: "Why FocusFlow?" — Playfair Display, 700, 28px
- **Layout**: Flex row, 20px gap
- **Cards** (3 equal width):
  - Padding: 24px
  - Background: #FFFFFF
  - Border: 1px solid #E2E8F0
  - Border-radius: 8px
  - **H3**: 20px, Source Sans 3
  - **P**: 15px, color #64748B

### Pricing Section
- **H2**: "Simple pricing" — Playfair Display, 700, 28px
- **Subtitle**: Source Sans 3, 400, 16px, color #64748B
- **Pricing box**: inline-flex, 20px gap, 20px 28px padding, white bg, border, radius 8px
  - **Price**: "$5 / month" — 28px, bold
  - **Button**: "Start Now" — Primary

### Footer
- **Layout**: Single line, centered left
- **Text**: Source Sans 3, 400, 14px, color #64748B
- **Top border**: 1px solid #E2E8F0

---

## Page: Mobile (375 × 812)

Same content but with these layout changes:
- **Header**: Flex column, 12px gap, left-aligned
- **Hero**: Flex column, text centered, image below text
- **Features**: Flex column (cards stacked)
- **Pricing**: Same but full width

---

## Components

### Button — Primary
- Background: #2563EB
- Color: #FFFFFF
- Padding: 12px 24px
- Border-radius: 6px
- Font: Source Sans 3, 600, 16px

### Button — Secondary
- Background: #0EA5E9
- Color: #FFFFFF
- Same padding and radius

### Button — Ghost
- Background: transparent
- Border: 2px solid #2563EB
- Color: #2563EB
- Same padding and radius

### Card
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border-radius: 8px
- Padding: 24px

### Input Field
- Border: 1px solid #CBD5E1
- Border-radius: 6px
- Padding: 10px 12px
- Font: Source Sans 3, 16px
- Focus: border-color #2563EB, box-shadow 0 0 0 3px rgba(37,99,235,0.1)

### Modal
- Overlay: rgba(15, 23, 42, 0.6), fixed, full screen, flex center
- Content: white, padding 24px, max-width 400px, border-radius 8px
