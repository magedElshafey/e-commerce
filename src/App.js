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
} from "./fakers/data";
import Widget from "./components/layout/Widget/Widget";
import SettingsHeader from "./components/layout/settingsHeader/SettingsHeader";
import MainHeader from "./components/layout/mainHrader/MainHeader";
import CategoriesHeader from "./components/layout/categoriesHeader/CategoriesHeader";
import MobileHeader from "./components/layout/mobileHeader/MobileHeader";
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
  return (
    <Router>
      <ScrollToTopAfterChangePage />
      <Widget />
      <SettingsHeader />
      <MainHeader />
      <CategoriesHeader data={categories} />
      <MobileHeader data={categories} cartItemsLength={items.length} />
    </Router>
  );
};

export default App;
