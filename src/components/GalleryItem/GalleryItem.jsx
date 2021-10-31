import axios from 'axios';
import { useState } from "react";




function GalleryItem(props){
    //const [name, setName]=useState (null);
    const [show, setShow]=useState (true); //create a hook to use to toggle the image
    const toggleShow = ()=>{//create a function to toggle the image
        setShow(!show);
    }
 

    const updateLikes=()=>{//make axios PUT request, adds like each time button clicked. Logic in server
        console.log('in updateLikes');
        axios.put( `/gallery/like/ ${props.imageToSend.id}`).then ((response)=>{
          console.log(response.data);
          props.getItems(); //call the GetItems function to update components info when button is clicked
        }).catch((err)=>{
          console.log( err );
          alert( 'PUT ERROR not happening');
        })
       }
    

   
    return (
        <div>
            {
                show?
                <h1 onClick={ toggleShow }>{props.imageToSend.description}</h1>:
                <img className ="img" onClick={toggleShow} src={props.imageToSend.path} ></img>
                
            }
            <div>
             <button onClick={updateLikes}>Love Them</button>
             <div> Total Love: {props.imageToSend.likes} </div>
             </div>
        </div>
    ) //conditional rendering to switch between photo and description.
    //also contains function that updates the likes
}

export default GalleryItem