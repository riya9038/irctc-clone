import { FaBell, FaHome, FaQuestionCircle } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const currentDate = new Date();
  const user = "";

  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <FaHome />
        <h1>IRCTC</h1>
      </div>

      <div className={styles.navItems}>
        <a href="#">BOOKINGS</a>
        <a href="#">CONTACT US</a>
        <p>
          {currentDate.toLocaleDateString()}[{currentDate.toLocaleTimeString()}]
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
            <button className={styles.loginBtn}>LOGIN</button>
            <button className={styles.registerBtn}>REGISTER</button>
          </div>
        )}
      </div>
    </nav>
  );
}
