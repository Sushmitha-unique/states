import React,{useState} from "react";

const Fruit = () =>{

    const [fruit, setfruit]=useState(["apple","banana","orange"])
    const [addfruit, setaddfruit]=useState("")
    function Add(event)
    {
      setaddfruit(event.target.value)
    }
    function final(event){
      event.preventDefault();
       setfruit([...fruit,addfruit])
       setaddfruit("")
    }
return (
    <div>
          <form onSubmit={final}>
            <input  type="text"  placeholder="enter fruit"  onChange={Add} value={addfruit} />
            <button type="submit">Submit</button>
          </form>
          {<ol>
          {
           fruit.map((item,index) =>(
            <li key={index}>{item}</li>
            )
           )
          }
          </ol>}
    </div>
)
}
export default Fruit;