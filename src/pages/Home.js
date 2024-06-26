// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import InteractiveBackground from '../components/InteractiveBackground';

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
    color: #fff;
  }
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <InteractiveBackground />
      <h1>Welcome to My Portfolio</h1>
      <p>Scroll down to learn more about me</p>
    </HomeContainer>
  );
};

export default Home;
