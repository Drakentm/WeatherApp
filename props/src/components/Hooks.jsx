import React, {useState,useReducer,useEffect,useRef } from 'react';
import axios from "axios";

export default function Hooks() {
    const [counter, setCounter]=useState(0);

    const incriment=()=>{
        setCounter(counter+1);
    }

    const [inputValue,setInputValue]=useState("Pedro");
    let onChange=(event)=>{
        const newValue=event.target.value;
        setInputValue(newValue);
    };

  return (
   
    <div>
      {/* {counter}
      <button onClick={incriment}>Increment</button> */}
      <input type="text" placeholder='Enter Something' onChange={onChange}/>
      {inputValue}
    </div>
  )
}

    const reducer=(state,action)=>{
        switch (action.type){
            case "INCREMENT":
                return {count: state.count+1,showtext: state.showtext}

            case "toggleShowText":
                return{count: state.count,showtext: !state.showtext}

            default:
                return state
        }
    };
 export function ReducerTutorial(){
    // const [count,setCount]=useState(0);
    // const [showtext,setShowText]=useState(true);

    const [state,dispatch]=useReducer(reducer,{count:0,showtext:'true'});

 return(
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{
           dispatch({type:"INCREMENT"});
            dispatch({type:"toggleShowText"});
        }}>
            Click Here
        </button>
        {state.showtext && <p>This is a Text</p>}
    </div>
 )
};


export function Effect() {
    const [data, setData] = useState("");
    const [count,setCount]=useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[400].email);
                console.log("API WAS CALLED");
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [count]); // Empty dependency array means this effect runs only once after the initial render

    return (
        <div className='ml-20 p-20 w-80  bg-yellow-500 '>
            Hello World
            <h1 className='font-bold'>{data}</h1>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }} className=''>Click ME</button>
        </div>
    );
};


export function UseReff() {

    const inputRef=useRef(null);

     const onClick=()=>{
        // console.log(inputRef.current.value);
        // inputRef.current.focus();
        inputRef.current.value="";
    }
    
    return (
        <div className=' ml-24 text-center'>
            <h1 className=' mb-4'>DRAKEN</h1>
            <input type="text" name="" placeholder='Ex..' id="" ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}