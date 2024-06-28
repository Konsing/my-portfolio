import React, { useEffect } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  useEffect(() => {
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Home />
        <Education />
        <Projects />
        <Skills />
        <AboutMe />
      </main>
    </>
  );
};

export default App;
