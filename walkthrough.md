# Walkthrough - Loader Alignment

I have aligned the loader logo and progress bar to match the exact position of the `window-logo` on the Home page.

## Changes Made

### CSS Alignment
- **Repositioned Logo**: Updated `.loader-logo` to use `top: 42vh` and `transform: translate(-50%, -50%)`, identical to the `.window-logo` style.
- **Positioned Progress Bar**: Moved the `.progress-bar` to `calc(42vh + 100px)`, placing it directly below the centered logo.
- **Structural Update**: Switched `#loader` from flex centering to absolute positioning for its children to allow for precise vertical placement.

## Verification

### Manual Verification
1.  **Reload the page**: Observe the loader logo.
2.  **Transition**: Confirm the logo stays in the same vertical position when the Home page hero section (window frame) appears.
3.  **Progress Bar**: Confirm the progress bar is centered and clearly visible below the logo.
