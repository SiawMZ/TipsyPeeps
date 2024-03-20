import MainPage from "./pages/mainPage";
import Navbar from "./pages/navbar";
import { LoginSignup } from "./pages/loginSignup";
import { Register } from "./pages/register";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
