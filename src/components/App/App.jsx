import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import axios from 'axios';


function App() {
 const [galleryItems, setgalleryItems]= useState( [] );

 const [likes, setlikes]= useState( 0 );

 const addlikes = ()=>{
   setlikes (likes + 1)
 }

useEffect( ()=>{
  console.log ( 'component loaded');
  getItems();
  // putItems();
}, []);

const getItems=()=>{
 axios.get( '/gallery' ).then ((response)=>{
   console.log(response.data);
   setgalleryItems (response.data);
 }).catch((err)=>{
   console.log( err );
   alert( 'GET ERROR not happening');
 })
}
const putItems=()=>{
  axios.put( '/gallery/1' ).then ((response)=>{
    console.log('/gallery PUT:', response.data);
    setgalleryItems (response.data);
  }).catch((err)=>{
    console.log( err );
    alert( 'PUT ERROR not happening');
  })
 }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Snapshot of My Life</h1>
        </header>
        <GalleryList galleryItems={galleryItems}
        increaseLikes={addlikes} 
        />
       
          
      </div>
    );
}

export default App;
