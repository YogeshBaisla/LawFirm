import React from "react";
import styles from "./Hero.module.css";
import lawyerimg from "./../../assests/guy.svg"
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Hero(){

    return (
        <div className={styles.wrapper}>
            <div className={styles.textContent}>
                <div className={styles.heading}>
                <h1 >You don’t have to </h1>
                <h1>Fight them Alone.</h1>
                </div>
                <div className={styles.subheading}>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,</p> 
                <p>curabitur sodales conubia ut inceptos faucibus himenaeos tortor</p>
                <p>eget, hac massa gravida arcu interdum proin curae.</p>
                </div>
                <div>
                <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        placeholder="Enter your eamil address"
        className={styles.email}
      />
      <button className={styles.emailbutton}>Submit</button>
      </div>
            </div>
            <img src={lawyerimg} alt="lawyer"/>
        </div>
    )

}