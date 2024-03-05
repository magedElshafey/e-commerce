import React, { useState } from "react";
import style from "./loginForm.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import google from "../../../assets/google.svg";
import facebook from "../../../assets/facebook.svg";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { request } from "../../utils/axios";
import LoadingBtn from "../../utils/loadingBtn/LoadingBtn";
import { useDispatch } from "react-redux";
import { login, addMyData } from "../../../Redux/auth";
import { toast } from "react-hot-toast";
import useEmailValidation from "../../hooks/validation/useEmailValidation";
const LoginForm = ({ deviceID }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { email, emailError, handleEmailChange, setEmail } =
    useEmailValidation();
  const [password, setPassword] = useState("");
  const handleLogin = (data) => {
    return request({
      url: "/sign-in",
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleLogin, {
    onSuccess: (data) => {
      console.log("this is the data from sign up", data?.data);
      if (data?.data.key === "success") {
        toast.success(data?.data?.msg);
        localStorage.setItem("user", JSON.stringify(data?.data?.data));
        dispatch(login());

        navigate("/");
        // clear inputs
        setEmail("");
        setPassword("");
      } else {
        toast.error(data?.data?.msg);
      }
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    if (emailError || password.trim() === "") {
      toast.error(t("error"));
    } else {
      const userData = {
        email,
        password,
        device_id: deviceID,
      };
      mutate(userData);
    }
  };
  return (
    <div>
      <p className="fw-bold m-0 p-0 mb-2 fs-5">{t("signIn")}</p>
      <div className="d-flex align-items-center gap-1 mb-4">
        <p className="m-0 p-0 text-black-50">{t("dontAccount")}</p>
        <Link to="/reg" className={style.title}>
          {t("signUp")}
        </Link>
      </div>
      <form onSubmit={handleClick} className="sans">
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="email"
          >
            {t("data")}
          </label>
          <input
            type="email"
            className="inp"
            id="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          {emailError ? <p className="my-1 red">{emailError}</p> : null}
        </div>
        <div className="mb-3">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="password"
          >
            {t("password")}
          </label>
          <input
            type="password"
            className="inp"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          className={`d-flex align-items-center mb-5 justify-content-between ${style.forgetContainer}`}
        >
          <div className="d-flex align-items-center gap-1">
            <input type="checkbox" id="check" className="check" />
            <label
              className="d-block m-0  p-0 text-black-50 label"
              htmlFor="check"
            >
              {t("remember")}
            </label>
          </div>
          <Link to="/forget" className="text-black fw-bolder">
            {t("forget")}
          </Link>
        </div>
        <div
          className={`d-flex justify-content-center mb-3 ${style.forgetContainer}`}
        >
          {isLoading ? (
            <LoadingBtn />
          ) : (
            <button type="submit" className={`newBtn`}>
              {t("signIn")}
            </button>
          )}
        </div>
        <div className={style.forgetContainer}>
          <div className="faceLine "></div>
        </div>
        <div className={`${style.forgetContainer} mt-3`}>
          <div className="d-flex align-items-center justify-content-between  gap-4">
            <button
              className={`d-flex align-items-center justify-content-between px-2 py-1 ${style.socialBtn} gap-4`}
            >
              <p className="m-0 p-0">{t("google")}</p>
              <img src={google} alt="google/icon" />
            </button>
            <button
              className={`d-flex align-items-center justify-content-between px-2 py-1 ${style.socialBtn} gap-4`}
            >
              <p className="m-0 p-0">{t("facebook")}</p>
              <img src={facebook} alt="google/icon" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
