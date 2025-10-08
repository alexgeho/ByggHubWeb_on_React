// src/routes/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Hem from "../Pages/Hem";
import OmOss from "../Pages/Om_oss";
import Kontakt from "../Pages/Kontakt";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Hem />} />
            <Route path="/om_oss" element={<OmOss />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

        </Routes>
    );
}
