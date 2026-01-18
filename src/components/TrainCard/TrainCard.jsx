import React from "react";
import styles from "./TrainCard.module.css";
import { useNavigate } from "react-router-dom";

export default function TrainCard({ data }) {
  const navigate = useNavigate();
  let {
    train_number,
    train_name,
    source,
    destination,
    price,
    days_of_operation,
    arrival_time,
    departure_time,
  } = data;

  const handleDetails = () => {
    navigate("/train-details/" + train_number);
  };

  return (
    <section className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2>
          {train_name}({train_number})
        </h2>
        <p>
          Runs On:&nbsp;
          {days_of_operation.map((day) => (
            <span>{day}&nbsp;</span>
          ))}
        </p>
        <p>Train Schedule</p>
      </div>
      <div className={styles.cardDetails}>
        <div>
          <strong>{departure_time}</strong>|<p>{source}</p>
        </div>
        <div>
          <strong>{arrival_time}</strong>|<p>{destination}</p>
        </div>
      </div>
      <div className={styles.trainType}>
        {Object.keys(price).map((type) => (
          <div>
            <button>
              <h3>{type}</h3>
              <p>₹ {price[type]}</p>
            </button>
          </div>
        ))}
      </div>
      <div className={styles.actionBtns}>
        <button>Book</button>
        <button onClick={handleDetails}>Other Details</button>
      </div>
    </section>
  );
}
