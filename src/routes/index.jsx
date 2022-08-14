import { useState } from "react";
import DataContext from "../providers/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Header from "../components/Header";
import Home from "../pages/Home"
import Question from "../pages/Question"

export default function Router() {
  const [data, setData] = useState({
    API: "http://ec2-54-146-163-40.compute-1.amazonaws.com",
    token: "",
    user: {},
  });
  const [idUser, setIdUser] = useState(0);

  return (
    <DataContext.Provider value={{ data, setData, idUser, setIdUser }}>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/question/:id" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
