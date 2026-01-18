import React from "react";
import styles from "./ModifySearch.module.css";
import {
  FaCalendarAlt,
  FaExchangeAlt,
  FaSuitcase,
  FaTrain,
} from "react-icons/fa";

export default function ModifySearch() {
  return (
    <section className={styles.modifySearch}>
      <h3>Modify Search</h3>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <FaTrain className={styles.icon} />
          <input type="text" placeholder="From Station" />
        </div>
        <FaExchangeAlt className={styles.icon} />
        <div className={styles.inputWrapper}>
          <FaTrain className={styles.icon} />
          <input type="text" placeholder="To Station" />
        </div>
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
        <button className={styles.modifyBtn}>Modify Search </button>
      </div>
    </section>
  );
}
