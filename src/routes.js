import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Link from "./pages/Links";
import Error from "./pages/Error";


function RoutesApp() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/links" element={<Link/>}/>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default RoutesApp;
