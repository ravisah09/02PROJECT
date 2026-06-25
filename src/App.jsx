import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Profile from "./component/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/Profile"
          element={
            <>
              <Profile />
            
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;