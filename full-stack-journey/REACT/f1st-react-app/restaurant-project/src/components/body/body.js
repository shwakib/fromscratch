import React from "react";
import Menus from "./Menus";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { Route, Navigate, Routes } from "react-router-dom";

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menus />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/about" exact element={<About />} />
                <Route
                    path="/"
                    element={<Navigate to="/home" replace />}
                />
            </Routes>
        </div>
    )
}

export default Body;