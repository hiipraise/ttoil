import { useTranslation } from 'react-i18next';
import ProductInfo from "../../component/productinfo/productinfo";
import { productData } from "../../data/productdata";
import "./product.css";

const Product = () => {
  const { t } = useTranslation();

  return (
    <div className="productsection" style={{ minHeight: "100vh" }}>
      <h6>{t('PRODUCTS')}</h6>
      <div className="productdata">
        {productData.length &&
          productData.map((product, index) => (
            <ProductInfo
              key={index}
              pimg={product.pimg}
              heading={t(product.heading)}
              para={t(product.para)}
            />
          ))}
      </div>
    </div>
  );
};

export default Product;