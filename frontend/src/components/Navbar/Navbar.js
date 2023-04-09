import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ hamActive, setHamActive }) => {
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntY3A8wM9MtyPqd13CaOdNriuNFh1rmHGOA&usqp=CAU";
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <img src={logo} alt="logo" style={{ height: "57px", width: "110px" }} className={styles.brand} />
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <h1>Secure Attendance through Face Recognition</h1>
            {/* <a href="/" className={`${styles.nav} center`}>
              Departments
            </a>
            <a href="/" className={`${styles.nav} center`}>
              More ways to shop
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Help
            </a> */}
          </div>
          <div>
            <a href="/login" className={styles.login}>
              Log in
            </a>
            <a href="/">
              <button className={styles.signup}>Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
