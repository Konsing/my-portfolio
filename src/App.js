import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import GlobalStyles from './styles/GlobalStyles';
import theme from './theme';

const App = () => {
  useEffect(() => {
    const resetScroll = () => window.scrollTo(0, 0);
    window.addEventListener('beforeunload', resetScroll);
    return () => window.removeEventListener('beforeunload', resetScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <main>
          <Home />
          <Projects />
          <Skills />
          <Education />
          <AboutMe />
        </main>
      </>
    </ThemeProvider>
  );
};

export default App;
