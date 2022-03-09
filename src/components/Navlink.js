import React from 'react';
import { Link } from 'react-router-dom';

export const Navlink = () => {
  return (
  <div>
   <container>
     <nav>
       <Link to="/">
         Home
       </Link>
     </nav>
   </container>
   <container>
     <nav>
       <Link to="/">
         Home
       </Link>
     </nav> 
   </container>
  </div>
 );
};
