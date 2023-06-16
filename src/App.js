import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./component/UserForm";
import Header from "./component/Header";
import UserTable from "./component/UserTable";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<UserForm />}></Route>
          <Route path="/table" element={<UserTable />}></Route>
        </Routes>
    
    </BrowserRouter>
  );
};

export default App;
