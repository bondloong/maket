import React from 'react';

import Content from './components/content/content'
import Head from './components/head/head'
import Footer from './components/footer/footer'

import './App.css';

function App() {
  return (
    <div className="Wrapper">
      <Head />
      <hr />
      <Content />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
