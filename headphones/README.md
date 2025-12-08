# Headphones Web Page

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Design Reference](#design-reference)
- [Technologies Used](#technologies-used)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Instructions to Run](#instructions-to-run)
- [Author](#author)

---

## Project Overview
This project is a **responsive and accessible web page** for a headphones product, implemented from scratch using **HTML and CSS**. The goal was to replicate the Figma design provided by Nicolas Philippot while following modern web development best practices.

---

## Features
- **Fully responsive layout**: switches to mobile version at 480px screen width or less.
- **Interactive elements**:
  - Links hover/active color: `#FF6565`
  - Buttons hover/active: opacity `0.9`
- **Maximum content width**: 1000px centered on the page.
- **Semantic HTML** with accessible landmarks for better screen reader support.
- **Mobile-first design** with Flexbox and Grid for layout.
- **High-quality images** for desktop, tablet, and mobile resolutions.

---

## Design Reference
The design is based on Figma screens provided by Nicolas Philippot:

- Desktop, tablet, and mobile layouts are replicated using responsive techniques.
- Fonts used:
  - `Source Sans Pro`
  - `Spin-Cycle-OT` (optional if unavailable, system fonts fallback applied)
- Exact spacing, colors, and typography were implemented according to the Figma file.

---

## Technologies Used
- HTML5
- CSS3
- Figma (for design reference)

---

## Responsive Design
- Mobile-first approach.
- Breakpoints:
  - Mobile: ≤ 480px
  - Tablet: 481px – 1023px
  - Desktop: ≥ 1024px
- Images switch automatically using the `<picture>` element for different screen sizes.
- Features and stats sections use CSS Grid for layout.

---

## Accessibility
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`  
- `alt` attributes for all images  
- Skip link for keyboard navigation: `Skip to content`  
- Focus-visible styles on interactive elements for accessibility

---

## Instructions to Run
1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/alx_html_css.git
