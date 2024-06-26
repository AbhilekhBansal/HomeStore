import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import ProductDetails from "./components/Pages/ProductDetails";

const App = () => {
  
  return (
    <div>
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/productDetails/:id" element={<ProductDetails/>}/>
      </Routes>

      
    </div>
  );
};

export default App;
