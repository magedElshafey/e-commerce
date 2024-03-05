import React, { useState } from "react";
import style from "./regForm.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import LoadingBtn from "../utils/loadingBtn/LoadingBtn";
import { request } from "../utils/axios";
import { useMutation } from "react-query";
import useEmailValidation from "../hooks/validation/useEmailValidation";
import useNameValidation from "../hooks/validation/useNameValidation";
import usePhoneNumberValidator from "../hooks/validation/usePhoneNumberValidator";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const RegForm = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { name, error, handleNameChange, setName } = useNameValidation();
  const [userName, setUserName] = useState("");
  const handleUserNameChange = (e) => setUserName(e.target.value);
  const { email, emailError, handleEmailChange, setEmail } =
    useEmailValidation();
  const { phoneNumber, phoneError, handlePhoneChange, setPhoneNumber } =
    usePhoneNumberValidator();
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSignUp = (data) => {
    return request({
      url: "/sign-up",
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleSignUp, {
    onSuccess: (data) => {
      console.log("this is the data from sign up", data?.data);
      if (data?.data.key === "success") {
        toast.success(data?.data?.msg);
        localStorage.setItem("user", JSON.stringify(data?.data?.data));
        navigate("/otp");
        // clear inputs
        setName("");
        setEmail("");
        setUserName("");
        setPassword("");
        setPhoneNumber("");
      } else {
        toast.error(data?.data?.msg);
      }
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    if (
      error ||
      emailError ||
      password.trim() === "" ||
      userName.trim() === "" ||
      phoneError
    ) {
      toast.error(t("error"));
    } else {
      const userData = {
        name,
        user_name: userName,
        email,
        password,
        lang: i18n.language,
        phone: phoneNumber,
      };
      mutate(userData);
    }
  };
  return (
    <div>
      <p className="fw-bold m-0 p-0 mb-2 fs-5">{t("signUp")}</p>
      <div className="d-flex align-items-center gap-1 mb-4">
        <p className="m-0 p-0 text-black-50">{t("already")}</p>
        <Link to="/login" className={style.title}>
          {t("signIn")}
        </Link>
      </div>
      <form onSubmit={handleClick}>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="name"
          >
            {t("name")}
          </label>
          <input
            required
            value={name}
            onChange={handleNameChange}
            type="text"
            className="inp"
            id="name"
          />
          {error ? <p className="my-1 red">{error}</p> : null}
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="phone"
          >
            {t("phone")}
          </label>
          <input
            required
            value={phoneNumber}
            onChange={handlePhoneChange}
            type="text"
            className="inp"
            id="phone"
          />
          {phoneError ? <p className="my-1 red">{phoneError}</p> : null}
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="userName"
          >
            {t("userName")}
          </label>
          <input
            required
            value={userName}
            onChange={handleUserNameChange}
            type="text"
            className="inp"
            id="userName"
          />
        </div>
        <div className="mb-2">
          <label
            className="d-block m-0 mb-1 p-0 text-black-50 label"
            htmlFor="email"
          >
            {t("email")}
          </label>
          <input
            required
            value={email}
            onChange={handleEmailChange}
            type="email"
            className="inp"
            id="email"
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
            value={password}
            onChange={handlePasswordChange}
            required
            type="password"
            className="inp"
            id="password"
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

export default RegForm;
