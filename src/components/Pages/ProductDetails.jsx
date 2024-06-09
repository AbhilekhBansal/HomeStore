import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id)

  const [product, setproduct] = useState({});

  useEffect(() => {
    fetchproducts();
  }, []);

  const fetchproducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data);
      console.log('id',id)
      console.log('data',data)
      setproduct(data.filter((item) => item.id == id)[0]);
    } catch (error) {
      console.log("-> ", error);
    }
  };

  console.log(product);

  return (
    <>
      <Header />
      <div className="flex font-sans w-full p-12 m-auto shadow rounded-lg">
        <div className="flex-none w-96 h-60 relative">
          <img src={product?.image} alt="" loading="lazy" className="w-full h-full object-contain object-center"/>
        </div>
        <div className="flex-none w-full h-60 p-8">
          <h4 className="size">{product?.title}</h4>
          <div className="">
            <p>
              Price - <span>{product?.price}</span>
            </p>
            <span>{product?.rating?.rate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
