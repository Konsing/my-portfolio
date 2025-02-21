// App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import GlobalStyles from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './theme';

const App = () => {
  useEffect(() => {
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }, []);

  // Dark mode is the default
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () =>
    setTheme(prevTheme => (prevTheme === darkTheme ? lightTheme : darkTheme));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} isDarkMode={theme === darkTheme} />
        <main>
          <Home toggleTheme={toggleTheme} />
          <Education />
          <Projects />
          <Skills />
          <AboutMe />
        </main>
      </>
    </ThemeProvider>
  );
};

export default App;
