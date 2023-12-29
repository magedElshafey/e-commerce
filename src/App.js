import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// react router dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  categories,
  importantLinks,
  account,
  socialMedia,
  servicesOffers,
  bannerSlider,
  specialProducts,
  bestSaller,
  dashboardLinks,
  faqs,
  allProducts,
  cookingHome,
  kitchenHome,
  kidsHome,
  allAppliances,
  rooms,
  productStaticContent,
  clientFaqs,
  shopWithCategory,
  weoffer,
  blogs,
  payment,
  branches,
  takset,
  about1,
  about2,
  address,
  paymentMethods,
  orderDetails,
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
const App = () => {
  // handle scroll to top after change any page
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
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
  return (
    <Router>
      <ScrollToTopAfterChangePage />
      <FixedBtn />
      <Widget />
      <SettingsHeader />
      <MainHeader isLogin={isLogin} />
      <CategoriesHeader data={categories} />
      <MobileHeader
        data={categories}
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
              bannerSlider={bannerSlider}
              weoffer={weoffer}
              flashsale={specialProducts}
              shopWithCategory={shopWithCategory}
              rooms={rooms}
              bestSaller={bestSaller}
              blogs={blogs}
              allProducts={allProducts}
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route
          path="/about"
          element={<About about1={about1} about2={about2} />}
        />
      </Routes>
      <Routes>
        <Route path="/faqs" element={<FAQ data={faqs} />} />
      </Routes>
      <Routes>
        <Route path="/blogs" element={<Blogs data={blogs} />} />
      </Routes>
      <Routes>
        <Route path="/blog/:id" element={<Blog data={blogs} />} />
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
          element={<Offer categories={categories} allProducts={allProducts} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/shop"
          element={<Shop categories={categories} allProducts={allProducts} />}
        />
      </Routes>
      {/**categories*/}
      <Routes>
        <Route
          path="/cat/:title"
          element={<MainCategory data={categories} />}
        />
      </Routes>
      <Routes>
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
      <Footer
        categories={categories}
        importantLinks={importantLinks}
        socialMedia={socialMedia}
        account={account}
        payment={payment}
      />
    </Router>
  );
};

export default App;
