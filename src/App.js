import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// react router dom
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  categories,
  importantLinks,
  account,
  socialMedia,
  specialProducts,
  bestSaller,
  allProducts,
  productStaticContent,
  clientFaqs,
  payment,
  branches,
  takset,
  address,
  paymentMethods,
  orderDetails,
  dashboardSidebarDetails,
  contactDetails,
  contactServices,
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
        <Spinner />
      ) : (
        <>
          <Meta
            title={data?.data?.data?.site?.title}
            desc={data?.data?.data?.site?.description}
            fav={data?.data?.data?.site?.icon}
          />
          <FixedBtn />
          <Widget />
          <SettingsHeader />
          <MainHeader isLogin={isLogin} logo={data?.data?.data?.site?.logo} />
          <CategoriesHeader data={data?.data?.data?.categories} />
          <MobileHeader
            data={data?.data?.data?.categories}
            cartItemsLength={cartItems.length}
            isLogin={isLogin}
          />

          <CartSidebar
            isCartOpen={isCartOpen}
            cartItemsLength={cartItems.length}
            cartItems={cartItems}
            totalPrice={totalPrice}
          />
          {/**home*/}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  bannerSlider={data?.data?.data?.banners}
                  weoffer={data?.data?.data?.features}
                  flashsale={data?.data?.data?.tantawiOffers}
                  shopWithCategory={data?.data?.data?.categories}
                  banner1={data?.data?.data.ads?.Ad1}
                  banner2={data?.data?.data.ads?.Ad2}
                  banner3={data?.data?.data.ads?.Ad3}
                  banner4={data?.data?.data?.ads?.Ad4}
                  mainCategory={data?.data?.data?.mainCategory}
                  shop={data?.data?.data?.shippingProducts}
                  productsForYou={data?.data?.data?.productsForYou}
                  bestSaller={data?.data?.data?.maxOrderProducts}
                />
              }
            />
          </Routes>
          {/**auth*/}
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/reg" element={<Reg />} />
          </Routes>
          {/**static pages*/}
          <Routes>
            <Route path="/branches" element={<Branches data={branches} />} />
          </Routes>
          <Routes>
            <Route
              path="/contact"
              element={
                <Contact
                  contactDetails={contactDetails}
                  contactServices={contactServices}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/faqs" element={<FAQ />} />
          </Routes>
          <Routes>
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
          <Routes>
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
          <Routes>
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Routes>
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          {/**shop , offer , product*/}
          <Routes>
            <Route
              path="/product/:id"
              element={
                <Product
                  data={allProducts}
                  content={productStaticContent}
                  specialProducts={specialProducts}
                  bestSaller={bestSaller}
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
                <Offer categories={categories} allProducts={allProducts} />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/shop"
              element={
                <Shop categories={categories} allProducts={allProducts} />
              }
            />
          </Routes>
          {/**categories*/}
          <Routes>
            <Route
              path="/cat/:id/:title"
              element={<MainCategory data={categories} />}
            />
          </Routes>
          {/**
                 *    <Routes>
            <Route
              path="/cat/:title/:subTitle"
              element={<SubCategory data={categories} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/cat/:title/:subTitle/:subSubTitle"
              element={<SubSubCategory data={categories} />}
            />
          </Routes>
                 */}
          {/**checkout pages*/}
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
          {/**user dashobard*/}
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
          <Footer
            categories={data?.data?.data?.categories}
            importantLinks={importantLinks}
            socialMedia={socialMedia}
            account={account}
            payment={payment}
            logo={data?.data?.data?.site?.logo}
          />
        </>
      )}
    </>
  );
};

export default App;
