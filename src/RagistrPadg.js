import React, { useState, useEffect } from "react";
import "../src/App.css";
import Button from "react-bootstrap/esm/Button";
import { createUserWithEmailAndPassword} from "firebase/auth";

import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
const RagistrPadg = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();


  // تفعيل/تعطيل الزر بناءً على طول اسم المستخدم
  useEffect(() => {
    setIsButtonDisabled(Username.length <= 5);
  }, [Username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(""); // مسح الرسالة السابقة

    if (Username.length < 5) {
      setMessage("اسم المستخدم يجب أن يحتوي على 5 أحرف على الأقل.");
      return;
    }
    if (password.length < 10) {
      setMessage("كلمة المرور يجب أن تحتوي على 10 أحرف على الأقل.");
      return;
    }

    // التسجيل باستخدام Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        setMessage("تم التسجيل بنجاح 🎉");
        navigate("/LoginPadg", { state: { Username } });
        navigate("/Chackout", { state: { Username } });
        setUsername("")
        setEmail("")
        setPassword("");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setMessage("فشل في التسجيل: " + error.message);
      });
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <p className="cartph1" id="logo">
          Register Page
        </p>
        <input
          className="input"
          type="text"
          id="name"
          placeholder="اسم المستخدم"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="email"
          id="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          id="pass"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          style={{
            color: message.includes("نجاح") ? "green" : "red",
          }}
        >
          {message}
        </span>
        <Button
          style={{ margin: "10px 0 0 0" }}
          variant="outline-dark"
          type="submit"
          disabled={isButtonDisabled}
        >
          إضافة
        </Button>
      </form>
    </>
  );
};

export default RagistrPadg;
