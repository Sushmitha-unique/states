import React,{useState} from "react";


const Counterapp = () =>{
    let [Count,setCount] = useState(0)

  function Increase(){
    setCount(Count+1)
  }

    return(
        <div>
            <h1>{Count}</h1>
            <button  onClick={Increase}>Increase</button>
            <button  onClick={()=> setCount(Count-1)}>Decrease</button>
            <button  onClick={() => setCount(0)}>Reset</button>
        </div>
    )

}

export default Counterapp;