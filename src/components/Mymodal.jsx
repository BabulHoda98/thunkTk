import React from 'react'
import './MyModal.css'

function Mymodal({setShow,getid,data}) {

let ownData=data.filter(ele=>{
  return ele.id===getid
})

  return (
    <div className='modalback'>
      {
        ownData && ownData.map(ele=>{
return <div className='border border-4 p-4 mymodal'>
<h1>Name={ele.name}</h1>
<h1>Username ={ele.email}</h1>
<h1>Password ={ele.password}</h1>
<button className='btn btn-warning' onClick={()=>setShow(false)}>CLOSE</button>
</div>
        })
      }
        
    </div>
  )
}

export default Mymodal
