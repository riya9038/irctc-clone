import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import styles from "./RegisterModal.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
//import { useNavigate } from "react-router-dom";

export default function RegisterModal({ onClose, setShowLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  //const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formData.username, formData.password)
      .then((userCredential) => {
        // Signed up
        setError("");
        setFormData({ username: "", password: "", confirmPassword: "" });
        onClose();
        setShowLogin(true);
        //navigate("/");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header>
          <IoCloseCircle className={styles.closeIcon} onClick={onClose} />
        </header>
        <main className={styles.mainContainer}>
          <h1>Register</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Enter confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => handleChange(e)}
            />
            {error && <p>{error}</p>}
            <div className={styles.authBtns}>
              <button>Register</button>
              <button style={{ backgroundColor: "lightgray" }}>
                Register With Google
              </button>
            </div>
            <p>
              Already have an account?
              <span
                className={styles.subText}
                onClick={() => {
                  setShowLogin(true);
                  onClose();
                }}
              >
                Login here
              </span>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}
