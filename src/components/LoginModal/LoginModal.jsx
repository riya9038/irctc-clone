import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import styles from "./LoginModal.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

export default function LoginModal({ onClose, setShowRegister }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.username, formData.password)
      .then((userCredential) => {
        // Signed in

        setError("");
        setFormData({ username: "", password: "" });
        onClose();
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header>
          <IoCloseCircle className={styles.closeIcon} onClick={onClose} />
        </header>
        <main className={styles.mainContainer}>
          <h1>Login</h1>

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

            {error && <p>{error}</p>}
            <div className={styles.authBtns}>
              <button onClick={handleSubmit}>Login</button>
              <button style={{ backgroundColor: "lightgray" }}>
                Login With Google
              </button>
            </div>
            <p>
              Don't have an account?
              <span
                className={styles.subText}
                onClick={() => {
                  setShowRegister(true);
                  onClose();
                }}
              >
                Register here
              </span>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}
