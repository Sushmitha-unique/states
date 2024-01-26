import React,{useState} from "react";


const Basic = () =>{

    let [a,fun] = useState(17)

  function Increase(){
    fun(a+1)
  }

    return(
        <div>
            <h1>{a}</h1>
            <button  onClick={Increase}>Increase</button>
        </div>
    )
}

export default Basic;