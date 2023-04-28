import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing.jsx";
import Carrito from "./components/Carrito.jsx";
import Products from "./components/Products.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Products />}/> 
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;
