import ProductInfo from "../../component/productinfo/productinfo";
import { productData } from "../../data/productdata";
import "./product.css";

const Product = () => {
  return (
    <div className="productsection" style={{ minHeight: "100vh" }}>
      <h6>Product</h6>
      <div className="productdata">
        {productData.length &&
          productData.map((product, index) => (
            <ProductInfo
              key={index}
              pimg={product.pimg}
              heading={product.heading}
              para={product.para}
            />
          ))}
      </div>
    </div>
  );
};

export default Product;