import React from 'react';
import './css/style.css';
import './css/theme-red.css';
import HeaderComponent from './components/header';
import Intro from './components/intro';
import Search from './components/search';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Intro />
      <Search />
      {/* Other components or content can be added here */}
    </div>
  );
}

export default App;
