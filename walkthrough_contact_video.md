# Walkthrough - Contact Page Video Background

I have added a video background to the **Contact Page** using the requested file `Untitled design.mp4`.

## Changes

### 1. Asset Management
-   Moved the video file to `public/assets/contact_bg.mp4` to ensure it can be served correctly by the web server.

### 2. Contact Page (`src/pages/contact.js`)
-   **Video Insertion**: Added a `<video>` element with `autoplay`, `muted`, `loop`, and `playsinline` attributes.
-   **Overlay**: Implemented a semi-transparent black overlay (`rgba(0, 0, 0, 0.6)`) on top of the video to ensure text readability and better blending.
-   **Structure**: 
    -   Wrapped the video in a `.video-background-container` placed absolutely content within `.contact-page-new`.
    -   Ensured `.contact-wrapper` (the form and text) sits *above* the video using z-index.
    -   The video is strictly contained within the contact section, so the footer remains unaffected.
-   **Ripple Effect**: Hid the previous "ripple" background in favor of the video as the primary visual.

## Verification
-   The video should play automatically behind the contact form.
-   The text should be legible against the video due to the dark overlay.
-   The footer should remain with its own background, not covered by the video.
