import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loaders from "./Loaders";

const Order = () => {
  let [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/pizzas/order")
      .then((res) => {
        console.log(res.data);
        setPizzas(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row p-0">
        {pizzas.length === 0 && <Loaders />}
        {pizzas.length > 0 &&
          pizzas.map((items) => {
            return (
              <div className="col-lg-6 mt-3">
                <ProductCard key={items.id} list={items} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Order;
