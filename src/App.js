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
  const openCart = useSelector((state) => state.cartSlice.openCart);
  const items = useSelector((state) => state.cartSlice.cartItems);
  const { isLogin } = useSelector((state) => state.authSlice);

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
        cartItemsLength={items.length}
        isLogin={isLogin}
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
