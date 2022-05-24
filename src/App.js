
import Nav from "./component/Navbar";
//import NotFound from "./components/NotFound";
import Home from "./component/Home"

// you can change the BrowserRouter name to Router (optional)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          {/* <Route path="*" element={<NotFound/>} /> */}
          <Route path="/" element={<Home/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
