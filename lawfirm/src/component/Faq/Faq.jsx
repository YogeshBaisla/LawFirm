import React from "react";
import styles from "./Faq.module.css"

export default function Faq(){

    return (<div style={{marginTop:"100px"}}>

        <div className={styles.wrapperone}>
            <div>
                <h1 style={{color:"white"}}>FAQ</h1>
                <p style={{color:"gray"}}>Amet minim mollit non deserunt ullamco est sit</p>
                <p style={{color:"gray"}}>aliqua dolor do amet sint. </p>
            </div>
            <div className={styles.wrappertwo}>
                <h3 style={{color:"white"}}>Do I need a personal injury report?</h3>
                <p style={{color:"gray"}}>Amet minim mollit non deserunt ullamco est sit</p>
                <p style={{color:"gray"}}>aliqua dolor do amet sint. Velit officia consequatduis</p>
                <p style={{color:"gray"}}>enim velit mollit Exer. Amet minim mollit non deserunt</p>
                <p style={{color:"gray"}}>ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
            <div className={styles.line}></div>
            <div className={styles.wrapperthree}>
                <h3 style={{color:"white"}}>How much is my case worth? </h3>
                <div className={styles.circle}>+</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.wrapperthree}>
            <h3 style={{color:"white"}}>What should I do right after car accidect</h3>
                <div className={styles.circle}>+</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.wrapperthree}>
            <h3 style={{color:"white"}}>How much is my case worth?</h3>
                <div className={styles.circle}>+</div>
            </div>
            </div>
        </div>
    </div>)
}