// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>About Me</h2>
          <p>Information about me.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Details of my projects.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;