import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nintendo from "./pages/Nintendo";
import ScottoDiCesare from "./pages/ScottoDiCesare";
import YourResto from "./pages/YourResto";
import YourBlog from "./pages/YourBlog";
import ComeUp from "./pages/ComeUp";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nintendo" element={<Nintendo />} />
          <Route path="/ScottoDiCesare" element={<ScottoDiCesare />} />
          <Route path="/YourResto" element={<YourResto />} />
          <Route path="/YourBlog" element={<YourBlog />} />
          <Route path="/ComeUp" element={<ComeUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
