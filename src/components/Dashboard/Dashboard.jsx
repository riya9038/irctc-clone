import React from "react";
import styles from "./Dashboard.module.css";
import TrainCarousel from "../TrainCarousel/TrainCarousel";
import Home from "../Home/Home";

export default function Dashboard() {
  return (
    <>
      <div className={styles.dashboard}>
        <Home />
      </div>
      <TrainCarousel />
    </>
  );
}
