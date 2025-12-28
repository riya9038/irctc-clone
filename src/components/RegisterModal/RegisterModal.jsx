import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import styles from "./RegisterModal.module.css";

export default function RegisterModal({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header>
          <IoCloseCircle className={styles.closeIcon} onClick={onClose} />
        </header>
        <main className={styles.mainContainer}>
          <h1>Register</h1>

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
            <input
              type="password"
              placeholder="Enter confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => handleChange(e)}
            />
            <div className={styles.authBtns}>
              <button>Register</button>
              <button style={{ backgroundColor: "lightgray" }}>
                Register With Google
              </button>
            </div>
            <p>Already have an account?Login here</p>
          </form>
        </main>
      </div>
    </div>
  );
}
