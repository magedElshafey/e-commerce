import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/product/productDetails/ProductDetails";
import TaksetDetails from "../components/product/taksetDetails/TaksetDetails";
// import StaticContent from "../components/product/staticContent/StaticContent";
import ProductSlider from "../components/utils/productSlider/ProductSlider";
import MoreDesc from "../components/product/moreDesc/MoreDesc";
import ClientFAQS from "../components/product/clientFaqs/ClientFAQS";
const Product = ({
  data,
  content,
  specialProducts,
  bestSaller,
  clientFaqs,
  takset,
}) => {
  const { id } = useParams();
  const singleProduct = data.filter((item) => item.id === +parseInt(id));
  return (
    <div className="py-4 mt-5 mt-md-0">
      <ProductDetails data={singleProduct[0]} />

      <MoreDesc data={singleProduct[0].desc} content={content} />
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <TaksetDetails data={takset} />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <ClientFAQS data={clientFaqs} />
          </div>
        </div>
      </div>
      <ProductSlider data={specialProducts} />
      <ProductSlider data={bestSaller} />
    </div>
  );
};

export default Product;
