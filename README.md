# My Portfolio

This is a personal portfolio website developed using modern web technologies to showcase projects, skills, and experience.

## Tools Used

- **React**: JavaScript library for building user interfaces
- **Styled Components**: Library for writing CSS-in-JS
- **Framer Motion**: Library for animations
- **React Scroll**: Library for smooth scrolling
- **React Intersection Observer**: Library to handle component visibility based on viewport
- **GitHub Pages**: Hosting service
- **Node.js**: JavaScript runtime environment
- **NPM**: Package manager for JavaScript

## Features

- **Interactive Background**: Animated background on the home section.
- **Smooth Scrolling**: Navigation links smoothly scroll to the corresponding sections.
- **Responsive Design**: Adapts to various screen sizes.
- **Lazy Loading**: Components are lazy-loaded for better performance.
- **Optimized Animations**: Faster animations for better user experience.

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
│   │   ├── AboutMe.js
│   │   ├── Education.js
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── InteractiveBackground.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── styles/
│   │   └── GlobalStyles.js
│   ├── assets/
│   │   └── ...
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

### About Me

- **AboutMe.js**: Section providing a brief introduction and links to social profiles.

### Education

- **Education.js**: Section displaying educational background and related images.

### Projects

- **Projects.js**: Section showcasing various projects with descriptions and technologies used.

### Skills

- **Skills.js**: Section listing different skills and technologies.

### Interactive Background

- **InteractiveBackground.js**: Component for the animated background on the home section.

## Improvements and Optimizations

- **Lazy Loading**: Components are lazy-loaded using `React.lazy` and `Suspense` to improve performance.
- **Optimized Animations**: Animations have been optimized to be faster and more responsive.
- **Responsive Design**: The design adapts to various screen sizes for a better user experience across devices.