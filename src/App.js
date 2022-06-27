import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SpinnerCircularFixed } from "spinners-react";
import { DataProvider } from "./Context/DataContext";

import Navbar from "./Components/Navbar/Navbar.jsx";
const Home = React.lazy(() => import("./Pages/Home/Home.jsx"));
const Blogs = React.lazy(() => import("./Pages/Blog/Blogs.jsx"));
const Single = React.lazy(() => import("./Pages/SingleBlog/Single.jsx"));
const Profile = React.lazy(() => import("./Pages/UserProfile/Profile.jsx"));

function App() {
  const loader = () => {
    return (
      <div className="loading-section">
        {/* <SpinnerCircularFixed
          size={68}
          thickness={136}
          speed={139}
          color="rgba(58, 123, 153, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        /> */}
        <h1>Loading...</h1>
      </div>
    );
  };
  return (
    <div className="App">
      <Router>
        {/* <DataProvider> */}
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
          <Route
            path="/blogs"
            element={
              <React.Suspense fallback={loader()}>
                <Blogs />
              </React.Suspense>
            }
          />
          <Route
            path="/blogs/:id/:userId"
            element={
              <React.Suspense fallback={loader()}>
                <Single />
              </React.Suspense>
            }
          />
          <Route
            path="/users/:userId/:username"
            element={
              <React.Suspense fallback={loader()}>
                <Profile />
              </React.Suspense>
            }
          />
        </Routes>
        {/* </DataProvider> */}
      </Router>
    </div>
  );
}

export default App;
