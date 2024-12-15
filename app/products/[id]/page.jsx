import { ALL_PRODUCTS as products } from "@/app/lib/data";

import Header from "@/app/components/header/header";

import ProductImageContainer from "./components/product-image-container";
import ProductInfoContainer from "./components/product-info-container";
import ProductRelatedContainer from "./components/product-related-container";

export default async function ProductPage({ params }) {
  const param = await params;
  const currentProductPage = products.find(
    (product) => product.paramId === param.id,
  );
  const remainProducts = products.filter(
    (product) => product.paramId !== param.id,
  );

  return (
    <>
      <div
        className="rounded-b-large"
        style={{
          color: currentProductPage.colorPrimary,
          backgroundColor: currentProductPage.colorSecondary,
        }}
      >
        <Header
          color={currentProductPage.colorPrimary}
          buttonColor={currentProductPage.colorHeaderButton}
          buttonColorHover={currentProductPage.colorAccent}
          relative
        />
        <div className="mb-20 grid grid-cols-1 pb-5 lg:mb-36 lg:grid-cols-2">
          <ProductImageContainer currentProductPage={currentProductPage} />

          <ProductInfoContainer currentProductPage={currentProductPage} />
        </div>
      </div>

      <ProductRelatedContainer remainProducts={remainProducts} />
    </>
  );
}
