import React, { useEffect, useState } from "react";

import styles from "./TrainSearch.module.css";
import ModifySearch from "../../components/ModifySearch/ModifySearch";
import TrainFilter from "../../components/TrainFilter/TrainFilter";
import TrainCard from "../../components/TrainCard/TrainCard";

export default function TrainSearch() {
  const [trainList, setTrainList] = useState([]);

  const fetchAllTrains = async () => {
    try {
      let res = await fetch(
        "https://mocki.io/v1/fbddaaa2-b192-44d8-9dcb-9dc3bf735f98",
      );
      let resJson = await res.json();
      setTrainList(resJson.data);
    } catch (err) {
      console.log(err, "error");
    }
  };
  useEffect(() => {
    fetchAllTrains();
  }, []);

  return (
    <div>
      <ModifySearch />
      <section className={styles.mainContainer}>
        <TrainFilter data={trainList} />
        <div className={styles.trainCardContainer}>
          {trainList.map((train) => (
            <TrainCard data={train} />
          ))}
        </div>
      </section>
    </div>
  );
}
