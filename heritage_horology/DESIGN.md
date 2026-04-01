# Design System Strategy: The Horological Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

In the world of luxury horology, time is not just measured; it is showcased. This design system moves away from traditional e-commerce "utility" and toward an editorial, gallery-like experience. We achieve this through **Intentional Asymmetry**—breaking the rigid predictability of standard web grids to mimic the layout of a high-end fashion magazine. By overlapping high-resolution product photography with bold, serif typography and utilizing expansive white space (using our `24` and `20` spacing tokens), we create an environment where the product is the protagonist. 

The aesthetic is characterized by a "Silent Luxury"—where the absence of clutter conveys more value than the addition of features.

---

## 2. Colors & Surface Logic
The palette is rooted in tonal depth, using a monochromatic base punctuated by `secondary` gold accents to signify prestige.

### The "No-Line" Rule
To maintain a premium, seamless feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries between content areas must be defined solely through background color shifts. Use `surface-container-low` (#f3f3f3) against a `surface` (#f9f9f9) background to create distinct logical zones without the "cheapness" of stroke lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of fine paper.
*   **Base:** `surface` (#f9f9f9) for the primary page canvas.
*   **Depth Level 1:** Use `surface-container-low` for large section backgrounds (e.g., the "Featured Collection" block).
*   **Depth Level 2:** Use `surface-container-lowest` (#ffffff) for interactive cards or floating product highlights to create a subtle "lift" against the off-white canvas.

### The "Glass & Gradient" Rule
For floating navigation bars or quick-view overlays, use **Glassmorphism**. Apply `surface` at 80% opacity with a `backdrop-blur` of 20px. 
**Signature Polish:** For primary call-to-action buttons, use a subtle linear gradient from `primary` (#5f5e5e) to `primary-container` (#a7a5a4) at a 135-degree angle. This adds a "metallic" weight that flat hex codes cannot achieve.

---

## 3. Typography
Our typography is a dialogue between tradition and modern precision.

*   **Display & Headlines (Noto Serif):** These are our "editorial voices." Use `display-lg` for hero statements. The serif font evokes the heritage of watchmaking and mechanical intricacy.
*   **Body & Labels (Manrope):** The sans-serif choice provides the "technical data." It is clean, highly legible, and modern.
*   **Hierarchy as Identity:** Large typographic scales (e.g., `display-md`) should be used with `on-surface` (#1a1c1c) for product names, while `label-md` in `secondary` (#775a19) should be used for categories or "Limited Edition" tags to draw the eye with golden precision.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We avoid the heavy, muddy shadows of 2010-era design.

*   **The Layering Principle:** Instead of shadows, stack `surface-container` tiers. A `surface-container-highest` element placed on a `surface` background provides enough contrast to imply elevation.
*   **Ambient Shadows:** If a product must "float" (e.g., a watch face in a hero section), use a shadow color tinted with the primary hue: `rgba(26, 28, 28, 0.06)` with a 40px blur and 20px Y-offset.
*   **The "Ghost Border" Fallback:** For accessibility in form inputs, use the `outline-variant` (#d1c5b4) at **15% opacity**. This creates a "suggestion" of a container without breaking the minimalist aesthetic.
*   **Roundedness Scale:** As per the system specifications, all corners are `0px`. This sharp, "brutalist" edge reinforces the precision-cut nature of luxury timepieces.

---

## 5. Components

### Buttons
*   **Primary:** High-contrast `on-primary` text on a `primary` (#5f5e5e) background. Square edges (`0px`). Padding: `8` (2.75rem) horizontal, `3` (1rem) vertical.
*   **Secondary/Ghost:** `outline` (#7f7667) text with a "Ghost Border" (20% opacity). On hover, transition to a solid `surface-container-high` background.

### Product Cards
*   **Construction:** No borders. Use `surface-container-lowest` (#ffffff) as the card base. 
*   **Spacing:** Use `spacing-6` (2rem) for internal padding to give the product imagery "room to breathe."
*   **Details:** Price should be in `title-md` (Manrope) for technical clarity; Product Name in `headline-sm` (Noto Serif).

### Input Fields
*   **Style:** Minimalist underline only, or a very light `surface-variant` fill. 
*   **States:** On focus, the underline transforms from `outline-variant` to `secondary` (Gold) to signal "active luxury."

### Narrative Imagery Blocks
Instead of a standard 4-column grid, use an asymmetrical layout. A large image (60% width) overlapping a text block (40% width) using `spacing-10` as an offset. This breaks the "template" feel.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Negative Space:** If a section feels "empty," leave it. In luxury, space equals value.
*   **Use High-Contrast Type:** Pair a very large `display-lg` headline with a very small `label-sm` sub-header for a high-fashion editorial look.
*   **Align to the Grid, then Break it:** Place elements on the grid, then use the `spacing` scale to nudge them off-center for a custom, bespoke feel.

### Don't:
*   **Don't use 1px Borders:** Never use a solid stroke to separate "Latest Arrivals" from "Featured." Use a background color shift to `surface-container-low`.
*   **Don't use Rounded Corners:** The `0px` rule is absolute. Even buttons and chips must be sharp.
*   **Don't use Pure Black Shadows:** Always tint shadows with the `on-surface` color to maintain a natural, ambient light feel.
*   **Don't Overuse Gold:** The `secondary` (Gold) token is a surgical tool. Use it for one specific call-to-action or a price highlight, never for large background areas.