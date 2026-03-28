# Taste of Italy - React Website

A modern, responsive React website for an Italian restaurant built with Vite and React.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Stack**: Built with Vite, React 18, and modern JavaScript
- **Italian Theme**: Beautiful green and gold color scheme inspired by Italian culture
- **Interactive Components**: Counter component and navigation links
- **Component-based**: Easy to extend and customize

## Project Structure

```
taste-of-italy/
├── src/
│   ├── main.jsx          # React app entry point
│   ├── App.jsx           # Main App component
│   ├── App.css           # App component styles
│   ├── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── .eslintrc.json        # ESLint configuration
└── README.md             # This file
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd taste-of-italy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will automatically open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## Customization

### Colors
The website uses these primary colors:
- Dark Green: `#1a472a`
- Gold: `#d4a574`
- Light Cream: `#f4e4c1`
- Background: `#f5f1e8`

Edit `src/App.css` to change the color scheme.

### Content
Edit `src/App.jsx` to:
- Change restaurant name and description
- Add or remove menu items
- Modify navigation links
- Update social media links

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Feel free to fork this project and submit pull requests with improvements!

---

Enjoy building your Italian restaurant website! 🍝
