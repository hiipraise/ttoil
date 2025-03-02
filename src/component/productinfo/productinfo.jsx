import "./productinfo.css";

const ProductInfo = ({ pimg, heading, para }) => {
  return (
    <>
      <div className="imgproduct">
        <div>
          <img src={pimg} alt="" />
        </div>
        <div className="productinfo">
          <h5>{heading}</h5>
          <p>{para}</p>
        </div>
      </div>
      {/* <div className="productdetail">
        {/* <div className="imgswap">
        <div className="productinfo">
          <h5>{heading2}</h5>
          <p>{para2}</p>
        </div>
        <div>
          <img src={pimg2} alt="" />
        </div>
      </div>
      </div> */}
    </>
  );
};

export default ProductInfo;
