# Farms Empire Web Platform: Design System

This design system bridges the premium, editorial feel of a high-impact NGO/agricultural enterprise (Public Site) with the dense, functional, and distraction-free utility of a top-tier SaaS product (Admin Dashboard). It is benchmarked against the crisp neutrality of **Linear**, the structured elegance of **Stripe**, and the warm readability of **Notion**.

---

## 1. Color Palette

The palette balances the earthy, organic roots of African communal agriculture with the sharp, high-contrast requirements of a modern enterprise SaaS dashboard. We use a "Stone" neutral base to keep the UI warm but strictly professional.

### Brand Colors

| Token                       | Hex Code  | Usage Rules                                                                                                                          |
| :-------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| **Primary (Empire Green)**  | `#0F4C3A` | Primary buttons, active states, primary links, dashboard sidebar background (in dark mode). Represents growth, SDG 2, and authority. |
| **Primary Hover**           | `#0A3B2C` | Hover states for primary elements.                                                                                                   |
| **Secondary (Ujamaa Clay)** | `#B85C38` | Secondary buttons, subtle highlights, tags/badges for "Community" or "Impact". Represents African soil and warmth.                   |
| **Accent (Harvest Gold)**   | `#E8A33D` | Callouts, star ratings, notification dots, premium feature highlights. Represents yield, sun, and energy.                            |

### Neutrals (Stone Base)

| Token              | Hex Code  | Usage Rules                                            |
| :----------------- | :-------- | :----------------------------------------------------- |
| **Background**     | `#FAFAF9` | Main page background (Public & Dashboard).             |
| **Surface**        | `#FFFFFF` | Cards, modals, dropdowns, sidebar, table rows.         |
| **Surface Raised** | `#F5F5F4` | Hover states on list items, nested cards, code blocks. |
| **Border**         | `#E7E5E4` | Dividers, input borders, card outlines.                |
| **Text Primary**   | `#1C1917` | Headings, primary body text, high-emphasis data.       |
| **Text Secondary** | `#57534E` | Descriptions, labels, secondary text, timestamps.      |
| **Text Tertiary**  | `#A8A29E` | Placeholders, disabled text, subtle icons.             |

### Semantic Colors

| Token       | Hex Code  | Usage Rules                                                        |
| :---------- | :-------- | :----------------------------------------------------------------- |
| **Success** | `#10B981` | "Published" status, successful form submissions, positive metrics. |
| **Warning** | `#F59E0B` | "Draft" status, unread contact alerts, cautionary messages.        |
| **Error**   | `#EF4444` | Form validation errors, "Delete" actions, failed uploads.          |
| **Info**    | `#3B82F6` | Informational tooltips, "Read" status, external links.             |

---

## 2. Typography

We use a dual-font strategy. **Inter** provides the crisp, high-legibility SaaS feel for the dashboard and body text, while **Instrument Serif** provides a premium, editorial, "thought-leader" aesthetic for public site headings.

### Font Families

- **Display / Editorial (Public Headings):** `Instrument Serif`, `Georgia`, serif. (Used _only_ on the public marketing site for H1, H2, and pull quotes to establish authority and storytelling).
- **UI / Body (Dashboard & Public Body):** `Inter`, `-apple-system`, `BlinkMacSystemFont`, sans-serif. (Used for all dashboard UI, body text, buttons, and data).

### Type Scale (Based on Inter for UI)

| Token          | Size | Weight          | Line Height | Usage Context                                    |
| :------------- | :--- | :-------------- | :---------- | :----------------------------------------------- |
| **Text XS**    | 12px | 400 (Regular)   | 16px        | Badges, timestamps, fine print, table metadata.  |
| **Text SM**    | 14px | 400 / 500       | 20px        | Secondary body text, form labels, sidebar links. |
| **Text Base**  | 16px | 400 / 500       | 24px        | Primary body text, paragraph content.            |
| **Text LG**    | 18px | 400 / 500       | 28px        | Lead paragraphs, prominent card descriptions.    |
| **Heading SM** | 20px | 600 (Semibold)  | 28px        | Card titles, modal headers, section subheadings. |
| **Heading MD** | 24px | 600             | 32px        | Page titles (Dashboard), H3 equivalents.         |
| **Heading LG** | 30px | 600             | 36px        | Major section headers.                           |
| **Heading XL** | 36px | 600             | 40px        | Dashboard overview metrics, hero sub-text.       |
| **Display SM** | 48px | 400 (Regular)\* | 48px        | Public site H2. (_Instrument Serif_)             |
| **Display LG** | 64px | 400 (Regular)\* | 64px        | Public site H1 / Hero text. (_Instrument Serif_) |

---

## 3. Spacing Scale

Based on a strict **4px base grid**. This ensures mathematical harmony across both the marketing site and the dense data tables of the dashboard.

| Token        | Value | Tailwind Class  | Usage Context                                          |
| :----------- | :---- | :-------------- | :----------------------------------------------------- |
| **Space 1**  | 4px   | `p-1` / `gap-1` | Icon padding inside buttons, tight inline gaps.        |
| **Space 2**  | 8px   | `p-2` / `gap-2` | Form field internal padding, small icon-to-text gaps.  |
| **Space 3**  | 12px  | `p-3` / `gap-3` | Standard input padding, list item vertical padding.    |
| **Space 4**  | 16px  | `p-4` / `gap-4` | **Default card padding**, standard component gaps.     |
| **Space 5**  | 20px  | `p-5` / `gap-5` | Modal padding, larger card padding.                    |
| **Space 6**  | 24px  | `p-6` / `gap-6` | Page section padding, dashboard content block gaps.    |
| **Space 8**  | 32px  | `p-8` / `gap-8` | Major section dividers, hero section vertical padding. |
| **Space 10** | 40px  | `p-10`          | Public site section margins (top/bottom).              |
| **Space 12** | 48px  | `p-12`          | Large public site section padding.                     |
| **Space 16** | 64px  | `p-16`          | Maximum vertical breathing room (Hero/Footer).         |

---

## 4. Component Tokens

### Border Radius

Kept relatively sharp to align with the Linear/Stripe aesthetic, avoiding overly "bubbly" or playful curves.

- **`radius-sm` (4px):** Inputs, checkboxes, small badges, inline tags.
- **`radius-md` (8px):** Buttons, dropdown menus, standard cards, tooltips.
- **`radius-lg` (12px):** Modals, large dashboard widgets, image containers.
- **`radius-full` (999px):** Avatars, pill-shaped status badges, toggle switches.

### Shadows

Shadows are diffuse, subtle, and use a warm-tinted black (`rgba(28, 25, 23, X)`) to blend seamlessly with the Stone neutral palette.

- **`shadow-xs`:** `0 1px 2px rgba(28, 25, 23, 0.05)` (Inputs, subtle borders).
- **`shadow-sm`:** `0 1px 3px rgba(28, 25, 23, 0.1), 0 1px 2px rgba(28, 25, 23, 0.06)` (Standard cards, dropdowns).
- **`shadow-md`:** `0 4px 6px -1px rgba(28, 25, 23, 0.1), 0 2px 4px -2px rgba(28, 25, 23, 0.1)` (Floating elements, sticky headers).
- **`shadow-lg`:** `0 10px 15px -3px rgba(28, 25, 23, 0.1), 0 4px 6px -4px rgba(28, 25, 23, 0.1)` (Modals, command palettes).

### Borders

- **Standard:** `1px solid #E7E5E4` (Border token).
- **Focus Ring:** `2px solid #0F4C3A` with `2px offset` (Primary Green) for accessibility.

---

## 5. Layout Rules

### Public Marketing Site

- **Max Content Width:** `1280px` (centered with auto margins).
- **Grid System:** 12-column CSS Grid.
- **Gutters:** `24px` (Desktop), `16px` (Mobile).
- **Prose/Reading Width:** Max `720px` for blog posts and long-form content to ensure optimal readability (Notion benchmark).

### Administrative Dashboard

- **Sidebar:** Fixed left sidebar. Width: `260px` (expanded), `64px` (collapsed/icon only).
- **Content Area:** Fluid width, filling the remaining viewport.
- **Inner Content Max Width:** `1200px` for forms and complex tables to prevent line-length fatigue on ultra-wide monitors.
- **Grid System:** 12-column for dashboard widgets/stats, collapsing to single column on mobile.

---

## 6. Responsive Rules

The system is mobile-first but heavily optimized for desktop productivity (where the dashboard is primarily used).

| Breakpoint        | Width      | Layout & UI Changes                                                                                                                                                                                       |
| :---------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Base (Mobile)** | `< 640px`  | **Public:** Single column, full-width cards, hamburger menu. <br>**Dashboard:** Sidebar hidden behind a slide-out drawer. Tables become horizontally scrollable or use card layouts.                      |
| **SM**            | `≥ 640px`  | **Public:** 2-column grids for feature lists. <br>**Dashboard:** Inline form labels move to the left of inputs.                                                                                           |
| **MD (Tablet)**   | `≥ 768px`  | **Public:** 3 to 4-column grids. Navigation becomes visible in the header. <br>**Dashboard:** Sidebar becomes persistent but collapsed (icons only).                                                      |
| **LG (Desktop)**  | `≥ 1024px` | **Public:** Full 12-column grid. Max-width constraints apply. <br>**Dashboard:** Sidebar fully expanded. Multi-column layouts for dashboard stats.                                                        |
| **XL (Wide)**     | `≥ 1280px` | **Public:** Generous whitespace, side-by-side text/image hero sections. <br>**Dashboard:** Dashboard widgets utilize full 3 or 4-column layouts. TipTap editor expands to full comfortable reading width. |
| **2XL (Ultra)**   | `≥ 1536px` | **Public:** Content remains capped at `1280px` to prevent overly long line lengths. <br>**Dashboard:** Content area caps at `1440px` and centers, ensuring data tables don't stretch infinitely.          |
