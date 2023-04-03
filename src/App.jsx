import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Recommendation } from './components/Recommendation';
import { ExploreSea } from './components/ExploreSea';
import { Explore } from './components/Explore';
import { ExploreMountain } from './components/ExploreMountain';
import { Help } from './components/Help';

export const App = () => {
  return (
    <div className="main-container">
      <Header />
      <main>
        <Recommendation />
        <ExploreSea />
        <Explore />
        <ExploreMountain />
        <Help />
      </main>
      <Footer />
    </div>
  );
};

export default App;
