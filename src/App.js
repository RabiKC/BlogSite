import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Blogs from "./Pages/Blog/Blogs.jsx";
import Profile from "./Pages/UserProfile/Profile.jsx";
import Single from "./Pages/SingleBlog/Single.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id/:userId" element={<Single />} />
          <Route path="/users/:userId/:username" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
