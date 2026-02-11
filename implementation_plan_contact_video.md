# Implementation Plan - Contact Page Video Background

## Goal
Add a video background to the Contact page using the provided asset, ensuring it only covers the contact section and not the footer, with low opacity and good text blending.

## User Review Required
> [!NOTE]
> The video file is large (~20MB). Ensure this is acceptable for the user.

## Proposed Changes

### `src/pages/contact.js`

#### [MODIFY] [contact.js](file:///c:/Users/sayed/Downloads/projects/get%20tourism/src/pages/contact.js)
-   Insert `<video>` tag inside `.contact-page-new` but before `.contact-wrapper`.
-   Attributes: `autoplay muted loop playsinline`.
-   Source: `/assets/Untitled design.mp4` (need to ensure build tool copies this or import it if using bundler like Vite/Webpack).
    -   *Correction*: Check if `src/assets` is served publicly or if it needs to be moved to `public/assets`. The current file list showed `assets` at root/src? The file list showed `c:\Users\sayed\Downloads\projects\get tourism\assets`.
    -   If using Vite/Webpack, usually `public` folder is best for static assets referenced by string path, or `import` for src assets.
    -   Existing `contact.js` uses `src="/assets/get logo.png"` in Footer. This suggests a `public/assets` or mapped `assets` folder. I will assume `/assets/` path works if the file is placed correctly. I might need to move the file if it's currently in a root `assets` folder that isn't served.
    -   *Action*: I will try to use the absolute path for now or move it if needed. Actually, standard web apps serve from public. I'll check if there is a `public` dir.
-   Add overlay `div` for opacity.
-   Style the video and overlay to be `absolute`, `cover`, `z-index: 0`.
-   Ensure `.contact-wrapper` has `z-index: 1` and `relative` positioning.
-   Ensure `.contact-page-new` has `position: relative` and `overflow: hidden`.

## Verification Plan

### Manual Verification
-   Open Contact page.
-   Verify video plays automatically.
-   Verify video does not cover the footer (footer should be below the contact section, and since contact section is relative/contained, video shouldn't spill if CSS is scoped).
-   Check text readability (contrast).
