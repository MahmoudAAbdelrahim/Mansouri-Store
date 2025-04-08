import React, { useState, useEffect } from "react";
import "../src/App.css";
import Button from "react-bootstrap/esm/Button";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./Firebase";
import { Router, useNavigate } from "react-router-dom";
import  RagistrPadg  from "./RagistrPadg";
import Chackout from './Chackout';
import { useLocation } from "react-router-dom";
import AuthDit from './AuthDit';
import { BrowserRouter, Routes, Route, Link,  NavLink } from 'react-router-dom';


const LoginPadg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "لا يوجد اسم مستخدم";

  useEffect(() => {
    // Enable button if username length > 5
    setIsButtonDisabled(email.length  <= 5);
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(""); 
    // Clear previous message
    if (email.length < 14) {
      setMessage("البريد الاكتروني يجب أن يحتوي على 14 أحرف على الأقل.");
      return;
    }
    if (password.length < 10) {
      setMessage("كلمة المرور يجب أن تحتوي على 10 أحرف على الأقل.");
      return;
    }




    // التسجيل باستخدام Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        setMessage("تم التسجيل بنجاح 🎉");
        navigate("/Chackout")
        setEmail("")
        setPassword("");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setMessage("لا يوجد حساب : " + error.message);
        navigate("/RagistrPadg")
        setEmail("")
        setPassword("");
      });


  };




  return (
  <>

    <form id="form" onSubmit={handleSubmit}>  
      <p className="price">اسم المستخدم الخاص بك: <strong>{username}</strong></p>
      <AuthDit />
      <p className="cartph1" id="logo">LoginPage</p>
      <input className="input" type="email" id="email" placeholder="البريد الإلكتروني" value={email}onChange={(e) => setEmail(e.target.value)}/>
      <input className="input" type="password" id="pass" placeholder="كلمة المرور" value={password}onChange={(e) => setPassword(e.target.value)}/>
      <span style={{ color: message.includes("نجاح") ? "green" : "red" }}>{message}</span>
      <Button style={{ margin: "10px 0 0 0" }} variant="outline-dark" type="submit" disabled={isButtonDisabled}>إضافة</Button>
    </form>   
      <Routes>
      <Route path="/AuthDit" element={<AuthDit />} />
      </Routes>
  </>
  );
};

export default LoginPadg;
