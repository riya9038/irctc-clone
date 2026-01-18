import React from "react";
import styles from "./TrainFilter.module.css";

export default function TrainFilter() {
  return (
    <section className={styles.filterContainer}>
      <div className={styles.travelFilter}>
        <h3>Travel Classes</h3>
        <div>
          <div className={styles.checkBox}>
            <input type="checkbox" value={"AC First Class"} />
            <span>AC First Class (1A)</span>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" value={"AC Second Class"} />
            <span>AC Second Class (2A)</span>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" value={"AC Third Class"} />
            <span>AC Third Class (3A)</span>
          </div>
        </div>
      </div>
      <div className={styles.trainTypeFilter}>
        <h3>Train Type</h3>
        <div>
          <div className={styles.checkBox}>
            <input type="checkbox" value={"Rajdhani"} />
            <span>Rajdhani (1A)</span>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" value={"Shatabdi"} />
            <span>Shatabdi (2A)</span>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" value={"Vaishali"} />
            <span>Vaishali (3A)</span>
          </div>
        </div>
      </div>
      <div className={styles.timeFilter}>
        <h3>Departure Time</h3>
        <div>
          <div className={styles.checkBox}>
            <input type="checkbox" value={"0:00-6:00"} />
            <span>0:00-6:00</span>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" value={"6:00-12:00"} />
            <span>6:00-12:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
