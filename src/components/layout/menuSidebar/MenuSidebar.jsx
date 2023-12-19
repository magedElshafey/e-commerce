import React, { useRef, useEffect, useState } from "react";
import style from "./MenuSidebar.module.css"
import { AiOutlineClose } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
// react router dom
import { Link } from "react-router-dom";
const MenuSidebar = ({ data, showMenu, setShowMenu }) => {
  const menuRef = useRef(null);
  const [showCategories, setShowCategories] = useState(true);
  const [showAccount, setShowAccount] = useState(false);
  const [activeMainCategoryIndex, setActiveMainCategoryIndex] = useState(null);
  const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState(null);
  const [activeSubSubCategoriesIndex, setActiveSubSubCategoriesIndex] =
    useState(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuRef} className={`menu ${showMenu ? "show" : "hide"}`}>
      <div className="p-3 position-relative">
        <AiOutlineClose
          className={`pointer icon ${style.x}`}
          size={20}
          onClick={() => setShowMenu(false)}
        />
        <div className={`${style.mainMenu} mt-5 rounded-pill`}>
          <button
            className={`${style.btn} ${showCategories ? style.active : null}`}
            onClick={() => {
              setShowCategories(true);
              setShowAccount(false);
            }}
          >
            القائمة
          </button>
          <button
            className={`${style.btn} ${showAccount ? style.active : null}`}
            onClick={() => {
              setShowCategories(false);
              setShowAccount(true);
            }}
          >
            الحساب
          </button>
        </div>
        {showCategories && (
          <ul className="p-0 mt-5">
            {data.map((mainCategory, index) => (
              <>
                <li
                  className="pb-2 borderBottom mb-3 d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <Link className={style.link} to={`/cat/${mainCategory.path}`}>
                    {mainCategory.mainCategory}
                  </Link>
                  {mainCategory.subCategories !== null ? (
                    activeMainCategoryIndex === index ? (
                      <MdOutlineKeyboardArrowUp
                        size={30}
                        className="pointer icon"
                        onClick={() => setActiveMainCategoryIndex(null)}
                      />
                    ) : (
                      <MdOutlineKeyboardArrowDown
                        size={30}
                        className="pointer icon"
                        onClick={() => setActiveMainCategoryIndex(index)}
                      />
                    )
                  ) : null}
                </li>
                <ul
                  className={`position-relative ${style.subCategoryContainer} ${
                    mainCategory.subCategories !== null &&
                    activeMainCategoryIndex === index
                      ? style.show
                      : style.hide
                  }`}
                >
                  {mainCategory.subCategories?.map((subCategory, index) => (
                    <>
                      <li
                        key={index}
                        className="pb-2 borderBottom my-4 d-flex align-items-center justify-content-between"
                      >
                        <Link
                          className={style.link}
                          to={`/cat/${mainCategory.path}/${subCategory.enTitle}`}
                        >
                          {subCategory.title}
                        </Link>
                        {subCategory.categories !== null ? (
                          activeSubCategoryIndex === index ? (
                            <MdOutlineKeyboardArrowUp
                              size={30}
                              className="pointer icon"
                              onClick={() => setActiveSubCategoryIndex(null)}
                            />
                          ) : (
                            <MdOutlineKeyboardArrowDown
                              size={30}
                              className="pointer icon"
                              onClick={() => setActiveSubCategoryIndex(index)}
                            />
                          )
                        ) : null}
                      </li>
                      <ul
                        className={`position-relative ${
                          style.subCategoryContainer
                        } ${
                          subCategory.categories !== null &&
                          activeSubCategoryIndex === index
                            ? style.show
                            : style.hide
                        }`}
                      >
                        {subCategory.categories?.map(
                          (subSubCategory, index) => (
                            <>
                              <li
                                key={index}
                                className="pb-2 borderBottom d-flex align-items-center justify-content-between my-4"
                              >
                                <Link
                                  className={style.link}
                                  to={`/cat/${mainCategory.path}/${subCategory.enTitle}/${subSubCategory.enTitle}`}
                                >
                                  {subSubCategory.title}
                                </Link>
                                {subSubCategory.categories !== null ? (
                                  activeSubSubCategoriesIndex === index ? (
                                    <MdOutlineKeyboardArrowUp
                                      size={30}
                                      className="pointer icon"
                                      onClick={() =>
                                        setActiveSubSubCategoriesIndex(null)
                                      }
                                    />
                                  ) : (
                                    <MdOutlineKeyboardArrowDown
                                      size={30}
                                      className="pointer icon"
                                      onClick={() =>
                                        setActiveSubSubCategoriesIndex(index)
                                      }
                                    />
                                  )
                                ) : null}
                              </li>
                              <ul
                                className={`position-relative ${
                                  style.subCategoryContainer
                                } ${
                                  subSubCategory.categories !== null &&
                                  activeSubSubCategoriesIndex === index
                                    ? style.show
                                    : style.hide
                                }`}
                              >
                                {subSubCategory.categories?.map(
                                  (subSubSubCategory, index) => (
                                    <li
                                      key={index}
                                      className="pb-2 borderBottom my-4 d-flex align-items-center justify-content-between"
                                    >
                                      <Link
                                        className={style.link}
                                        to={`/cat/${mainCategory.path}/${subCategory.enTitle}/${subSubCategory.enTitle}/${subSubSubCategory.enTitle}`}
                                      >
                                        {subSubSubCategory.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </>
                          )
                        )}
                      </ul>
                    </>
                  ))}
                </ul>
              </>
            ))}
          </ul>
        )}
        {showAccount && (
          <ul className="mt-5">
            <li className="pb-3 borderBottom my-4">
              <Link className={style.link} to="/login">
                تسجيل دخول
              </Link>
            </li>
            <li className="pb-3 borderBottom my-4">
              <Link className={style.link} to="/reg">
                إنشاء حساب
              </Link>
            </li>
            <li className="pb-3  my-4">
              <Link className={style.link} to="/help">
                المساعدة و الاعدادات
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MenuSidebar;
