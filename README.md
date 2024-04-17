# K-MART React Native Expo Installation Guide

This guide provides step-by-step instructions to set up the development environment for the K-MART project using React Native Expo.

## Prerequisites

Before proceeding with the installation, ensure that you have the following prerequisites installed on your system:

- Node.js
- npm (Node Package Manager)

## Installation Process

### 1. Node.js Installation and Setup

1. **Download Node.js:**
   - Visit the [official Node.js website](https://nodejs.org/) and download the latest version of Node.js for your operating system.

2. **Install Node.js:**
   - Follow the installation instructions provided on the Node.js website for your specific operating system.

3. **Verify Installation:**
   - After the installation is complete, open a terminal or command prompt.
   - Run the following commands to verify that Node.js and npm are installed correctly:
     ```
     node -v
     npm -v
     ```
   - These commands should display the installed version of Node.js and npm respectively.

### 2. React Native Expo Installation

1. **Install Expo CLI:**
   - Open a terminal or command prompt.
   - Run the following command to install Expo CLI globally:
     ```
     npm install -g expo-cli
     ```

### 3. Node Module Installation

1. **Install Node Modules:**
   - Navigate to your project directory in the terminal.
   - Run the following command to install the required Node modules:
     ```
     npm install
     ```

### 4. React Navigation Installation and Setup

1. **Install React Navigation:**
   - Run the following command in your project directory:
     ```
     npm install @react-navigation/native
     ```

2. **Install Dependencies:**
   - Follow the instructions provided in the [React Navigation documentation](https://reactnavigation.org/docs/getting-started) to install the necessary dependencies for your chosen navigation method (stack, tab, drawer, etc.).

### 5. Native Wind Installation for Expo

1. **Install Native Wind:**
   - Run the following command in your project directory:
     ```
     expo install react-native-native-wind
     ```

### 6. Running Expo App

1. **Start the Development Server:**
   - Navigate to your project directory in the terminal.
   - Run the following command to start the Expo development server:
     ```
     npm expo start
     ```

2. **Run on Device or Simulator:**
   - Follow the instructions printed in the terminal to run the app on your device or simulator.

### 7. Downloading Expo App on Mobile

1. **Download Expo Client:**
   - Install the Expo Client app on your iOS or Android device from the [App Store](https://apps.apple.com/us/app/expo-go/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).

2. **Scan QR Code:**
   - Once the Expo development server is running, use the Expo Client app to scan the QR code displayed in the terminal to open your app on your mobile device.

## Additional Resources

- [Node.js Official Website](https://nodejs.org/)
- [React Native Expo Documentation](https://reactnative.dev/docs/environment-setup)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [Native Wind](https://www.nativewind.dev/quick-starts/expo)

```
eas build --profile development --platform android
```

