import React from 'react';

import SearchInput from './components/SearchInput/index.js';
import ListVideos from './components/ListVideos/index.js';

import './App.css';

export default function App() {

  return (
    <div className="App">
      
        <SearchInput />
        <ListVideos />
        
    </div>
  );
}

