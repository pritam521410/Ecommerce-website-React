const Product = (props) => {
  const { image, title, price, rating } = props.product;
  return (
    <div>
      <div className="product">
        <img className="product_img" src={image} />
        <p className="product_heading"> title : {title}</p>
        <h6>{rating.rate} </h6>
        <h6> price:{price}</h6>
      </div>
    </div>
  );
};

export default Product;
