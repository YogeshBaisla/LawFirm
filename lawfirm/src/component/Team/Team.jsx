import React from "react";
import styles from "./Team.module.css"
import teamprofile1 from "./../../assests/teamprofile1.svg"
import teamprofile2 from "./../../assests/teamprofile2.svg"
import teamprofile3 from "./../../assests/teamprofile3.svg"
import teamprofile4 from "./../../assests/teamprofile4.svg"
import teamprofile5 from "./../../assests/teamprofile5.svg"
import teamprofile6 from "./../../assests/teamprofile6.svg"
export default function Team(){

    return (<div style={{marginTop:"100px"}}>
        <h1 style={{color:"white"}}>Our Team</h1>
        <div className={styles.outterWrapper}>
            <div className={styles.wrapper}>
            <img src={teamprofile1} alt="team profile"/> 
            <div>
                <h3 style={{color:"white"}}>Danial Def</h3>
                <p style={{color:"gray"}}>301 Cases</p>
            </div>
            
            </div>
            <div className={styles.wrapper} style={{background:"#E3B748"}}>
            <img src={teamprofile2} alt="team profile"/> 
            <div>
                <h3 style={{color:"white"}}>Sanfole</h3>
                <p style={{color:"gray"}}>850 Cases</p>
            </div>
            
            </div>
            <div className={styles.wrapper}>
            <img src={teamprofile3} alt="team profile"/> 
            <div>
                <h3 style={{color:"white"}}>Cesforila</h3>
                <p style={{color:"gray"}}>470 Cases</p>
            </div>
            
            </div>
            <div className={styles.wrapper}>
            <img src={teamprofile4} alt="team profile"/> 
            <div>
                <h3 style={{color:"white"}}>Colleen</h3>
                <p style={{color:"gray"}}>180 Cases</p>
            </div>
            
            </div>
            <div className={styles.wrapper}>
            <img src={teamprofile5} alt="team profile"/> 
            <div>
                <h3 style={{color:"white"}}>Haldone</h3>
                <p style={{color:"gray"}}>212 Cases</p>
            </div>
            
            </div>
            <div className={styles.wrapper}>
            <img src={teamprofile6} alt="team profile"/> 
            <div>
                <h3 style={{color:"white"}}>Nik Jeo</h3>
                <p style={{color:"gray"}}>350 Cases</p>
            </div>
            
            </div>

        </div>
    </div>)
}