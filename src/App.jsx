import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Recommendation } from './components/Recommendation';
import { ExploreSea } from './components/ExploreSea';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Recommendation />
        <ExploreSea />
      </main>
      <Footer />
    </>
  );
};

export default App;
