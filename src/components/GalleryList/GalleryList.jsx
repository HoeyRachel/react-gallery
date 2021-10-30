import { useState } from "react";
import GalleryItem from'../GalleryItem/GalleryItem';

function GalleryList(props){
    //const [name, setName]=useState (null);
    return (
        <div>
            <h1>GalleryList</h1>
            { props.galleryItems.map( imageItem=>(<GalleryItem imageToSend={imageItem}/>))}
            
        </div>
    )
}

export default GalleryList