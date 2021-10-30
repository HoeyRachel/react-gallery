import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import axios from 'axios';


function App() {
  const galleryItems = [
    {
    id: 1, 
    path: 'images/Lucas.jpg', 
    description: 'First Little.', 
    likes: 0
  },
  { id: 2, 
    path: 'images/Elliot.jpg', 
    description: 'Second Little.', 
    likes: 0 
  },
]
const getItems=()=>{
 axios.get( '/gallery' ).then ((response)=>{
   console.log(response);
 }).catch((err)=>{
   console.log( err );
   alert( 'GET ERROR not happening');
 })
}
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Snapshot of My Life</h1>
        </header>
        <button onClick={getItems}>Test</button>
        <GalleryList galleryItems={galleryItems}/>
       
          
      </div>
    );
}

export default App;
