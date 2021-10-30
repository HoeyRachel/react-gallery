import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import axios from 'axios';


function App() {
  const galleryItems = [{
    id: 1, 
    path: 'images/Lucas.jpg', 
    description: 'First Little.', 
    likes: 0
  }]
 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Snapshot of My Life</h1>
        </header>
        <GalleryList galleryItems={galleryItems}/>
       
          
      </div>
    );
}

export default App;
