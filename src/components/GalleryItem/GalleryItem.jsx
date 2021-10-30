import { useState } from "react";

function GalleryItem(props){
    //const [name, setName]=useState (null);
    return (
        <div>
            <h1>{props.imageToSend.description}</h1>
            <h1> {props.imageToSend.id}, {props.imageToSend.path}</h1>
            <p> {JSON.stringify (props)} </p>
        </div>
    )
}

export default GalleryItem