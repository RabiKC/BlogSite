import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Blogs from "./Pages/Blog/Blogs.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
