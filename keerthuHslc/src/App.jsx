import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css"


function App() {
  const [score,setScore] = useState(0);
  const [ball,setBall] = useState(0);
  const [over,setOver] = useState(0);
  const [wicket,setWicket] = useState(0);
  const[message,setMessage] = useState("");

  const zeroBtn = ()=>{
    setBall(prev=>(prev + 1))
  }
  const oneBtn = ()=>{
    setBall(prev=>(prev + 1))
    setScore( prev=>(prev + 1))
  }
  const twoBtn = ()=>{
    setBall(prev=>(prev + 1))
    setScore(prev =>(prev + 2))
  }
  const threeBtn = ()=>{
    setBall(prev=>(prev + 1))
    setScore(prev =>(prev + 3))
  }
  const fourBtn = ()=>{
    setBall(prev=>(prev + 1))
    setScore(prev =>(prev + 4))
  }
  const sixBtn = ()=>{
    setBall(prev=>(prev + 1))
    setScore(prev =>(prev + 6))
  }
  const wicketBtn = ()=>{
    if(wicket>=10) return;

    setBall(prev=>(prev + 1))
    setWicket( prev =>(prev + 1))
  }

  // const wicketBtn = ()=>{
  //   if(wicket>=10) ;

  //   setBall(prev=>(prev + 1))
  //   setWicket( prev =>(prev + 1))
  // }

  useEffect(()=>{
      if(ball === 6){
        setOver(over + 1);
        setBall(0);
      }
  },[ball])

  useEffect(() => {

    if (wicket === 10) {
      setMessage("Team All Out 😒")
    }else{
      setMessage("")
    }
}, [wicket]);

//   useEffect(() => {
//   if (wicket === 10) {
//     console.log("Team All out ");
//   }
// }, [wicket]);

  // useEffect(()=>{
  //   if(wicket === 10){
  //     console.log("Team All out😒");
      
  //   }
  // },[wicket])

  return (
    <div className="container">
    <h1>Cricket Score Counter🏏</h1>
      <label htmlFor="">Score</label>
      <input type="number" value={score} /><br /><br />
      <label htmlFor="">Ball</label>
      <input type="number" value={ball}/><br /><br />
      <label htmlFor="">Over</label>
      <input type="number" value={over} /><br /><br />
      <label htmlFor="">Wicket</label>
      <input type="number" value={wicket} /><br /><br />

        
      <button onClick={zeroBtn}>0</button>
      <button onClick={oneBtn}>1</button>
      <button onClick={twoBtn}>2</button>
      <button onClick={threeBtn}>3</button>
      <button onClick={fourBtn}>4</button>
      <button onClick={sixBtn}>6</button>
      <br /><br />
      <button id="wicbtn" onClick={wicketBtn}>Wicket</button>
      <h2>{message}</h2>

    </div>
  )
}

export default App




