# Virtual Sticky Notes

"Virtual Sticky Notes" is a web application designed to allow users to view digital notes linked to physical books through QR codes. This README outlines the setup, usage, and QR code creation guidelines necessary for running the application effectively.

## Getting Started

### Prerequisites

- A modern web browser (e.g., the latest versions of Chrome, Firefox, Safari, or Edge). These should be able to support the `getUserMedia` API for camera access.

### Local Development

For local development and testing:

- Consider using an HTTPS tunneling service like [ngrok](https://ngrok.com) to expose your local server with an HTTPS URL, which is necessary for accessing hardware features like the camera in a secure context.

## Usage

1. **Access the Application**: The application is hosted and can be accessed at [https://shielded-shelf-50398-9d96ad7fe7c4.herokuapp.com](https://shielded-shelf-50398-9d96ad7fe7c4.herokuapp.com) from any compatible web browser.

2. **Grant Camera Permissions**: Upon first use, the browser will prompt you to allow access to the camera. Accept this request to enable QR code scanning functionality.

3. **Scan QR Codes**: Aim your device's camera at a QR code associated with a virtual sticky note. The application will then decode the QR code and display the associated note.

### Creating QR Codes

- Ensure that the encoded text does not exceed **150 characters** for optimal scanning and display.
- Use an online QR code generator like [QR Code Generator](https://www.qr-code-generator.com/) to create QR codes suited for this application.

## Deployment

This application is deployed on Heroku, ensuring easy access and security via HTTPS. It's designed to be accessible from both desktop and mobile devices.

## Known Issues/Future Work

- **Device Limitations**: The graphics are not optimal in some devices such as mobile phones. The code will be adjusted initially locally and then on Heroku.
