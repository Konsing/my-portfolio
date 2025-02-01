
---

# **🌐 My Portfolio**  
A personal portfolio website built with modern web technologies to showcase **projects, skills, and experience** in an interactive and visually appealing way.

---

## **🛠️ Technologies Used**  

| **Technology** | **Purpose** |
|--------------|------------|
| **React** | Component-based UI library for building interactive web apps |
| **Styled Components** | CSS-in-JS for modular and dynamic styling |
| **Framer Motion** | Library for smooth animations and UI transitions |
| **React Scroll** | Enables smooth scrolling between sections |
| **React Intersection Observer** | Handles animations and lazy loading based on viewport |
| **GitHub Pages** | Used for deployment and hosting |
| **Node.js** | JavaScript runtime for development environment |
| **NPM** | Package manager for dependency management |

---

## **🌟 Features**  

✅ **🌌 Interactive Background** – Engaging animations enhance the home section.  
✅ **🖱️ Smooth Navigation** – Scroll seamlessly between sections with React Scroll.  
✅ **📱 Responsive Design** – Fully optimized for all screen sizes.  
✅ **⚡ Lazy Loading** – Faster performance with optimized component loading.  
✅ **🎭 Optimized Animations** – Framer Motion ensures smooth transitions and interactions.  

---

### **🔹 Install Dependencies**  
```sh
npm install
```

---

## **🚀 Usage**  

### **🔹 Start the Development Server**  
```sh
npm start
```
🔹 The site will be available at **`http://localhost:3000`**.

### **🔹 Build for Production**  
```sh
npm run build
```
🔹 This creates a **`build/`** directory with the production-ready site.

### **🔹 Deploy to GitHub Pages**  
```sh
npm run deploy
```
🔹 Automatically deploys the portfolio to **GitHub Pages**.

---

## **📁 Project Structure**  

```
my-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AboutMe.js          # About section with introduction and links
│   │   ├── Education.js        # Displays education history
│   │   ├── Header.js           # Navigation bar and site menu
│   │   ├── Home.js             # Main landing page with background animations
│   │   ├── InteractiveBackground.js  # Animations for dynamic background
│   │   ├── Projects.js         # Project showcase section
│   │   └── Skills.js           # Skills listing
│   ├── styles/
│   │   └── GlobalStyles.js     # Global styling and typography settings
│   ├── assets/                 # Images and other static assets
│   ├── App.js                  # Root component
│   ├── index.js                # Entry point for React
│   └── reportWebVitals.js      # Performance monitoring
├── .gitignore
├── package.json
└── README.md
```

---

## **🧩 Component Breakdown**  

### **🏡 Home (`Home.js`)**  
- Displays **introductory content** and an **animated background**.  

### **📝 About Me (`AboutMe.js`)**  
- Includes a **brief introduction** and **links to GitHub, LinkedIn, and Email**.  

### **🎓 Education (`Education.js`)**  
- Showcases **academic background** with images and animations.  

### **🚀 Projects (`Projects.js`)**  
- Highlights **personal and professional projects**, including descriptions, technologies, and GitHub links.  

### **🛠️ Skills (`Skills.js`)**  
- Lists **technologies and tools** used throughout projects.  

### **🎨 Global Styles (`GlobalStyles.js`)**  
- Defines **typography**, **global themes**, and **responsive settings**.

---

## **📈 Performance Optimizations**  

⚡ **Lazy Loading** – Uses `React.lazy` and `Suspense` to improve load times.  
🎬 **Smooth Animations** – `Framer Motion` ensures UI transitions are fluid.  
📱 **Fully Responsive** – Adjusts seamlessly to different devices and screen sizes.  

---
