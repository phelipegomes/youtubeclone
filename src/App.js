import { React, useEffect, useState } from 'react';

import SearchInput from './components/SearchInput/index.js';
import ListVideos from './components/ListVideos/index.js';

import Api from './components/Api/index.js';

import './App.css';

export default function App() {

  const [videos, listVideos ] = useState([]);

  useEffect(() => {
    Api
      .list("")
      .then((response) => listVideos(response.data))
      .catch((err) => {
        console.error("Failed to get API response" + err);
      });

  }, []);

  return (
    <div className="App">
        <SearchInput />
        <ListVideos />
        
    </div>
  );
}

