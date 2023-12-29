import React from "react";
import DashboardSidebar from "../components/utils/dashboardSidebar/DashboardSidebar";
import MyAccountForm from "../components/userDashboard/myAccount/MyAccountForm";

const MyAccount = ({
  dashboardSidebarDetails,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="py-4 mt-5 mt-md-0 container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start">
          <DashboardSidebar
            data={dashboardSidebarDetails}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className="col-12 col-md-8">
          <MyAccountForm />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
