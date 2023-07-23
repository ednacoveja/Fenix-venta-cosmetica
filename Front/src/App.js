import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing.jsx";
import Carrito from "./components/Carrito.jsx";
import Products from "./components/Products.jsx";
import Admin from "./components/Admin.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Products />}/> 
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin" element={<Admin />}/> 
        <Route path="/signin" element={<SignIn />}/> 
        <Route path="/signup" element={<SignUp />}/> 
      </Routes>
    </div>
  );
}

export default App;
