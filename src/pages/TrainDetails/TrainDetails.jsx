import React, { useEffect, useState } from "react";
import { FaTrain } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./TrainDetails.module.css";

export default function TrainDetails() {
  const params = useParams();
  const [trainDetails, setTrainDetails] = useState({});
  const [trainList, setTrainList] = useState([]);
  const [classType, setClassType] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const navigate = useNavigate();

  const fetchAllTrains = async () => {
    try {
      let res = await fetch(
        "https://mocki.io/v1/fbddaaa2-b192-44d8-9dcb-9dc3bf735f98",
      );
      let resJson = await res.json();
      setTrainList(resJson.data);
      let train = resJson.data.find((train) => train.train_number == params.id);
      setTrainDetails(train);
    } catch (err) {
      console.log(err, "error");
    }
  };

  let {
    train_number,
    train_name,
    source,
    destination,
    price,
    arrival_time,
    departure_time,
  } = trainDetails;

  useEffect(() => {
    fetchAllTrains();
  }, []);

  useEffect(() => {
    setClassType(
      Object.keys(trainDetails).length > 1 &&
        Object.keys(trainDetails.price)[0],
    );
    setSelectedClass(
      Object.keys(trainDetails).length > 1 &&
        Object.keys(trainDetails.price)[0],
    );
  }, [trainDetails]);

  const handleClassType = (classType) => {
    setSelectedClass(classType);
  };
  const baseFare = price?.[selectedClass];
  const serviceCharges = baseFare * 0.05;
  const totalFare = baseFare + serviceCharges;

  return (
    Object.keys(trainDetails).length > 1 && (
      <div className={styles.container}>
        <div className={styles.trainHeader}>
          <FaTrain />
          <h2>
            {train_name}({train_number})
          </h2>
        </div>
        <div className={styles.daysOfOperation}>
          <h4>Days of Operation</h4>
          <div>
            {trainDetails.days_of_operation.map((day) => (
              <button key={day}>{day}</button>
            ))}
          </div>
        </div>
        <div className={styles.trainTracker}>
          <div className={`${styles.station} ${styles.source}`}>
            <button>{source}</button>
            <p>Departure Time: {departure_time}</p>
          </div>

          <div className={`${styles.station} ${styles.destination}`}>
            <button>{destination}</button>
            <p>Arrival Time: {arrival_time}</p>
          </div>
        </div>
        <div className={styles.fareInfo}>
          <h4>Fare Information</h4>
          <div>
            {Object.keys(trainDetails.price).map((classType) => (
              <button
                className={`${selectedClass == classType ? styles.active : ""}`}
                onClick={() => handleClassType(classType)}
              >
                {classType}
              </button>
            ))}
          </div>
          <div className={styles.fareDetails}>
            <div>
              <p>Base Fare:</p>
              <p>{baseFare}</p>
            </div>
            <div>
              <p>Service Charges:</p>
              <p>{serviceCharges}</p>
            </div>

            <div>
              <strong>Total:</strong>
              <strong>{totalFare}</strong>
            </div>
          </div>
          <button className={styles.bookNowBtn}>
            Book Now - {selectedClass}
          </button>
        </div>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    )
  );
}
