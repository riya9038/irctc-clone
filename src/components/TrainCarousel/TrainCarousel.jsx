import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TrainCarousel.module.css";

export default function TrainCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: "10px",
  };

  const recentSearches = [
    {
      from: { code: "CBE", name: "COIMBATORE" },
      to: { code: "BRC", name: "VADODARA JN" },
      date: "Tue 28 Dec 2025",
      classType: "ALL CLASSES",
    },
    {
      from: { code: "NDLS", name: "NEW DELHI" },
      to: { code: "PNBE", name: "PATNA JN" },
      date: "Mon 17 Mar 2025",
      classType: "ALL CLASSES",
    },
    {
      from: { code: "PRYJ", name: "PRAYAGRAJ" },
      to: { code: "HW", name: "HARIDWAR" },
      date: "THU 20 Mar 2025",
      classType: "ALL CLASSES",
    },
    {
      from: { code: "MAS", name: "CHENNAI CENTRAL" },
      to: { code: "SBC", name: "BENGALURU" },
      date: "Sat 22 Mar 2025",
      classType: "AC 3 TIER",
    },
    {
      from: { code: "CSTM", name: "MUMBAI CST" },
      to: { code: "HWH", name: "HOWRAH JN" },
      date: "Sun 23 Mar 2025",
      classType: "SLEEPER",
    },
  ];
  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.heading}>Recent searches</h2>
      <Slider {...settings} className={styles.carousel}>
        {recentSearches.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.trainRoute}>
              <span className={styles.stationCode}>{card.from.code}</span>
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>
              <span className={styles.stationCode}>{card.to.code}</span>
            </div>
            <div className={styles.stationNames}>
              <span>{card.from.name}</span>
              <span>{card.to.name}</span>
            </div>
            <div className={styles.tripDetails}>
              <span className={styles.date}>{card.date}</span>
              <span className={styles.classType}>{card.classType}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
