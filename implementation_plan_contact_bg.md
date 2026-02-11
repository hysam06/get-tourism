# Set Contact Page Background Image

The goal is to replace the current radial gradient background on the contact page with a specific image provided by the user. We will also add a subtle overlay to ensures the form and text remain readable.

## Proposed Changes

### Stylesheets

#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)
- Update `.contact-page-new` to use `background-image: url("/assets/pexels-negativespace-33999.jpg")`.
- Set `background-size: cover` and `background-position: center`.
- Add a pseudo-element `::before` to `.contact-page-new` to create a semi-transparent overlay (e.g., `rgba(255, 255, 255, 0.4)`) to ensure the "glass" boxes and text are legible.
- Ensure the `ripple-background` remains visible over the image but under the overlay/content.

## Verification Plan

### Manual Verification
1.  Navigate to the **Contact** page.
2.  Verify the background image is displayed and covers the entire page.
3.  Check if the text and form elements are clearly readable over the image.
4.  Ensure the ripple effect is still visible and looks good.
