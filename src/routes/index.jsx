import { useState } from "react";
import DataContext from "../providers/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

export default function Router() {
  const [data, setData] = useState({
    API: "http://localhost:5000",
    token: "",
    user: {},
  });
  const [idUser, setIdUser] = useState(0);

  return (
    <DataContext.Provider value={{ data, setData, idUser, setIdUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
