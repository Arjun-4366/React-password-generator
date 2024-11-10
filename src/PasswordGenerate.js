import React, { useState } from 'react'
import { Container,Button ,} from 'react-bootstrap'
import { LC, NU, SY, UC } from './data/PassCodes'
function PasswordGenerate() {
    let [upper,setUpper] = useState(true)
    let [lower,setLower] = useState(true)
    let [number,setNumber] = useState(true)
    let [symbol,setSymbol] = useState(true)
    let [showPass,setShowPass] = useState()
    let [passLength,setPassLength] = useState(8)
    let [copied,setCopied] = useState(false)

  let generate = () =>{
    let charSet=''
    let finalpassWord=''
   if(upper|lower|number|symbol){
      if(upper){
       charSet+=UC
      }
      if(lower){
       charSet+=LC
      }
      if(number){
       charSet+=NU
      }
      if(symbol){
       charSet+=SY
      }
      for(let i=0;i<passLength;i++){
        finalpassWord += charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setShowPass(finalpassWord)
   }
   else{
    alert('Please Select atleast one checkbox')
   }
  }
  
  let handleCopy = ()=>{
    navigator.clipboard.writeText(showPass)
    setCopied(true)
  }
  
  return (
<>
<h1 className='mt-3'>Generate Your Password here</h1>
     <Container fluid className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
     <div className='p-5 border rounded-3' style={{width:'500px',height:'400px'}}>

     <div className='d-flex align-items-center justify-content-between ms-3 mb-2'>
        <input type="text" value={showPass}  className='fs-5' /><Button variant='light' onClick={handleCopy}>Copy</Button>{copied && <span className='text-danger'>Copied</span>}
       </div>
       <div className='d-flex align-items-center justify-content-between mt-4 ms'>
        <label htmlFor="" className='text-light'>Password Length</label>
        <input type="number" max={16} min={8}  value={passLength} onChange={(event)=>setPassLength(event.target.value)} style={{width:'60px'}}/>
       </div>
       <div className='d-flex align-items-center justify-content-between mt-4 ms'>  
        <label htmlFor="" className='text-light'>Uppercase Letter</label>
        <input type="checkbox"  style={{width:'15px'}} checked={upper} onChange={()=>setUpper(!upper)}/>
       </div>
       <div className='d-flex align-items-center justify-content-between'>
        <label htmlFor="" className='text-light'>Lowercase Letter</label>
        <input type="checkbox" style={{width:'15px'}} checked={lower} onChange={()=>setLower(!lower)}/>
       </div>
       <div className='d-flex align-items-center justify-content-between'>
        <label htmlFor="" className='text-light'>Numbers</label>
        <input type="checkbox" style={{width:'15px'}} checked={number} onChange={()=>setNumber(!number)}/>
       </div>
       <div className='d-flex align-items-center justify-content-between'>
        <label htmlFor="" className='text-light'>Symbols</label>
        <input type="checkbox" style={{width:'15px'}}  checked={symbol} onChange={()=>setSymbol(!symbol)}/>
       </div>
       <Button variant='light' className='mt-3' onClick={generate}>Generate</Button>
     </div>
  </Container> 
  </>
);
}

export default PasswordGenerate
