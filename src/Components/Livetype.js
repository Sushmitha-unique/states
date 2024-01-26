import React,{useState} from "react";

const Livetype = () =>{

 let [text, setText]=useState("") 
    function livety(event){
     setText(event.target.value)
    }
    return(
        <div>
            <form>
                <input type="text"  placeholder="typing......." onChange={livety}/>
                <p>{text}</p>
            </form>
        </div>
    )
}

export default Livetype;