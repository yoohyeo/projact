import React from "react";

import { Routes, Route } from "react-router-dom";

import { Main, Onboarding1, Result } from "./pages";

function AppIndex() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/on1" element={<Onboarding1 />} />
      <Route exact path="/result" element={<Result />} />
    </Routes>
  );
}

export default AppIndex;
