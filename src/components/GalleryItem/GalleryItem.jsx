import { useState } from "react";

function GalleryItem(props){
    //const [name, setName]=useState (null);
    const [show, setShow]=useState (true);
    const toggleShow = () =>{
        setShow(!show);
    }
    return (
        <div>
            {
                show?
                <h1 onClick={ toggleShow }>{props.item.id}, {props.items.path}</h1>:
                <h1 onClick={ toggleShow }>{props.item.description},{props.item.likes} </h1>

            }
        </div>
    )
}

export default GalleryItem