import React from "react";

import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className={styles.socialMedia}>
        <p>Get Connected with us on social networks</p>
        <div className={styles.socialMediaIcons}>
          <FaFacebook className={styles.icon} />
          <FaWhatsapp className={styles.icon} />
          <FaYoutube className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaLinkedin className={styles.icon} />
          <FaTelegram className={styles.icon} />
          <FaTwitter className={styles.icon} />
        </div>
      </div>

      <div className={styles.links}>
        <div>
          <a>IRCTC Trains</a>
        </div>

        <div>
          <a>General Information</a>
        </div>
        <div>
          <a>Important Information</a>
        </div>
        <div>
          <a>Agents</a>
        </div>
        <div>
          <a>Enquiry</a>
        </div>
        <div>
          <a>How To</a>
        </div>
        <div>
          <a>IRCTC eWallet</a>
        </div>
        <div>
          <a>IRCTC Official App</a>
        </div>
        <div>
          <a>Advertise with us</a>
        </div>
        <div>
          <a>Refund Rules</a>
        </div>
        <div>
          <a>Person With Disability Facilities</a>
        </div>
        <div>
          <a>For Newly Migrated Agents</a>
        </div>
        <div>
          <a>Mobile Zone</a>
        </div>
        <div>
          <a>Policies</a>
        </div>
        <div>
          <a>Ask Disha ChatBot</a>
        </div>
        <div>
          <a>About Us</a>
        </div>
      </div>
    </footer>
  );
}
