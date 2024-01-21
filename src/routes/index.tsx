import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register-page/Register-Page";
import { Recover } from "../pages/RecoverPassword-Page/Recover-Page";
import { Login } from "../pages/Login-Page/LoginPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
      </Routes>
    </Router>
  );
};
