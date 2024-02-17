import { Route, Routes } from "react-router-dom";
import NavbarComp from "./components/Navbar";

import AllData from './components/Alldata';
import Createdata from "./components/createdata";
import Update from "./components/Update";


function App() {
  return (
    <>

      <NavbarComp />
      <Routes>
        <Route path="/" element={<Createdata/>} />
        <Route path="/alldata" element={<AllData />} />
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </>
  )
}

export default App;
