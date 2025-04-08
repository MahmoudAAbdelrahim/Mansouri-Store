import React from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import AuthDit from './AuthDit';
import { BrowserRouter, Routes, Route, Link,  NavLink } from 'react-router-dom';


const Chackout = () => {
      const location = useLocation();
      const username = location.state?.username || "لا يوجد اسم مستخدم";
    


    return (
        <>
            <p className="price">اسم المستخدم الخاص بك: <strong>{username}</strong>
            <AuthDit /></p>
          <form id="form">
            <p className="cartph1" id="logo">
              Chack-Out
            </p>
            <input
              className="input"
              type="text"
              id="name"
              placeholder="اسم المستخدم"
            />
            <input
              className="input"
              type="email"
              id="email"
              placeholder="البريد الإلكتروني"
            />
            <input
              className="input"
              type="password"
              id="pass"
              placeholder="كلمة المرور"
            />

            <Button
              style={{ margin: "10px 0 0 0" }}
              variant="outline-dark"
              type="submit"
            >
              إضافة
            </Button>
          </form>
          <Routes>
      <Route path="/AuthDit" element={<AuthDit />} />
      </Routes>
        </>
      );
    };
    

export default Chackout