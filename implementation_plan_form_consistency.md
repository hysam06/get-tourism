# Refine Contact Form Consistency

The user wants to revert the "glass box" styling for the service and message sections to match the top field styles (Name, Email, Phone). Additionally, they want the submit button to match the "MORE" button style from the Home page.

## Proposed Changes

### JavaScript

#### [MODIFY] [contact.js](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/contact.js)
- Remove `dynamic-field-group` wrappers from the service selection and message sections.
- Re-add the `form-title` or simpler labels if necessary, but ensure they don't create a "box" look.
- Change the `button` structure from the complex `cta-button` to the simpler `enquire-btn` structure:
  ```html
  <button type="submit" class="enquire-btn contact-submit-new">
      <span>SEND INQUIRY</span>
      <svg class="btn-arrow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
      </svg>
  </button>
  ```

### Stylesheets

#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)
- Remove specific `dynamic-field-group` and `service-box-new` glassmorphism styles meant for the contact page if they are no longer needed.
- Ensure `form-input`, `form-select`, and `form-textarea` are used consistently for all fields.
- Style `.contact-submit-new` if it needs any special positioning (like being centered or having a larger margin), but essentially it will inherit `.enquire-btn` styles.

## Verification Plan

### Manual Verification
- Verify the contact form fields all look consistent (simple background, subtle border).
- Verify the "SEND INQUIRY" button looks like the "MORE" buttons on the Home page and has the arrow-slide animation on hover.
- Confirm form submission still works.
