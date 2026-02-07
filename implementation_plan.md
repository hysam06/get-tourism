# Align Loader Components

This task involves moving the loader logo and progress bar up to match the position of the `window-logo` on the home page.

## Proposed Changes

### Styles
#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)
- Change `#loader` to use absolute positioning for its children instead of flex centering.
- Set `.loader-logo` to `top: 42vh`, `left: 50%`, and `transform: translate(-50%, -50%)`.
- Set `.progress-bar` to `top: calc(42vh + 100px)`, `left: 50%`, and `transform: translateX(-50%)` to place it below the logo.

## Verification Plan

### Manual Verification
1.  Open the website and observe the loader logo position.
2.  Compare it visually (or via inspector) to the `window-logo` that appears after loading.
3.  Ensure the progress bar is correctly placed below the logo.
