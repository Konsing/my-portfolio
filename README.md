## Tech Stack

- **React**: JavaScript library for building user interfaces
- **Styled Components**: Library for writing CSS-in-JS
- **Framer Motion**: Library for animations
- **React Scroll**: Library for smooth scrolling
- **GitHub Pages**: Hosting service

## Features

- **Interactive Background**: Animated background on the home section.
- **Smooth Scrolling**: Navigation links smoothly scroll to the corresponding sections.
- **Responsive Design**: Adapts to various screen sizes.

## Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Konsing/my-portfolio.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd my-portfolio
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```

## Usage

1. **Start the development server**:
   ```sh
   npm start
   ```
   The site will be available at `http://localhost:3000`.

2. **Build the project**:
   ```sh
   npm run build
   ```
   This will create a `build` directory with the production build of the site.

3. **Deploy to GitHub Pages**:
   ```sh
   npm run deploy
   ```
   This will deploy the site to GitHub Pages.

## Project Structure

```
my-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ContactForm.js
│   │   ├── Education.js
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── InteractiveBackground.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   ├── styles/
│   │   └── GlobalStyles.js
│   ├── App.js
│   ├── index.js
│   └── reportWebVitals.js
├── .gitignore
├── package.json
└── README.md
```

## Components

### Home

- **Home.js**: Displays the home section with an interactive background and welcome text.

### Global Styles

- **GlobalStyles.js**: Defines global CSS rules and styles for the application.

### Header

- **Header.js**: Contains the navigation bar with links to different sections of the site.