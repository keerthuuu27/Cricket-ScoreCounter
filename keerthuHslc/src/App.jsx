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



// TASK NO:12
// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [mail,setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [validation , setValidation] = useState("");
  
//   const handleClick = ()=>{
//     if(mail ==="" || password===""){
//       console.log("This is Empty");
      
//     }else if(!mail.includes("@") || !mail.includes(".com")){
//       console.log("Invalid mail");
      
//     }else if(password.length < 6 ){
//       console.log("Password must be atleast 6 characters");
      
//     }else{
//       console.log("Login successful");
      
//     }
//   }
//   return (
//     <div>
//       <>
//       <input type="text" placeholder='Enter Email' onChange={(event)=>setEmail(event.target.value)}/>
//       <br /><br />
//       <input type="password"  placeholder='Enter Password' onChange={(event) =>setPassword(event.target.value)} />
//       <button onClick={handleClick}>Login</button>
//       <h1>{validation}</h1>


//       </>
//     </div>
//   )
// }

// export default App



// TASK NO:11
// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [tamil,setTamil] = useState(90);
//   const [english,setEnglish] = useState(80);
//   const [maths,setMaths] = useState(99);
//   const [science,setScience] = useState(78);
//   const [social,setSocial] = useState(93);

//   const total = tamil + english+ maths+ science+ social ;
//   const average = total/5 ;

//   let grade = "";
//   if (average >=90){
//     grade="A";
//   }else if (average >=80){
//     grade="B";

//   }else if(average >= 65){
//     grade ="C";

//   }else if(average>=50){
//     grade="D";
//   }else{
//     grade="Fail"
//   }

//   return (
//     <div>
//       <>
       
//        <h1>Total:{total}</h1>
//        <h1>Average:{average}</h1>
//        <h1>Grade:{grade}</h1>
//       </>
//     </div>
//   )
// }

// export default App

// TASK NO:9
// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const[age,setAge] = useState(18);
//   const handleClick = ()=>{
//     setAge(age + 1)
//   }
//   const decreaseAge = ()=>{
//     setAge(age - 1)
//   }
//   return (
//     <div>
//       <>
        
//         <h1>Your Age: {age}</h1>
//         <h2>you are :{age>=18 ? "Major" : "Minor"}</h2>
//         <button onClick={handleClick}>Increase</button><button onClick={decreaseAge}>Decrease</button>
//       </>
//     </div>
//   )
// }

// export default App

// TASK N0:7
// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const [theme,setTheme] = useState("light")
//   const handleClick = ()=>{
//       setTheme("light");
//   }
//   const darkThemes =()=>{
//     setTheme("dark");
//   }
//   return (
//     <div>
//       <>
//        <button onClick={handleClick} style={{  backgroundColor: theme ==="light" ? "white" : "black", color:theme==="light" ? "black":"white", height:"50vh",width:"50vw"  }}>Light Theme🌞</button>
//        <button onClick={darkThemes} style={{backgroundColor : theme==="dark" ? "black" : "white", color:theme==="dark"? "white":"black" ,height:"50vh", width:"50vw"}}>Dark Theme🌙</button>
//       </>
//     </div>
//   )
// }

// export default App

// task n0:6
// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const [likes, setLike] = useState(0);
//   const handleClick = ()=>{
//     setLike(likes + 1)
//   }
//   return (
//     <div>
//       <>
//         <h1>❤️ {likes}</h1>
//         <button onClick={handleClick}> ❤️ like</button>

//       </>
//     </div>
//   )
// }

// export default App


// // TASK NO 1:
// import React, { useState } from 'react'

// function App() {
//   const [num,setNum] = useState(15);
//   const handleClick = ()=>{
//     setNum(num + 1)
//   }
//   const decreaseNum = ()=>{
//     setNum(num - 1)
//   }
//   const resetBtn = ()=>{
//     setNum(0)
//   }
//   return (
//     <div>
//       <>
//       <h1>Current Value:{num}</h1>
//       <button onClick={handleClick}> + Button </button>
//       <button onClick={decreaseNum}> - Button</button>
//       <button onClick={resetBtn}>ResetBtn</button>
//       </>
//     </div>
//   )
// }

// export default App






// //TASK NO: 5
// import React from 'react'
// import { useState } from 'react'
// function App() {
//   const[password, setPassword] = useState(false)
//   return (
//     <div>
//       <>
//         <input type={password ? "text":"password"} />
        
//         <label htmlFor="">Enter password</label>
//         <input type="checkbox" checked={password} onChange={(event)=>{
//           setPassword (event.target.checked)
//         }} />
        
//       </>
//     </div>
//   )
// }

// export default App

// //TASK NO:4
// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const [bgColor,setBgcolor] = useState("white");
//   const changeColour =()=>{
//     setBgcolor("yellow");
//   }
//   return (
//     <div style={{backgroundColor: bgColor, height:"100vh" , width:"100vw"}}>
//       <>
//       <h1>Change Background Colour</h1>
//       <button onClick={changeColour}>change colour</button>
//       </>
//     </div>
//   )
// }

// export default App



// TASK NO:2
// import './App.css'
// import { useState } from 'react'
// function App() {
//   const [name,setName] = useState("")
//   return(
//     <>
//       <label htmlFor="">Enter Name:</label>
//       <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
//       <h1>hello {name}</h1>
//     </>
//   )
// }

// export default App









// import React from 'react'
// import Section from './assets/components/Section'
// import Button from './assets/components/Button'
// function App() {
//   // const uname = "Keerthana"
//   // const uage = "20"

//   function handleClick(){
//     alert("Enna click pannita....")
//   } 
//   return (
//     <>
//       {/* <Section name={uname} age={uage}/> */}
//       {/* <Button>I AM PARENT</Button> */}

//       <Section onClick={handleClick}/>

//     </>
//     // <Section onClick={handleClick}/>
//   )
// }

// export default App


// import React from 'react'
// import Section from './assets/components/Section'
// function App() {
//   const uname = "Keerthu"
//   const uage ="20"
//   // const {name,age} = props;
//   return (
    
//     <>
      

//       <Section name={uname} age={uage}/>
//     </>
//   )
// }

// export default App



// import Header from './assets/components/Header'
// import Section from './assets/components/Section'

// import Footer from './assets/components/Footer'
// import './App.css'

// function App() {
  

//   return (
//     // //      </tr>
//     // //   //    {/* <tr>
//     // //   //     <td>6</td>
//     // //   //     <td>Zoology</td>
//     // //   //     <td>97</td>
//     // //   //    </tr>
//     // //   //   </tbody>
//     // //   //   <tfoot>
//     // //   //     <tr>
//     // //   //       <td colspan="2">Total</td>
//     // //   //       <td>583</td>
//     // //   //     </tr>
//     // //   //   </tfoot>
//     // //   // // </table> */}



//     // //       </h1>
//     // // </>
//     // <>
//     //   </h1>
    
//     // </>/ <>
//     // // //   <table border="5">
//     // // //     <caption>KEERTHU HSLC MARK LIST</caption>
//     // // //     <thead>
//     // // //       <tr>
//     // // //         <th> S.NO</th>
//     // // //         <th>SUBJECT</th>
//     // // //         <th>MARK</th>
//     // // //       </tr>
//     // // //     </thead>
//     // // //     <tbody>
//     // // //       <tr>
//     // // //         <td>1</td>
//     // // //         <td>Tamil</td>
//     // // //         <td>98</td>
//     // // //       </tr>
//     // // //       <tr>
//     // // //         <td>2</td>
//     // // //         <td>English</td>
//     // // //         <td>97</td>

//     // // //      </tr>
//     // // //      <tr>
//     // // //       <td>3</td>
//     // // //       <td>Maths</td>
//     // // //       <td>100</td>
//     // // //      </tr>
//     // // //      <tr>
//     // // //       <td>4</td>
//     // // //       <td>Chemistry</td>
//     // // //       <td>95</td>
//     // // //      </tr>
//     // // //      <tr>
//     // // //       <td>5</td>
//     // // //       <td>Botony</td>
//     // // //       <td>96</td>
//     // // /

//     <>
//       <Header/>
//       <Section/>
//       <Footer/>
//     </>
//   )
// }

// export default App
