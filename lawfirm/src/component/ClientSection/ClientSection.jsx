import React from "react";
import styles from "./ClientSection.module.css"
import arrow from "./../../assests/arrow.svg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import clien1 from "../../assests/client1.svg";
import clien2 from "../../assests/client2.svg";
import clien3 from "../../assests/client3.svg";

export default function ClientSection(){

    return (<div style={{marginTop:"100px"}}>
        <div className={styles.heading}>
        <div className={styles.textContent}>
        <h1>What says our</h1>
        <h1>happy Clients</h1>
        </div>
        <img src={arrow} alt="button"/>
        </div>
        <div className={styles.clientWrapper}>
        <Card sx={{ maxWidth: 345 }} style={{background:"black",border:"2px solid gray",borderRadius:"10px"}}>
      <CardMedia
        sx={{ height: 101,
        width:101 }}
        image={clien1}
        title="client"
      />
      <CardContent>
        <div style={{color:"white"}}>
            <h3>Jane Cooper</h3>
            <h4>Ceo of Hunt</h4>
        </div>
        <Typography variant="body2" color="gray">
        Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia
        consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{background:"black",border:"2px solid gray",borderRadius:"10px"}}>
      <CardMedia
        sx={{ height: 101,
        width:101 }}
        image={clien2}
        title="client"
      />
      <CardContent>
        <div style={{color:"white"}}>
            <h3>Devon Lane</h3>
            <h4>Ceo of Hunt</h4>
        </div>
        <Typography variant="body2" color="gray">
        Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia
        consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{background:"black",border:"2px solid gray",borderRadius:"10px"}}>
      <CardMedia
        sx={{ height: 101,
        width:101 }}
        image={clien3}
        title="client"
      />
      <CardContent>
        <div style={{color:"white"}}>
            <h3>Robert Fox</h3>
            <h4>Ceo of Hunt</h4>
        </div>
        <Typography variant="body2" color="gray">
        Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia
        consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
    </Card>
    
        </div>


    </div>)
}