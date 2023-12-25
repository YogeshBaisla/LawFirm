import React from "react";
import styles from "./Whychoose.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mail from "../../assests/mail.svg"

export default function Whychoose(){

    return (<div style={{marginTop:"100px"}}>
        <h1 className={styles.heading}>Why Choose us?</h1>
        <div className={styles.wrapper}>
        <Card sx={{ maxWidth: 345 }} style={{background:"black",border:"2px solid gray",borderRadius:"10px"}}>
      <CardMedia
        sx={{ height: 101,
        width:101 }}
        image={mail}
        title="98% Success Rate"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
        98% Success Rate
        </Typography>
        <Typography variant="body2" color="gray">
        Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia
        consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
      <CardActions>
        <button className={styles.readButton}>Read More</button>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 345 }} style={{background:"black",border:"2px solid gray",borderRadius:"10px"}}>
      <CardMedia
        sx={{ height: 101,
        width:101 }}
        image={mail}
        title="100% Success Rate"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
        100% Success Rate
        </Typography>
        <Typography variant="body2" color="gray">
        Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia
        consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
      <CardActions>
        <button className={styles.readButton}>Read More</button>
      </CardActions>
    </Card>
   
    <Card sx={{ maxWidth: 345 }} style={{background:"black",border:"2px solid gray",borderRadius:"10px"}}>
      <CardMedia
        sx={{ height: 101,
        width:101 }}
        image={mail}
        title="100% Success Rate"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
        100% Success Rate
        </Typography>
        <Typography variant="body2" color="gray">
        Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia
        consequatduis enim velit mollit Exer.
        </Typography>
      </CardContent>
      <CardActions>
        <button className={styles.readButton}>Read More</button>
      </CardActions>
    </Card>
   
        </div>
    </div>)
}