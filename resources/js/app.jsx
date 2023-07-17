import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<PostPage />} />
            </Routes>
        </>
    );
};
export default App;
