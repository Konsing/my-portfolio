# Konsing Ham Lopez -- Portfolio

A personal portfolio website showcasing projects, skills, and experience. Built as a single-page React application with a dark-only design featuring glass-morphism surfaces, gradient accents, and smooth scroll-triggered animations.

**Live site:** [konsing.github.io/my-portfolio](https://Konsing.github.io/my-portfolio)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI |
| Styled Components | CSS-in-JS with theme tokens |
| Framer Motion | Scroll-triggered and entrance animations |
| React Scroll | Smooth navigation between sections |
| React Intersection Observer | Viewport-based animation triggers |
| Google Fonts (Inter) | Typography |
| GitHub Pages | Deployment and hosting |

---

## Site Sections

**Home** -- Hero section with gradient text name, tagline, and animated background with softly drifting gradient orbs.

**Projects** -- Responsive grid of project cards with glass-morphism styling, technology pills, image hover tilt, and click-through to GitHub repos. 18 projects covering full-stack apps, AI/LLM tools, games, and systems programming.

**Skills** -- Three consolidated categories (Languages, Frameworks and Databases, Tools and Infrastructure) displayed as icon cards with staggered spring entrance animations and per-letter bounce effects. Includes AI/LLM tools like Gemini, Claude API, OpenAI, and Groq.

**Education** -- Cards for UC Davis (BS Computer Science), Berkeley City College (AS Mathematics), and Oakland Charter High School, each with institution logo, details, and campus images.

**About** -- Bio in a glass card with photo reel marquee and links to LinkedIn, GitHub, and email.

---

## Design

- Dark-only theme with a deep near-black background (#0a0a0f)
- Cyan-to-indigo accent gradient (#38bdf8 to #818cf8)
- Glass-morphism surfaces using semi-transparent backgrounds with backdrop blur
- Subtle glow effects on hover states
- Custom scrollbar styling
- Fully responsive with mobile-optimized layouts
- Manual scroll-based active section detection for the navigation bar

---

## Architecture

Single-page app with a fixed glass-morphism navigation bar. All styling is handled through styled-components with a centralized theme object. Animations use Framer Motion's `whileInView` for scroll-triggered entrances and spring physics for interactive elements. The background renders three large blurred gradient orbs that drift on infinite animation loops.

```
src/
  components/
    Header.js                 -- Glass nav with manual active section tracking
    Home.js                   -- Hero with gradient text and scroll indicator
    InteractiveBackground.js  -- Animated gradient orbs
    Projects.js               -- Project card grid with tech pills
    Skills.js                 -- Icon grid with spring animations
    Education.js              -- Institution cards with campus images
    AboutMe.js                -- Bio card, photo reel, contact links
  styles/
    GlobalStyles.js           -- Global reset, typography, scrollbar
  theme.js                    -- Centralized color and style tokens
  App.js                      -- Root component with ThemeProvider
```
