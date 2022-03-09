import React from 'react'

export default function Coins({dat}) {
    console.log(dat);
  return (
    <div className="cont-grid">
    {dat.map(user=>(
        <div className="contuser"key={user.id}>
           <div className="grid-user">
              <div className="nameuser">
               {user.name}
              </div>   
           </div>
        </div>
    ))} 
 </div>
  )
}
