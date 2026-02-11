# Contact Page Redesign Plan

## Goal Description
Redesign the Contact page to feature a "landscape" oriented form and move the contact details (Address, Phone, Email) below the form. The form layout will be adjusted to match the user's provided sketch.

## User Review Required
None.

## Proposed Changes

### [CSS] `styles.css`
-   **Modify `.contact-wrapper`**: Change from 2-column grid to single column (or flex column).
-   **Modify `.contact-form-box`**: Increase max-width to allow for landscape layout (e.g., 100% or 1200px).
-   **Modify `.contact-form`**: Use CSS Grid to layout fields:
    -   Row 1: Name, Phone, Service (3 columns).
    -   Row 2: Message (Left 2/3) and Submit Button (Right 1/3) or aligned appropriately.
-   **Style `.contact-info-side`**: Update styles to display contact details in a horizontal grid below the form.

### [JS] `src/pages/contact.js`
-   **Reorder DOM**: Move `.contact-info-side` to be after `.contact-form-side`.
-   **Update Form Structure**:
    -   Group Name, Phone, Service into a row container (or utilize CSS grid).
    -   Adjust textarea and submit button placement.
    -   Ensure dynamic fields are handled correctly within the new layout.

## Verification Plan

### Manual Verification
1.  **Open the Contact Page**: Navigate to `/contact`.
2.  **Check Layout**:
    -   Verify Form is landscape (wide).
    -   Verify "Name", "Phone", "Service" are in one row.
    -   Verify "Message" and "Submit Button" are arranged correctly.
    -   Verify Contact Info (Phone, Email, Address) is **below** the form box.
3.  **Check Functionality**:
    -   Test form submission (visual check).
    -   Test dynamic fields (Service dropdown).
    -   Ensure responsiveness on mobile.
