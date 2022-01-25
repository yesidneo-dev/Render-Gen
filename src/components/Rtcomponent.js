import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Main from "./Main";

const Rtcomponent = () => {
  return (
    <div className="rt">
       
       <Router>
         <Routes>
           <Route path="/" element={<Main/>}/>
           <Route path="/contact" element={<Contact/>}/>
         </Routes>
       </Router>
     

    </div>

  );
};

export default Rtcomponent;
