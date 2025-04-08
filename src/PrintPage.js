import React from "react";
import { useLocation, Link } from "react-router-dom";

const PrintPage = () => {
  const location = useLocation();
  const { printedText } = location.state || { printedText: "لا يوجد نص لإظهاره" };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>النص المدخل:</h3>
      <p style={{ fontSize: "18px", color: "green" }}>{printedText}</p>
      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          العودة للصفحة الرئيسية
        </button>
      </Link>
    </div>
  );
};

export default PrintPage;
