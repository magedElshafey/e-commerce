import React, { useState } from "react";
import BgImg from "../components/login/bgImg/BgImg";
import OtpInput from "react-otp-input";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { request } from "../components/utils/axios";
import LoadingBtn from "../components/utils/loadingBtn/LoadingBtn";
import { useDispatch } from "react-redux";
import { addMyData } from "../Redux/auth";
import { toast } from "react-hot-toast";
const OTP = ({ deviceID }) => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const sendOtp = (data) => {
    return request({
      url: "/activate?_method=patch",
      method: "POST",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(sendOtp, {
    onSuccess: (data) => {
      if (data?.data?.key === "success") {
        toast.success(data?.data?.msg);
        dispatch(addMyData(data?.data?.data));
        navigate("/login");
        // clear inputs
        setOtp("");
      } else {
        toast.error(data?.data?.msg);
      }
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.trim() === "") {
      toast.error(t("error"));
    } else {
      const userData = {
        code: otp,
        email: user.email,
        device_id: deviceID,
      };
      mutate(userData);
    }
  };
  return (
    <div className="py-4 mt-4 mt-md-0 overflow-x-hidden">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <BgImg />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="container">
            <p className="fw-bold m-0 p-0 mb-3 fs-5 text-center">{t("otp")}</p>
            <form onSubmit={handleSubmit} className="sans">
              <div
                dir="ltr"
                className="d-flex align-items-center justify-content-center flex-column flex-md-row  "
              >
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  inputType={"text"}
                  shouldAutoFocus={true}
                  skipDefaultStyles={true}
                  inputStyle={`border-2 rounded w-35 py-1 mx-1 text-center`}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div className={`d-flex justify-content-center mt-4  `}>
                {isLoading ? (
                  <LoadingBtn />
                ) : (
                  <button type="submit" className={`newBtn`}>
                    {t("send")}
                  </button>
                )}
              </div>
            </form>
            <div className="d-flex justify-content-center justify-content-md-start">
              <p className="pointer m-0 p-0">{t("resend")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
