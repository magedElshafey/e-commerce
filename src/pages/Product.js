import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/product/productDetails/ProductDetails";
import TaksetDetails from "../components/product/taksetDetails/TaksetDetails";
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
      <ProductDetails data={singleProduct[0]} content={content} />
      <div className="row mb-4">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <TaksetDetails data={takset} />
        </div>
      </div>
    </div>
  );
};

export default Product;
