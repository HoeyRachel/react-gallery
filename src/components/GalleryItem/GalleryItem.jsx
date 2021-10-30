import { useState } from "react";

function GalleryItem(props){
    //const [name, setName]=useState (null);
    const [show, setShow]=useState (true);
    const toggleShow = ()=>{
        setShow(!show);
    }
    return (
        <div>
            {
                show?
                <h1 onClick={ toggleShow }>{props.imageToSend.description}</h1>:
                <h1 onClick={ toggleShow }>{props.imageToSend.id}, {props.imageToSend.path}</h1>
            
            }
        </div>
    )
}

export default GalleryItem