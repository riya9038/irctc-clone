import { FaBell, FaHome, FaQuestionCircle } from "react-icons/fa";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setInterval(() => setCurrentDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentDate]);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logoContainer}>
          <FaHome onClick={() => navigate("/")} />
          <h1>IRCTC</h1>
        </div>

        <div className={styles.navItems}>
          <Link to="/bookings">BOOKINGS</Link>
          <Link to="/contact">CONTACT US</Link>
          <p>
            {currentDate.toLocaleDateString()}[
            {currentDate.toLocaleTimeString()}]
          </p>

          <FaBell />
          <FaQuestionCircle />

          {user ? (
            <div className={styles.authBtn}>
              <button>LOGOUT</button>
              <p>Welcome {user}</p>
            </div>
          ) : (
            <div className={styles.authBtn}>
              <button className={styles.loginBtn} onClick={handleLogin}>
                LOGIN
              </button>
              <button className={styles.registerBtn} onClick={handleRegister}>
                REGISTER
              </button>
            </div>
          )}
        </div>
      </nav>
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          setShowRegister={setShowRegister}
        />
      )}
      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          setShowLogin={setShowLogin}
        />
      )}
    </>
  );
}
