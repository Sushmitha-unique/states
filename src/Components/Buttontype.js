import react,{useState} from "react";

const Buttontype =() =>{

    let [text, setText]=useState("") 
    const [btnclick, setbtnclick] = useState("")
    function HandleSubmit(event){
        event.preventDefault();
        setbtnclick(text)
        setText("")
    }
    return(
        <div>
            <form onSubmit={HandleSubmit} >
                <input type="text"  placeholder="typing......." onChange={(event) => {setText(event.target.value)
             setbtnclick("")    
            }}
                value ={text} />
                <button type="submit">Submit</button>
                
            </form>
            <p>{btnclick}</p>
        </div>
    )
}
export default Buttontype;