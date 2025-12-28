import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import styles from "./LoginModal.module.css";

export default function LoginModal({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {};

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header>
          <IoCloseCircle className={styles.closeIcon} onClick={onClose} />
        </header>
        <main className={styles.mainContainer}>
          <h1>Login</h1>

          <form>
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
            <div className={styles.authBtns}>
              <button onClick={handleSubmit}>Login</button>
              <button style={{ backgroundColor: "lightgray" }}>
                Login With Google
              </button>
            </div>
            <p>Don't have an account?Register here</p>
          </form>
        </main>
      </div>
    </div>
  );
}
