import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Catalog from "../components/pages/Catalog";
import Detail from "../components/pages/detail/Detail";
import React from "react";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
    </Routes>
  );
}
