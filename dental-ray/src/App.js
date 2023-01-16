import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ResultPage from "./ResultPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element = {<ResultPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
