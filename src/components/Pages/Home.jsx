import { useEffect, useState } from "react";
import Header from "../layout/Header";
import Product from "./Product";

const Home = () => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetchproducts();
  }, []);

  const fetchproducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setproducts(data);
    } catch (error) {
      console.log("-> ", error);
    }
  };


  return (
    <div>
      <Header />
      <body className="flex justify-center max-w-dvh">
        <div className="container w-full mt-6 p-6 flex justify-center flex-wrap">
          {products &&
            products.map((item) => <Product item={item} key={item.id} />)}
        </div>
      </body>
    </div>
  );
};

export default Home;
