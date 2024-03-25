import MainPage from "./pages/mainPage";
import Navbar from "./pages/navbar";
import { LoginSignup } from "./pages/loginSignup";
import { Register } from "./pages/register";
import { Community } from "./pages/create-post/community";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="signup" element={<LoginSignup />} />
          <Route path="register" element={<Register />} />
          <Route path="community" element={<Community />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
