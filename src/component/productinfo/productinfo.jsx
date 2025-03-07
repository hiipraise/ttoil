import "./productinfo.css";

const ProductInfo = ({ pimg, heading, para }) => {
  return (
    <div className="imgproduct">
      <div>
        <img src={pimg} alt="" />
      </div>
      <div className="productinfo">
        <h5>{heading}</h5>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
