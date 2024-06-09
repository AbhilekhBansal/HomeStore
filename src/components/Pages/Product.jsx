import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="card border-2 m-2 p-4 " key={item.id}>
      <div className="w-[6rem] h-[10rem] m-auto">
        <Link to={`/productDetails/${item.id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain object-center"
          />
        </Link>
      </div>
      <div className="h-14">
        <Link to={`/productDetails/${item.id}`}>
          <h3>
            {item.title.length > 20
              ? item.title.slice(0, 40) + " ..."
              : item.title.slice(0, 40)}
          </h3>
        </Link>
      </div>
      <div className="">
        <div className="">
          <span>
            Price -{" "}
            <span className="text-green-600 font-bold">₹{item.price}</span>
          </span>
        </div>
        <div className="text-left">
          Rating - <span>{item.rating.rate}</span>({item.rating.count})
        </div>
      </div>
    </div>
  );
};

export default Product;
