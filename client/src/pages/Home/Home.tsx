import React from 'react';
import Banner from './Banner/Banner';
import Specials from './Specials/Specials';
import About from './About/About';
import Products from './Products/Products';
import Testimonials from './Testimonials/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <Banner />
      <Specials />
      <About />
      <Products />
      <Testimonials />
    </main>
  );
};

export default Home;
