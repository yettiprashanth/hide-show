import React,{useState} from 'react'
import image1 from "./images/image1.jpg"
import './App.css';
function Hide() {
    const [show,setShow]=useState(true);
  return (
    <>
      <div className="container">
      <h1 className='text-center '>hide & show project</h1>
      <hr />
      <button type="button" className='btn btn-outline-primary d-flex justify-content-center mx-auto' onClick={()=>setShow(!show)}>{show===true ? "Hide": "show"}</button>
      
      {show && <div className='card1 d-flex justify-content-center mt-5' >
        <div >
        <img src={image1} className='card-img' alt=""/>
        </div>
      </div>
      }
      
    
      </div> 
    </>
  )
}

export default Hide
