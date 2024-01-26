import React,{useState} from "react";


const Object = () =>{

    let [coins,setCoins]= useState({ gold:0, silver:0 , bronze:0})

    function IncGold(){
        // setCoins({gold:coins.gold+1, silver:coins.silver , bronze:coins.bronze})
        setCoins({...coins,gold : coins.gold+1})
    }
return(
    <div>
      <h1>Gold : {coins.gold}  Silver : {coins.silver} Bronze :{ coins.bronze}</h1>
      <button onClick={IncGold}>GOLD</button>
      <button onClick={()=> setCoins({...coins,silver: coins.silver+1})}>Silver</button>
      <button onClick={()=> setCoins({...coins,bronze: coins.bronze+1})}>Bronze</button>
    </div>
)
}

export default Object;