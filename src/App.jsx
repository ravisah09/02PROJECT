import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Profile from "./component/Profile";
import EditProfile from "./component/EditProfile";

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
          element={<Profile />}
        />

        <Route
          path="/edit-profile"
          element={<EditProfile />}
        />
      </Routes>
    </>
  );
}

export default App;