import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import Axios from 'axios';


function App() {
  const [ totalPics, setTotalPics ] = useState([]);

  // useEffect( ()=>{
  //   console.log( 'component loaded');
  //   galleryItems();
  // });

  // const galleryItems=()=>{
  //   Axios.get ('/galleryItems').then( (response)=>{
  //     console.log (reponse.data);
  //     setTotalPics(response.data);
  //   }).catch((err)=>{
  //     alert('not happening');
  //     console.log(err);
  //   })
  // }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Snapshot of My Heart</h1>
        </header>
        <GalleryList pics={totalPics}/>
          {/* <img src="images/Elliot.jpg"/> */}
          
      </div>
    );
}

export default App;
