import React from "react";
import styles from "./NewsLetter.module.css"

export default function NewsLetter(){

    return (<div style={{marginTop:"100px",background:"gray",width:"1245px",height:"358px"}}>
        <h1 style={{color:"white"}}>
        Subscribe Our Newsletter
        </h1>
        <div className={styles.wrapper}>
            <input type="text" placeholder="Name:" style={{width:"300px",height:"50px",marginRight:"10px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}/>
            <input type="text" placeholder="Enter your Email"  style={{width:"300px",height:"50px"}}/>
            <button  style={{width:"100px",height:"55px",marginLeft:"10px",background:"#E3B748",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>Send</button>
        </div>

    </div>)
}