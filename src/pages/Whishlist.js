import React, { useEffect } from "react";
import DashboardSidebar from "../components/utils/dashboardSidebar/DashboardSidebar";
import WhishlistTable from "../components/userDashboard/whishlist/WhishlistTable";
import { useTranslation } from "react-i18next";

const Whishlist = ({
  dashboardSidebarDetails,
  activeIndex,
  setActiveIndex,
}) => {
  const { t } = useTranslation();
  useEffect(() => {
    setActiveIndex(2);
  }, []);
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
          <p className="fw500 m-0 p-0 mb-3 fs20">{t("returns")}</p>
          <WhishlistTable />
        </div>
      </div>
    </div>
  );
};

export default Whishlist;
