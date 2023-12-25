import React from "react";
import styles from "./AreaPractice.module.css";
import image1 from "./../../assests/image1.svg";
import image2 from "./../../assests/image2.svg";
import image3 from "./../../assests/image3.svg";
import image4 from "./../../assests/image4.svg";
import image5 from "./../../assests/image5.svg";
import image6 from "./../../assests/image6.svg";
import Grid from '@mui/material/Grid';
export default function AreaPractice(){

    return (<div className={styles.wrapper}>
        <h1 className={styles.heading}>Area of Practices</h1>
        <Grid  container spacing={0.5}>
        <Grid item xs={6}>
        <div className={styles.Parent}>
        <img src={image1} alt="image1"/>
        <h2 className={styles.imageBox}>BUSINESS LAW</h2>
        </div>  
        </Grid>
        <Grid item xs={6}>
        <div className={styles.Parent}>
        <img src={image2} alt="image2"/>
        <h2 className={styles.imageBox}>Partnership LAW</h2>
        </div>
        </Grid>
        <Grid item xs={6}>
        <div className={styles.Parent}>
        <img src={image3} alt="image3"/>
        <h2 className={styles.imageBox}>REAL ESTATE LAW
</h2>
        </div>
        </Grid>
        <Grid item xs={6}>
        <div className={styles.Parent}>
        <img src={image4} alt="image4"/>
        <h2 className={styles.imageBox}>BUSINESS LAW</h2>
        </div>
        </Grid>
        <Grid item xs={6}>
        <div className={styles.Parent}>
        <img src={image5} alt="image5"/>
        <h2 className={styles.imageBox}>LANDLORD DISPUTES</h2>
        </div>
        </Grid>
        <Grid item xs={6}>
        <div className={styles.Parent}>
        <img src={image6} alt="image6"/>
        <h2 className={styles.imageBox}>ELDER ABUSE</h2>
        </div>
        </Grid>
      </Grid>
        

    </div>)
}