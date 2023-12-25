import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assests/logo.svg"
import instalogo from "../../assests/instalogo.svg"
import fblogo from "../../assests/fblogo.svg"
import twitterlogo from "../../assests/twitterlogo.svg"
import pinlogo from "../../assests/pinlogo.svg"

export default function Footer(){

    return ( 
    <div>
    <div className={styles.outterwrapper}>
        <img src={logo} alt="logo"/>
        <div className={styles.innerwrapper}>
        <h3>Home</h3>
        <h3>Attorneys</h3>
        <h3>Practice Areas</h3>
        <h3>About Us</h3>
        </div>
        <div className={styles.logowrapper}>
        <img src={instalogo} alt="instalogo"/>
        <img src={fblogo} alt="fblogo"/>
        <img src={twitterlogo} alt="twitterlogo"/>
        <img src={pinlogo} alt="pinlogo"/>
        </div>
    </div>
    <div className={styles.baseWrapper}>
        <h5>© 2020 Acme. All right reserved.</h5>
        <h5>Privacy Policy</h5>
        <h5>Terms of Service</h5>
        </div>
    </div>
    )
}