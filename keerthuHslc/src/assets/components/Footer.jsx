import React from 'react'

function Footer() {
  return (
    <div>
        <form>
            <label htmlFor="">Name:</label><br />
            <input type="text" /><br></br>
            <label htmlFor="">Age:</label><br />
            <input type="Number" /><br></br>
            <label htmlFor="">Gender</label><br></br>
            <input type="radio" />Male
            <input type="radio" />Female<br></br><br />
            <button>Submit</button>
            
        </form>

    
    </div>
  )
}

export default Footer