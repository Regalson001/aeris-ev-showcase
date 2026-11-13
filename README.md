
# AERIS — Luxury Automotive & EV Showcase

A premium, responsive automotive concept landing page for **AERIS**, a fictional electric grand tourer.

The experience combines editorial typography, cinematic vehicle imagery, an interactive exterior-finish selector, a horizontal scroll gallery, performance metrics, and expandable technical specifications.

> **Portfolio concept notice:** AERIS is a fictional brand created for front-end demonstration. Performance figures and specifications are illustrative concept targets, not verified production data. This project is not affiliated with an automotive manufacturer and does not offer a vehicle for sale.

---

## Project Overview

AERIS explores the visual language of a premium electric vehicle launch website. The interface focuses on clean composition, immersive photography, responsive layouts, and interactive product presentation.

## Features

- Full-viewport automotive hero section.
- Translucent navigation bar.
- Responsive mobile navigation menu.
- Performance statistics for acceleration, range, power, and charging.
- Interactive vehicle finish selector.
- Four selectable exterior colour themes.
- CSS `:has()` relational selectors.
- Horizontal touch-friendly image gallery.
- CSS Scroll Snap navigation.
- Expandable technical specifications accordion.
- Native HTML `<details>` and `<summary>` elements.
- Angled section divider using CSS `clip-path`.
- Responsive editorial footer layout.
- Smooth hover transitions.
- Reduced-motion accessibility support.
- Responsive desktop, tablet, and mobile layouts.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Layout, visual design, animations |
| JavaScript | Interactive components |
| CSS Grid | Multi-column layouts |
| Flexbox | Responsive alignment |
| CSS Scroll Snap | Horizontal gallery |
| CSS `:has()` | Theme switching |
| CSS `clip-path` | Angled section design |
| Google Fonts | Typography |
| Unsplash | External demonstration photography |

## Project Structure

```text
aeris-ev-showcase/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

## Main Sections

### 1. Hero Experience

A full-screen vehicle introduction with:
- Cinematic vehicle photography.
- Transparent navigation.
- Editorial headline.
- Performance statistics.
- Scroll navigation link.

### 2. Design Introduction

An editorial introduction to the AERIS design concept, supported by large-format automotive imagery.

### 3. Performance Overview

Four performance indicators:
- 0–100 km/h acceleration.
- Estimated driving range.
- Electric motor output.
- Fast charging target.

### 4. Interactive Vehicle Customizer

Visitors can select:
- Graphite.
- Ivory pearl.
- Deep forest.
- Burnished copper.

The selected finish updates the vehicle preview and selected-colour information.

### 5. Horizontal Gallery

A touch-friendly gallery featuring:
- Exterior design.
- Cockpit details.
- Lighting design.
- Vehicle movement.

The gallery uses CSS Scroll Snap for smooth horizontal navigation.

### 6. Technical Specifications

Expandable information panels covering:
- Performance and drivetrain.
- Battery and charging.
- Dimensions and capacity.
- Digital technology and safety.

### 7. Closing Section

A full-width visual call to action followed by a multi-column footer.

## Installation

Clone the repository:

```bash
git clone https://github.com/Regalson001/aeris-ev-showcase.git
```

Navigate into the project:

```bash
cd aeris-ev-showcase
```

Open the project in Visual Studio Code:

```bash
code .
```

Open `index.html` in your browser, or use the VS Code Live Server extension.

No package installation, framework, or build process is required.

## How the Interactions Work

### Vehicle Finish Selector

Native radio inputs allow users to choose an exterior finish. CSS `:has()` updates the page accent theme, while JavaScript updates the preview card's `data-finish` attribute, image filter, selected label, and swatch indicator.

### Horizontal Gallery

The gallery uses:

```css
overflow-x: auto;
scroll-snap-type: x mandatory;
```

This enables touch-friendly horizontal scrolling and snap alignment.

### Specifications Accordion

The specifications use native HTML disclosure elements. JavaScript keeps one section open at a time.

## Responsive Design

The layout adapts to:
- Desktop screens.
- Tablets.
- Mobile phones.
- Smaller mobile screens.

CSS Grid, Flexbox, fluid typography, and responsive media queries maintain the layout across screen sizes.

## Customisation

You can customise the project by:

1. Replacing the demonstration vehicle images with your own licensed photography.
2. Changing the AERIS brand name and content.
3. Updating the vehicle finish colours.
4. Adjusting performance figures and specification content.
5. Modifying typography and colour variables in `style.css`.

## Accessibility

- Semantic HTML landmarks.
- Descriptive image alternative text.
- Accessible navigation labels.
- Native keyboard-operable radio inputs.
- Native disclosure controls.
- Reduced-motion support.
- Responsive navigation state using `aria-expanded`.

## Project Limitations

This is a static front-end showcase. It does not include:
- A real 3D vehicle configurator.
- Live vehicle telemetry.
- A real vehicle reservation system.
- Dealership or payment integration.
- A production charging-data service.

All displayed vehicle specifications are fictional concept values.

## Author

**Stephen Oyugi**

Front-End Developer | AI Automation Engineer | Machine Learning Practitioner

- GitHub: https://github.com/Regalson001
- LinkedIn: https://linkedin.com/in/stephenoyugi001
- Email: stephennyarangi03@gmail.com

## License

This project is distributed under the MIT License. See the `LICENSE` file for details.
