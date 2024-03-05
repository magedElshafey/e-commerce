import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// react router dom
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  importantLinks,
  account,
  productStaticContent,
  clientFaqs,
  payment,
  branches,
  takset,
  address,
  paymentMethods,
  orderDetails,
  dashboardSidebarDetails,
} from "./fakers/data";
import Widget from "./components/layout/Widget/Widget";
import SettingsHeader from "./components/layout/settingsHeader/SettingsHeader";
import MainHeader from "./components/layout/mainHrader/MainHeader";
import CategoriesHeader from "./components/layout/categoriesHeader/CategoriesHeader";
import MobileHeader from "./components/layout/mobileHeader/MobileHeader";
import Home from "./pages/Home";
import FixedBtn from "./components/utils/btns/FixedBtn";
import Footer from "./components/layout/footer/Footer";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Branches from "./pages/Branches";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import MainCategory from "./pages/MainCategory";
import SubCategory from "./pages/SubCategory";
import SubSubCategory from "./pages/SubSubCategory";
import CartSidebar from "./components/cart/cartSidebar/CartSidebar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CompleteOrder from "./pages/CompleteOrder";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Offer from "./pages/Offer";
import Shop from "./pages/Shop";
import MyAccount from "./pages/MyAccount";
import Orders from "./pages/Orders";
import Returns from "./pages/Returns";
import Whishlist from "./pages/Whishlist";
import Spinner from "./components/utils/spinner/Spinner";
import { request } from "./components/utils/axios";
import { useQuery } from "react-query";
import Meta from "./components/utils/Meta";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import SubSubSubCategory from "./pages/SubSubSubCategory";
import OTP from "./pages/OTP";
const App = () => {
  // lang
  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(i18n.language));
  }, []);
  const { i18n } = useTranslation();
  // handle language
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
    if (i18n.language === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [i18n.language]);
  // cart details
  const { isCartOpen, cartItems } = useSelector((state) => state.cartSlice);
  const { isLogin } = useSelector((state) => state.authSlice);
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += product.disscount
      ? (+product.orignalPrice - +product.disscount) * +product.quantity
      : product.orignalPrice * product.quantity;
    return acc;
  }, 0);
  // handle active index for dashboard side bar
  const [activeIndex, setActiveIndex] = useState(null);
  // fetching common data
  const fetchData = () => {
    return request({ url: "/home" });
  };
  const { isLoading: loadingHomePage, data } = useQuery("home-page", fetchData);
  return (
    <>
      {loadingHomePage ? (
        <Spinner logo={data?.data?.data?.site?.logo} />
      ) : (
        <>
          <Meta
            title={data?.data?.data?.site?.name}
            desc={data?.data?.data?.site?.description}
            fav={data?.data?.data?.site?.fav_icon}
          />
          <Widget />
          <SettingsHeader socialMedia={data?.data?.data?.socials} />
          <MainHeader isLogin={isLogin} logo={data?.data?.data?.site?.logo} />
          <CategoriesHeader data={data?.data?.data?.categories} />
          <MobileHeader
            data={data?.data?.data?.categories}
            cartItemsLength={cartItems.length}
            isLogin={isLogin}
            logo={data?.data?.data?.site?.mobile_logo}
          />
          <CartSidebar
            isCartOpen={isCartOpen}
            cartItemsLength={cartItems.length}
            cartItems={cartItems}
            totalPrice={totalPrice}
          />
          {/*home page*/}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  bannerSlider={data?.data?.data?.banners}
                  weoffer={data?.data?.data?.features}
                  flashsale={data?.data?.data?.offers[0]}
                  shopWithCategory={data?.data?.data?.categories}
                  banner1={data?.data?.data.ads[0]}
                  banner2={data?.data?.data.ads[1]}
                  banner3={data?.data?.data.ads[2]}
                  banner4={data?.data?.data?.ads[3]}
                  mainCategory={data?.data?.data?.mainCategory}
                  shop={data?.data?.data?.shippingProducts}
                  productsForYou={data?.data?.data?.productsForYou}
                  bestSaller={data?.data?.data?.maxOrderProducts}
                />
              }
            />
          </Routes>
          {/*auth*/}
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/reg" element={<Reg />} />
          </Routes>
          <Routes>
            <Route path="/otp" element={<OTP />} />
          </Routes>
          {/**static pages */}
          <Routes>
            <Route path="/branches" element={<Branches data={branches} />} />
          </Routes>

          <Routes>
            <Route path="/faqs" element={<FAQ />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Routes>
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Routes>
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
          <Routes>
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
          <Routes>
            <Route
              path="/contact"
              element={
                <Contact
                  phone={data?.data?.data?.site?.phone}
                  email={data?.data?.data?.site?.email}
                  address={data?.data?.data?.site?.address}
                  weoffer={data?.data?.data?.features}
                  socialMedia={data?.data?.data?.socials}
                />
              }
            />
          </Routes>
          {/* categories */}
          <Routes>
            <Route path="/cat/:title/:id" element={<MainCategory />} />
          </Routes>
          <Routes>
            <Route
              path="/cat/:mainCategoryTitle/:mainCategoryId/:subCategoryTitle/:subCategoryId"
              element={<SubCategory />}
            />
          </Routes>
          <Routes>
            <Route
              path="/cat/:mainCategoryTitle/:mainCategoryId/:subCategoryTitle/:subCategoryId/:subSubCategoryTitle/:subSubCategoryId"
              element={<SubSubCategory />}
            />
          </Routes>
          <Routes>
            <Route
              path="/cat/:mainCategoryTitle/:mainCategoryId/:subCategoryTitle/:subCategoryId/:subSubCategoryTitle/:subSubCategoryId/:subSubSubCategoryTitle/:subSubSubCategoryId"
              element={<SubSubSubCategory />}
            />
          </Routes>
          {/**shop , offers , product details pages*/}
          <Routes>
            <Route
              path="/product/:id"
              element={
                <Product
                  data={data?.data?.data?.maxOrderProducts}
                  content={productStaticContent}
                  specialProducts={data?.data?.data?.maxOrderProducts}
                  bestSaller={data?.data?.data?.maxOrderProducts}
                  clientFaqs={clientFaqs}
                  takset={takset}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/offer"
              element={
                <Offer
                  categories={data?.data?.data?.categories}
                  allProducts={data?.data?.data?.maxOrderProducts}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/shop"
              element={
                <Shop
                  categories={data?.data?.data?.categories}
                  allProducts={data?.data?.data?.maxOrderProducts}
                />
              }
            />
          </Routes>
          <Footer
            categories={data?.data?.data?.categories}
            importantLinks={importantLinks}
            socialMedia={data?.data?.data?.socials}
            account={account}
            payment={payment}
            logo={data?.data?.data?.site?.logo}
            slogan={data?.data?.data?.site?.slogan}
          />
        </>
      )}
    </>
  );
};

export default App;
/**
 *  <FixedBtn facebook={data?.data?.data?.followUs?.facebook} />
 *   <>
         

         
         
         
         
        
         
        
        
        
       
         
        
         
        
         
           
         
               
          
          <Routes>
            <Route
              path="/cart"
              element={<Cart data={cartItems} totalPrice={totalPrice} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/checkout"
              element={
                <Checkout
                  address={address}
                  totalPrice={totalPrice}
                  paymentMethods={paymentMethods}
                  cartItems={cartItems}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/complete"
              element={
                <CompleteOrder
                  cartItems={cartItems}
                  orderDetails={orderDetails}
                  totalPrice={totalPrice}
                />
              }
            />
          </Routes>
       
          <Routes>
            <Route
              path="/accountDetails"
              element={
                <MyAccount
                  dashboardSidebarDetails={dashboardSidebarDetails}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/orders"
              element={
                <Orders
                  dashboardSidebarDetails={dashboardSidebarDetails}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/returns"
              element={
                <Returns
                  dashboardSidebarDetails={dashboardSidebarDetails}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/wishlist"
              element={
                <Whishlist
                  dashboardSidebarDetails={dashboardSidebarDetails}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              }
            />
          </Routes>
        
        </>
 */
