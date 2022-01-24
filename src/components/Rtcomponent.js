import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Main from "./Main";

const Rtcomponent = () => {
  return (
    <div>
      
   <Router>
       <Routes>
         <Route patch="/" element={<Main/>} />
         <Route patch="/contact" element={<Contact/>} />
       </Routes>
  </Router>
    </div>

  );
};

export default Rtcomponent;
