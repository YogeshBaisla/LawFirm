import React from "react";
import styles from "./NavBar.module.css"
import logo from "../../assests/logo.svg"

export default function NavBar(){

    return (
        <div className={styles.outterwrapper}>
            <img src={logo} alt="logo"/>
            <div className={styles.innerwrapper}>
            <h3>Home</h3>
            <h3>Attorneys</h3>
            <h3>Practice Areas</h3>
            <h3>About Us</h3>
            </div>
            <button className={styles.button}>Contact Now</button>
        </div>
    )

}