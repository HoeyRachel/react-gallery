import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props){
    //const [name, setName]=useState (null);
    return (
        <div>
            <h1>GalleryList</h1>
            <p> {JSON.stringify (props)} </p>
        </div>
    )
}

export default GalleryList