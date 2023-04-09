import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarColumn} center`}>
        <div className={`${styles.navbarInner} center`}>
          <div className={`${styles.navLeft}`}>Students who made this</div>
          <div className="center">
          <a href="/" className={`${styles.navLink}`}>
              Kamlakshi Meena
            </a>
            <a href="/" className={`${styles.navLink}`}>
              Patel Aryan
            </a>
            <a href="/" className={`${styles.navLink}`}>
              Priti Kumari
            </a>
          </div>
          <div>
            <span>
              <a href="#facebook" className="fab fa-facebook-square">
                {" "}
              </a>
            </span>
            <span>
              <a href="#linkedin" className="fab fa-twitter">
                {" "}
              </a>
            </span>
            <span>
              <a
                href="#instagram"
                className="fab fa-instagram"
                style={{ color: "black" }}
              >
                {" "}
              </a>
            </span>
            <span>
              <a href="#pinterest" className="fab fa-pinterest">
                {" "}
              </a>
            </span>
          </div>
          {/* </div> */}
        </div>
        <div className={`${styles.footerText} center`}>
          <p>
          The BTech exploratory project (4th semester) for students of Electrical.
          More content to add
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Footer;
