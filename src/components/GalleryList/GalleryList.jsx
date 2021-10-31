import { useState } from "react";
import GalleryItem from'../GalleryItem/GalleryItem';

function GalleryList(props){
  
    
    return (
        <div>
            <h1>GalleryList</h1>
            { props.galleryItems.map( imageItem=>(<GalleryItem imageToSend={imageItem} getItems={props.getItems} />))}
            
            {/* map through the array to create item component for each object in array. Send each item component the object and the GETItems function via props */}
            
        </div>
    )
}

export default GalleryList