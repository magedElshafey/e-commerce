import React, { useRef, useEffect, useState } from "react";
import style from "./MenuSidebar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
// react router dom
import { useNavigate, Link } from "react-router-dom";
const MenuSidebar = ({ data, showMenu, setShowMenu }) => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
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
  const handleNavigate = (path) => {
    navigate(`/${path}`);
    setShowMenu(false);
  };
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
          <ul className="m-0 p-0 mt-4">
            {data.map((mainCategory, index) => (
              <>
                <li
                  key={index}
                  className="pb-2 borderBottom mb-3 d-flex align-items-center justify-content-between"
                >
                  <Link className={style.link} to={`/cat/${mainCategory.name}`}>
                    {mainCategory.name}
                  </Link>
                  {mainCategory.children.length ? (
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
                    mainCategory.children.length &&
                    activeMainCategoryIndex === index
                      ? style.show
                      : style.hide
                  }`}
                >
                  {mainCategory.children?.map((subCategory, index) => (
                    <>
                      <li
                        key={index}
                        className="pb-2 borderBottom my-4 d-flex align-items-center justify-content-between"
                      >
                        <Link
                          className={style.link}
                          to={`/cat/${mainCategory.name}/${subCategory.name}`}
                        >
                          {subCategory.name}
                        </Link>
                        {subCategory.children.length ? (
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
                          subCategory.children.length &&
                          activeSubCategoryIndex === index
                            ? style.show
                            : style.hide
                        }`}
                      >
                        {subCategory.children.map((subSubCategory, index) => (
                          <>
                            <li
                              key={index}
                              className="pb-2 borderBottom d-flex align-items-center justify-content-between my-4"
                            >
                              <Link
                                className={style.link}
                                to={`/cat/${mainCategory.name}/${subCategory.name}/${subSubCategory.name}`}
                              >
                                {subSubCategory.name}
                              </Link>
                              {subSubCategory.children.length ? (
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
                          </>
                        ))}
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
            <li
              onClick={() => handleNavigate("login")}
              className={`pb-3 borderBottom my-4 ${style.link}`}
            >
              تسجيل دخول
            </li>
            <li
              onClick={() => handleNavigate("reg")}
              className={`pb-3 borderBottom my-4 ${style.link}`}
            >
              إنشاء حساب
            </li>
            <li
              onClick={() => handleNavigate("faqs")}
              className={`pb-3 borderBottom my-4 ${style.link}`}
            >
              المساعدة و الاعدادات
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MenuSidebar;
/**
 * <div ref={menuRef} className={`menu ${showMenu ? "show" : "hide"}`}>
      <div className="p-3 position-relative">
    
        {showCategories && (
          <ul className="p-0 mt-5">
            {data.map((mainCategory, index) => (
              <>
              <ul
                  className={`position-relative ${style.subCategoryContainer} ${
                    mainCategory.children.length &&
                    activeMainCategoryIndex === index
                      ? style.show
                      : style.hide
                  }`}
                >
                  {mainCategory.children?.map((subCategory, index) => (
                    <>
                     
                      <ul
                        className={`position-relative ${
                          style.subCategoryContainer
                        } ${
                          subCategory.categories.length &&
                          activeSubCategoryIndex === index
                            ? style.show
                            : style.hide
                        }`}
                      >
                        {subCategory.children?.map((subSubCategory, index) => (
                          <>
                            <li
                              key={index}
                              className="pb-2 borderBottom d-flex align-items-center justify-content-between my-4"
                            >
                             
                              {subSubCategory.children.length ? (
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
                                subSubCategory.children.length &&
                                activeSubSubCategoriesIndex === index
                                  ? style.show
                                  : style.hide
                              }`}
                            >
                              {subSubCategory.children?.map(
                                (subSubSubCategory, index) => (
                                  <li
                                    key={index}
                                    className="pb-2 borderBottom my-4 d-flex align-items-center justify-content-between"
                                  >
                                    <Link
                                      className={style.link}
                                      to={`/cat/${mainCategory.name}/${subCategory.name}/${subSubCategory.name}/${subSubSubCategory.name}`}
                                    >
                                      {subSubSubCategory.name}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </>
                        ))}
                      </ul>
                    </>
                  ))}
                </ul>
              </>
            ))}
          </ul>
        )}
     
      </div>
    </div>
 */
