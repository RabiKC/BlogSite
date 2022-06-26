import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
// import Blogs from "./Pages/Blog/Blogs.jsx";
import Profile from "./Pages/UserProfile/Profile.jsx";
// import Single from "./Pages/SingleBlog/Single.jsx";
import { SpinnerCircularFixed } from "spinners-react";
import { DataProvider } from "./Context/DataContext";

const Home = React.lazy(() => import("./Pages/Home/Home.jsx"));
const Blogs = React.lazy(() => import("./Pages/Blog/Blogs.jsx"));
const Single = React.lazy(() => import("./Pages/SingleBlog/Single.jsx"));

function App() {
  const loader = () => {
    return (
      <div className="loading-section">
        <SpinnerCircularFixed
          size={68}
          thickness={136}
          speed={139}
          color="rgba(58, 123, 153, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );
  };
  return (
    <div className="App">
      <Router>
        <DataProvider>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <React.Suspense fallback={loader()}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/blogs/:id/:userId"
              element={
                <React.Suspense fallback={loader()}>
                  <Single />
                </React.Suspense>
              }
            />
            <Route path="/users/:userId/:username" element={<Profile />} />
          </Routes>
        </DataProvider>
      </Router>
    </div>
  );
}

export default App;
