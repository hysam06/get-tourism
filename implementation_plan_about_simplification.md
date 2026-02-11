# Refine About Page - New Content Structure

## Goal
Restructure the "About Us" page to include three specific text sections provided by the user, replacing the previous "Vision & Mission" and Intro sections. The design should be minimal and aligned.

## Content to Add
1.  **Welcome / Intro**: "At Great Escapes Tourism..."
2.  **UAE Inbound Tours**: "Immerse yourself..."
3.  **Outbound Tours**: "Embark on extraordinary adventures..."

## Proposed Changes

### `src/pages/about.js`

#### [MODIFY] [about.js](file:///c:/Users/sayed/Downloads/projects/get%20tourism/src/pages/about.js)
-   **Hero**: Update title to "About Us".
-   **Section 1 (Welcome)**: Replace existing intro with the provided "Welcome to Great Escapes Tourism" text. Layout: Centered, clean text.
-   **Section 2 (Services Grid)**: Create a new container for "UAE Inbound Tours" and "Outbound Tours".
    -   Use a **minimal grid layout** (2 columns on desktop, 1 on mobile).
    -   Each column will have the Heading and the Description.
-   **Remove**: Old `.vision-mission-section`.

### `src/styles.css`

#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/projects/get%20tourism/styles.css)
-   **`about-content-grid`**: Styles for the Inbound/Outbound minimal grid.
-   **Typography**: Ensure all new sections use `Montserrat` (regular/light weights) as previously established.
-   **Spacing**: Generous whitespace (padding) for the "minimal" feel.

## Verification Plan

### Manual Verification
-   **Check Content**: Ensure all provided text is present and correct.
-   **Check Layout**: Verify minimal alignment (centered welcome, 2-col services).
-   **Check Styling**: Fonts should vary (headings bold, text regular/light), whitespace should be balanced.
-   **Mobile**: Sections should stack vertically.
