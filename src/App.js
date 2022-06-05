
import Navbar from "./component/Navbar";
//import NotFound from "./components/NotFound";
import HomePage from "./component/HomePage"

// you can change the BrowserRouter name to Router (optional)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
       <Navbar/>
        <Routes>
          {/* <Route path="*" element={<NotFound/>} /> */}
          <Route path="/" element={<HomePage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
