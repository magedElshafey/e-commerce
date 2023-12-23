import React from "react";
import style from "./staticContanet.module.css";
const StaticContent = ({ content }) => {
  return (
    <div>
      <div className={` mb-3 ${style.content}`}>
        <div className="p-3">
          {content.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="fw-bolder m-0 p-0 mb-2">{item.question}</p>
              <p className={`m-0 p-0`}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={` ${style.how}`}>
        <div className="p-3">
          <p className="m-0 p-0 fw-bolder mb-3">كيف تحصل عليه ؟</p>
          <p className={`m-0 p-0 mb-3 ${style.text}`}>
            أضف المنتج إلى سلة التسوق وابدأ في تقديم الطلب ، ثم حدد طريقة دفع
            الأهلي بالتقسيط في صفحة الدفع.
          </p>
          <p className={`m-0 p-0 ${style.text}`}>
            ستتم إعادة توجيهك إلى صفحة البنك لإتمام عملية الدفع.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaticContent;
