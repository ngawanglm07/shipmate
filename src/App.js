import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Shipping from "./pages/Shipping";
import Header from "./components/Header";




function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/booking" element={<Booking/>}/> 
        <Route path="/shipping" element={<Shipping/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
