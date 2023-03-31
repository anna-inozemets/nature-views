import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Recommendation } from './components/Recommendation';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Recommendation />
      </main>
      <Footer />
    </>
  );
};

export default App;
