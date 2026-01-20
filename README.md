# Sample Frontend - React App with API Calling

A simple React application that fetches and displays user data from the JSONPlaceholder API.

## Features

- ✨ Clean and modern UI with gradient background
- 🌐 Fetches data from JSONPlaceholder API (free fake REST API)
- 📱 Responsive design that works on all devices
- 🎨 Beautiful card-based layout for displaying user information
- ⚡ Fast and lightweight

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdul1028/sample-frontend.git
cd sample-frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
To start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

### Production Build
To create a production build:
```bash
npm run build
```

The optimized build will be created in the `dist` folder.

## Project Structure

```
sample-frontend/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── index.js           # Entry point
│   ├── App.js             # Main App component with API calling
│   └── styles.css         # CSS styles
├── .babelrc               # Babel configuration
├── webpack.config.js      # Webpack configuration
├── package.json           # Project dependencies
└── README.md             # This file
```

## API Used

This application uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/), which provides fake REST API for testing and prototyping.

Endpoint used: `https://jsonplaceholder.typicode.com/users`

## What the App Does

1. Fetches user data from the JSONPlaceholder API when the page loads
2. Displays a loading state while fetching data
3. Shows user information in beautiful cards including:
   - Name and username
   - Email and phone
   - Website
   - Address details
   - Company information
4. Handles errors gracefully

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Webpack 5** - Module bundler
- **Babel** - JavaScript compiler
- **CSS3** - Styling with modern features like CSS Grid and Flexbox

## License

ISC