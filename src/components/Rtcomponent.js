import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";

const Rtcomponent = () => {
  return (
   <Router>
       <Route patch="/main" element={<Main/>} />

  </Router>);
};

export default Rtcomponent;
