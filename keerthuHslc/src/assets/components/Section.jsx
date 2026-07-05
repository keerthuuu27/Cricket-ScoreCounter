import React from 'react'
import Header from './Header';
function Section({onClick}) {

  
  // const {name,age} = props;
  return (
    // <div>
    //   {/* <h1>This is section page</h1>
    //   <h1>User name:{name} <br></br>user age:{age}</h1> */}
    //   <Header onClick={onClick}/>


    // </div>
    <>
      <div>
        <button onClick={onClick}>Ithu section button</button>
      </div>
    </>
  )
}

export default Section



// import React from 'react'

// function Section(props) {
//   const {name,age} = props;
//   return (
//     <div>
//       <h1>This is section page!!!!</h1>
//       <h1>User Name:{name}<br></br>User Age:{age} </h1>
//     </div>
//   )
// }

// export default Section