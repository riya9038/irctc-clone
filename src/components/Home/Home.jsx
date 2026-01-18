import React from "react";
import {
  FaCalendarAlt,
  FaExchangeAlt,
  FaSuitcase,
  FaTrain,
} from "react-icons/fa";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleShow = () => {
    navigate("/train-search");
  };
  return (
    <div className={styles.homeContainer}>
      <h2>BOOK TICKET</h2>
      <div className={styles.inputStation}>
        <div className={styles.inputWrapper}>
          <FaTrain className={styles.icon} />
          <input type="text" placeholder="From Station" />
        </div>
        <FaExchangeAlt className={styles.icon} />
        <div className={styles.inputWrapper}>
          <FaTrain className={styles.icon} />
          <input type="text" placeholder="To Station" />
        </div>
      </div>
      <div className={styles.dateClass}>
        <div className={styles.inputWrapper}>
          <FaCalendarAlt className={styles.icon} />
          <input type="date" />
        </div>
        <div className={styles.inputWrapper}>
          <FaSuitcase className={styles.icon} />
          <select name="class">
            <option value="All Classes">All Classes</option>
            <option value={"Sleeper"}>Sleeper</option>
            <option value={"AC 3 Tier"}>AC 3 Tier</option>
            <option value={"AC 2 Tier"}>AC 2 Tier</option>
            <option value={"AC 1 Tier"}>AC 1 Tier</option>
          </select>
        </div>
      </div>
      <div className={styles.category}>
        <div className={styles.selectWrapper}>
          <FaTrain className={styles.icon} />
          <select name="category">
            <option value="General">General</option>
            <option value={"Ladies"}>Ladies</option>
            <option value={"Tatkal"}>Tatkal</option>
            <option value={"Premium Tatkal"}>Premium Tatkal</option>
            <option value={"Railway Pass"}>Railway Pass</option>
          </select>
        </div>
      </div>
      <div className={styles.checkBoxContainer}>
        <div>
          <input type="checkbox" name="disabled" />
          <span>Person with Disability</span>
        </div>
        <div>
          <input type="checkbox" name="flexible" />
          <span>Flexible with Date</span>
        </div>
        <div>
          <input type="checkbox" name="availableBerth" />
          <span>Train with Available Berth</span>
        </div>
        <div>
          <input type="checkbox" name="concession" />
          <span>Railway Pass Concession</span>
        </div>
      </div>

      <div className={styles.actionBtn}>
        <button className={styles.bgOrange}>Search Trains</button>
        <button className={styles.bgBlue} onClick={handleShow}>
          Show All Trains
        </button>
      </div>
    </div>
  );
}
