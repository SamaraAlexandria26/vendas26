---
name: Obsidian Pulse
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e4e2e4'
  on-surface-variant: '#c7c6ca'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#919094'
  outline-variant: '#46464a'
  surface-tint: '#c8c6c7'
  primary: '#c8c6c7'
  on-primary: '#313031'
  primary-container: '#0a0a0b'
  on-primary-container: '#7a797a'
  inverse-primary: '#5f5e5f'
  secondary: '#b3c5ff'
  on-secondary: '#002b75'
  secondary-container: '#0266ff'
  on-secondary-container: '#f9f7ff'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#090b0b'
  on-tertiary-container: '#787a7a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1c1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#dae1ff'
  secondary-fixed-dim: '#b3c5ff'
  on-secondary-fixed: '#001849'
  on-secondary-fixed-variant: '#003fa4'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#353437'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-margin: 24px
  grid-gutter: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered for a premium, high-performance smartwatch experience. The brand personality is authoritative, innovative, and motivating, targeting high-achieving professionals and athletes who value both aesthetic precision and biometric data.

The style is **Corporate Modern with High-Contrast Tech accents**. It utilizes a deep, dark foundation to create a sense of luxury and focus, punctuated by vibrant "Electric Blue" highlights that signify technological intelligence and vitality. The interface mimics the sleek hardware of a premium wearable, using high-contrast typography and razor-sharp thin-line iconography to convey clarity and productivity.

## Colors

The palette is anchored in **Deep Obsidian Black (#0A0A0B)**, providing a sophisticated backdrop that minimizes visual noise. **Electric Blue (#0066FF)** serves as the primary action and "tech" color, used strategically for interactive elements, data visualizations, and motivational highlights. **Clean White (#FFFFFF)** is reserved for primary typography to ensure maximum legibility against the dark background. 

Secondary neutrals like **#1C1C1E** are used for surface-level differentiation, creating a subtle layered effect that feels structural and high-end.

## Typography

The typography strategy leverages **Sora** for headlines to provide a bold, geometric, and futuristic feel that commands attention. Its wide stance and technical structure align with the smartwatch’s physical design.

For body copy, **Hanken Grotesk** offers a clean, contemporary grotesque style that maintains high readability for long-form feature descriptions and health data. **Geist** is used for technical labels and data readouts, providing a monospaced-adjacent aesthetic that reinforces the "developer-grade" precision of the product's biometric sensors.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is "Spacious Precision"—using generous vertical margins (120px+) between sections to allow the product photography to breathe, while maintaining tight, technical spacing (8px increments) for data-heavy UI components.

Content should be center-aligned for primary hero moments and feature callouts to evoke a premium editorial feel. For technical specifications, use a 2-column or 3-column split to group health and productivity metrics clearly.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** rather than traditional drop shadows. Surfaces closer to the user are rendered in slightly lighter grays (e.g., #1C1C1E) against the base Obsidian Black. 

To enhance the tech-focused aesthetic, use **Backdrop Blurs (20px-40px)** on sticky navigation bars and modal overlays, creating a frosted glass effect that retains the deep background tones. Subtle, high-precision strokes (1px width, 10-15% opacity white) should be used to define the edges of cards and containers, replacing shadows with a "CNC-machined" look.

## Shapes

The shape language reflects the hardware design of the smartwatch: **Rounded (0.5rem)**. This provides a balance between the organic nature of health/wellness and the structural integrity of high-end technology.

- **Standard Containers:** 8px (0.5rem) radius.
- **Large Sections/Cards:** 16px (1rem) radius.
- **Interactive Tags/Pills:** Fully rounded (pill-shaped) to distinguish them from structural data cards.

## Components

### Buttons
Primary buttons use the Electric Blue background with White bold text. They should have a subtle inner glow (top-down) to simulate a high-tech illuminated surface. Secondary buttons are "Ghost" style—thin 1px white borders with no fill.

### Cards & Data Modules
Cards should be #1C1C1E with 1px semi-transparent borders. For health metrics (Heart Rate, Sleep), use thin-line charts in Electric Blue.

### Icons
Use 1.5pt stroke-weight icons. Icons must be open-path and geometric. Avoid filled icons unless used for active states in the navigation.

### Input Fields
Inputs should be dark with a bottom-only border that transforms into a full Electric Blue highlight upon focus.

### Progress Indicators
Circular rings for activity tracking should use high-contrast gradients of Electric Blue to signify motion and energy.