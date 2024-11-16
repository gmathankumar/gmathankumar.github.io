import React from 'react';
import Profile from './components/Profile';
import Card from './components/Card';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { affiliateData } from './models/data';
import './styles/main.scss';

const App = () => {

  return (
    <div className="container">
      <Profile />
      <div className="cards-grid">
        {affiliateData.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;