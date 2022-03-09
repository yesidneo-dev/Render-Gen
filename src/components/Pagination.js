import React from 'react'

export const Pagination = ({coinPerpage,totalCoins, paginate}) => {
 const pageNumbers =[];
 for (let i= 1; i <= Math.ceil(totalCoins/coinPerpage); i++){
   pageNumbers.push(i);
 }

  return (
    <div>
      <div className='pag'>
         {pageNumbers.map(number=>(
         <li key={number} className='li-num'>
         <button onClick={() => paginate (number)}>
          {number}
         </button> 
         </li>
         ))}
      </div>
    </div>
  )
}