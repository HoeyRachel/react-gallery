import { useState } from "react";

function GalleryItem(props){
    //const [name, setName]=useState (null);
    const [show, setShow]=useState (true);
    const toggleShow = ()=>{
        setShow(!show);
    }
    const [likes, setlikes]= useState( 0 );
    const increaseLikes = ()=>{
        setlikes (likes + 1);
        props.increaseLikes();
    }
    return (
        <div>
            {
                show?
                <h1 onClick={ toggleShow }>{props.imageToSend.description}</h1>:
                <img src={props.imageToSend.path} onClick={toggleShow}></img>
                
            }
            <div>
             <button onClick={increaseLikes}>Love Them</button>
             <div> Total Love: {likes} </div>
             </div>
        </div>
    )
}

export default GalleryItem