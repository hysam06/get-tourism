# Fix Navbar Home Page Visibility

## Goal
The Navbar is currently hidden on the home page and does not appear because the `Router.js` actively kills the `ScrollTrigger` responsible for showing it on scroll. I will remove this conflicting logic so the `Navbar`'s own internal trigger can manage visibility globally across all pages.

## Proposed Changes

### `src/router.js`

#### [MODIFY] [router.js](file:///c:/Users/sayed/Downloads/projects/get%20tourism/src/router.js)
-   Remove the logic that kills `this.navbar.globalTrigger` when `isHome` is true.
-   Simplify the navbar notification logic to simply call `createGlobalTrigger()` on every route change, ensuring its state is always fresh and correct for the current page.

### `src/components/Navbar.js`
-   (Optional but good practice) Ensure `createGlobalTrigger()` is robust against repeated calls. (It already is, because it kills the previous trigger at the start).

## Verification Plan

### Manual Verification
-   **Initial Load**: Open `#/`. Verify Navbar is hidden at the top.
-   **Scroll Down**: Scroll past 40vh. Verify Navbar appears.
-   **Smart Scroll**: Scroll up. Verify Navbar stays visible. Scroll down. Verify it hides.
-   **Navigation**: Click "About". Verify Navbar is immediately visible at the top.
-   **Back to Home**: Click logo/Home. Verify Navbar is hidden at the top again.
