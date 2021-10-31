import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import axios from 'axios';


function App() {
 const [galleryItems, setgalleryItems]= useState( [] );//create a hook that's an empty array which will  hold 
 //image data thats received from the server

useEffect( ()=>{
  console.log ( 'component loaded');
  getItems();
  // putItems();
}, []); //add this to stop function from continously running

const getItems=()=>{ //function that gets images from the server 
 axios.get( '/gallery' ).then ((response)=>{
   console.log(response.data);
   setgalleryItems (response.data);
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
        <GalleryList galleryItems={galleryItems}
        getItems={ getItems} 
        />
       
          
      </div>
    );//mount component to DOM and send it props. passing the image array from the server and the GetItems function
}

export default App;
