// import React, { useState } from 'react'

// import { useEffect } from 'react';
// import "./App.css"


// function Card() {
//     const[firstButton,setFirstButton] = useState(0);
//     const[secondButton,setSecondButton] = useState(0);
//     const[thirdButton,setThirdButton] = useState(0);
//     const[fourthButton,setFourthButton] = useState(0);
//     const[message,setMessage] = useState("");
//     const[intake,setIntake] = useState(0);
//     const[remaining,setRemaining] = useState(0);
//     const[goal,setGoal] = useState(2000);

//     const[total, setTotal] = useState(0);

//     const firstBtn = ()=>{
//         setTotal (prev =>(prev + 250))
//     }
//     const secondBtn = ()=>{
//         setTotal (prev =>(prev + 500))
//     }
//     const thirdBtn = ()=>{
//         setTotal (prev =>(prev + 750))
//     }
//     const fourthBtn = ()=>{
//         setTotal (prev =>(prev + 1000))
//     }

//     useEffect(()=>{
//       if(total >= 1500){
//         setMessage("keep it up! You're doing great!!!");
        
//       }else{
//         setMessage("");
//       }
//     },[total])

//     useEffect(()=>{
//       setIntake(total);
//     },[total])

//     useEffect(()=>{
//       setRemaining(goal - total)
//     },[goal, total])
    

//   return (
//     <div>

//         <>
//         <h1 id='title'>Water Intake Tracker</h1>
//         <h5 id='subtitle'>Stay hydrated Stay healthy!</h5>

//         <div className='container'>
          
//           <h1 id='totals'>{total}ml</h1>
//           <div className='buttons'>
//           <div className='btnone'>
//             <button onClick={firstBtn}>+250 ml</button>
//             <button onClick={secondBtn}>+500 ml</button><br></br>
//           </div>
//           <div className='btnTwo'>
//             <button onClick={thirdBtn}>+750 ml</button>
//             <button onClick={fourthBtn}>+1000 ml</button>
//           </div>
//           </div>
//         </div>
        
//         {/* <h1>{total}</h1> */}
//         <h2 id='messages'>{message}</h2>

//         <h1>Intake {intake}</h1>
//         <h1>Goal {goal}</h1>
//         <h1>Remaining:{remaining}</h1>
//         <button onClick={()=>{setTotal(0)}}>Reset</button>

         

        
//         </>
//     </div>
//   )
// }

// export default Card


import React from 'react'
import Card from './assets/components/Card'
import blush from "./assets/blush.jpg"
import brush from "./assets/brush.avif"
import brush1 from "./assets/brush1.jpg"
import cream from "./assets/cream.jpg"
import lipstick from "./assets/lipstick.jpg"
import makeup from "./assets/makeup.jpg"

import "./App.css"
function App() {
  return (
    <div>
      <>
      <div className='container'>
        
          
          <Card name="popular item" price="₹2000" image={blush} />
          <Card name="Fancy Product" price="₹1500" image={brush} /> 
          <Card name="Special item" price="₹3000" image={brush1}/>
          
        

        
          <Card name="Popular item" price="₹4000" image={cream} />
          <Card name="Sale item" price="₹3500" image={lipstick}/>
          <Card name="Fancy Product" price="₹2560" image={makeup} />
          
          
        
      </div>
      </>
    </div>
  )
}

export default App