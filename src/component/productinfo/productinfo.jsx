const ProductInfo = (img, img2, heading, heading2, para, para2) => {
  return (
    <div className="productdetail">
      <div className="img">
        <img src={img} alt={`${name}`} />
        <div className="productinfo">
          <h5>{heading}</h5>
          <p>{para}</p>
        </div>
      </div>
      <div className="imgswap">
        <img src={img2} alt={`${name}`} />
        <div className="productinfo">
          <h5>{heading2}</h5>
          <p>{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
