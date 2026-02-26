# GitHub Copilot Instructions

## Project Overview
This is a static website for **TwoFold Visuals**, a wedding photography and videography business. The site is built with plain HTML, CSS, and vanilla JavaScript — no build tools, frameworks, or package managers are used.

## Tech Stack
- **HTML5** — semantic markup, one `.html` file per page
- **CSS3** — all styles live in `styles.css`; use CSS custom properties (variables) defined in `:root`
- **Vanilla JavaScript** — inline `<script>` blocks at the bottom of each HTML file; no external JS libraries

## File Structure
- Each page is a standalone `.html` file at the repository root
- `styles.css` — the single shared stylesheet
- `logo.png`, `kelly-*.jpg`, `kelly*.jpg` — site imagery

## Design & Style Conventions
- **Font**: Inter (loaded from Google Fonts); fallback to `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Color palette**: use CSS variables from `:root` in `styles.css` (e.g., `var(--accent)`, `var(--bg-main)`, `var(--text-main)`)
  - Accent: `#9e814a` (warm gold)
  - Background: `#faf9f7`
  - Text: `#1c1915`
- **Border radius**: use `var(--radius-lg)` (16px) and `var(--radius-md)` (12px)
- Keep the warm, minimal aesthetic consistent across all pages

## HTML Conventions
- Every page must include the shared `<header>` (with nav and mobile hamburger toggle) and `<footer>` — copy the pattern from `index.html`
- Always use `lang="en"` on `<html>`
- Always link `styles.css` in `<head>`
- Use `<section>` with `class="section-header"` + `section-eyebrow` / `section-title` / `section-sub` for consistent section layout
- Use `.grid-2` or `.grid-3` for column layouts, `.card` for card components, `.btn` / `.btn-outline` for buttons
- The mobile nav toggle script must be present on every page (see `index.html`)

## CSS Conventions
- Add new styles to `styles.css` only — do not use inline styles unless matching an existing inline-style pattern on the page
- Use CSS custom properties (`var(--...)`) rather than hard-coded colour or size values
- Keep selectors flat and descriptive; avoid deep nesting

## Content & Copy
- Business name: **TwoFold Visuals**
- Services: wedding videography, wedding photography, and combined photo+video packages
- Contact email: `team@twofoldvisuals.com`
- Tone: clear, honest, professional — no hype or fluff

## What to Avoid
- Do not introduce JavaScript frameworks, CSS preprocessors, or any build-step tooling
- Do not add new external dependencies (CDN scripts, npm packages, etc.)
- Do not modify the analytics/tracking `<script>` block present on each page
- Do not use `any` CSS hacks or vendor-prefixed properties unless already present in `styles.css`
