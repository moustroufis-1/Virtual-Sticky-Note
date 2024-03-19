# Virtual Sticky Notes

"Virtual Sticky Notes"  is a web application designed to allow users to view digital notes linked to physical books through QR codes. This README outlines the setup, usage, and QR code creation guidelines necessary for running the application effectively.

## Getting Started

### Prerequisites

- A modern web browser (e.g. the latest versions of Chrome, Firefox, Safari, or Edge). These should be able to support the `getUserMedia` API.
- HTTPS-enabled hosting for deployment, as accessing the device camera requires a secure context. 

### Local Development

For local development and testing:

- Use an HTTPS tunneling service like ngrok to expose your local server with an HTTPS URL.
- Ensure your development environment includes support for serving content over HTTPS if directly accessing hardware features during development.

## Usage

1. **Access the Application**: Navigate to the web application's URL using a compatible web browser on your device.
2. **Grant Camera Permissions**: Upon first use, the browser will prompt you to allow access to the camera. Please accept this to enable QR code scanning.
3. **Scan QR Codes**: Point your device's camera at a QR code associated with a virtual sticky note. The application will decode the QR code and display the linked note.

### Creating QR Codes

When creating QR codes for use with this application:

- Ensure that the encoded text does not exceed **150 characters** to ensure optimal scanning and display.
- Use an online QR code generator such as [QR.IO](https://qr.io/?gad_source=1&gclid=CjwKCAjwzN-vBhAkEiwAYiO7oGu7cLJefATqPL0HNl5hgDbjfshocX2MyXICBs5lMLEPyqMcRmFO6hoCsykQAvD_BwE) 

## Deployment

Deploy the application on an HTTPS-enabled server or platform. Many modern deployment platforms (e.g., Vercel, Netlify, GitHub Pages) provide HTTPS by default.

## Known Issues

- **Phone Limitations**: Due to iOS security restrictions, testing on iPhones may require additional steps, such as using a secure HTTPS connection even for local testing. Some Android devices also encounter the same issue.

