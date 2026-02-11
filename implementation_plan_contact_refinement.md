# Refine Contact Form Boxes and Colors

This plan aims to improve the usability and visual hierarchy of the contact form by grouping service-specific fields into distinct boxes and unifying the button color scheme.

## Proposed Changes

### Stylesheets

#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)
- Change `.form-submit-btn` background from red gradient to a professional dark blue (`#02184C`) or a matching gradient.
- Add styles for `.dynamic-field-group` to create distinct "inner boxes" within the dynamic container.
- Update `.dynamic-fields-container` to act as a wrapper for these groups.

### JavaScript

#### [MODIFY] [contact.js](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/contact.js)
- Group related fields into `div` elements with the class `dynamic-field-group`.
- For example: group "Flight Route" (From/To), "Travelers" (Adults/Children), and "Preferences" into separate styled boxes.

## Verification Plan

### Manual Verification
- Check the "Send Enquiry" button color.
- Select a service and verify that fields are organized into logical, visually distinct boxes.
- Verify mobile responsiveness of the nested boxes.
