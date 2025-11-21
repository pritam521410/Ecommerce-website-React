import { Productlistdata } from "../utils/constant";
import Product from "./Product";
const ProductCard = () => {
  return (
    <div className="product_card">
      {Productlistdata.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCard;
