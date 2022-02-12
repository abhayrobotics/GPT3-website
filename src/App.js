import React from 'react';

// * Importing small component/ section  from other folders 
import {Footer, Blog, Possibilty, Features, Header, WhatGPT3 } from './containers'
import {CTA, Brand, Navbar, Article,Feature} from './components'

// *CSS files
import './index.css'
import './App.css'

// * Main App
const App = () => {
  return (
     <div className="App">
       <div className="gradient__bg">
         <Navbar />
         <Header />
      
       </div>
       <Brand />
       <Features />
       <Possibilty />
       <WhatGPT3 />
       <CTA />
       <Blog />
       <Footer />
     </div>
  );
};

export default App;
