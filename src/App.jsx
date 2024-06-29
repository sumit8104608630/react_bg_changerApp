import { useState,useEffect } from 'react'
import './index.css'

function App() {
 const [color,setColor]=useState("red");

useEffect(()=>{
  const board=document.querySelector("#board").addEventListener("mouseenter",(e)=>{
    console.log(e.offsetX,e.offsetY);
    
    
  })
  
  console.log(board)
})

  return (
  <div id='board' className=' flex md:justify-center items-center  md:items-start w-full h-screen ' style={{backgroundColor:color}}>
    <nav className='w-max border-2 border-gray-500 h-max md:mt-8 ml-8 rounded-lg px-5 py-2 bg-white'><ul className=' md:flex '>
      <li><button  className='my-2 md:mx-2 rounded-lg px-5 py-1 font-semibold text-lg border-2 border-black text-white' onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button></li>
      <li><button  className='my-2 md:mx-2 rounded-lg px-5 py-1 font-semibold text-lg border-2 border-black text-white' onClick={()=>setColor("yellow")} style={{backgroundColor:'yellow'}}>yellow</button></li>
      <li><button  className='my-2 md:mx-2 rounded-lg px-5 py-1 font-semibold text-lg border-2 border-black text-white' onClick={()=>setColor("blue")} style={{backgroundColor:'blue'}}>blue</button></li>
      <li><button  className='my-2 md:mx-2 rounded-lg px-5 py-1 font-semibold text-lg border-2 border-black text-white' onClick={()=>setColor("orange")} style={{backgroundColor:'orange'}}>orange</button></li>
      <li><button  className='my-2 md:mx-2 rounded-lg px-5 py-1 font-semibold text-lg border-2 border-black text-white' onClick={()=>setColor("purple")} style={{backgroundColor:'purple'}}>purple</button></li>
      <li><button  className='my-2 md:mx-2 rounded-lg px-5 py-1 font-semibold text-lg border-2 border-black text-white' onClick={()=>setColor("black")} style={{backgroundColor:'black'}}>black</button></li>
      <li><button  className='my-2 md:mx-2 rounded-lg px-5 py-1 font-semibold text-lg border-2 border-black text-white' onClick={()=>setColor("aqua")} style={{backgroundColor:'aqua'}}>aqua</button></li>
    </ul></nav>
    
  </div>

  
  )
}

export default App
