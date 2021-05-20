import React, {useState, useEffect} from 'react';
import {Container, Grid, Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import axios from 'axios';

import {baseUrl} from '../../api/baseUrl';
import useStyles from './styles';



const Photos = () => {

  const [photos,setPhotos]= useState([]);

  useEffect(()=> {
      const fetchPhotos= async() => {
        
        const {data}= await axios.get(baseUrl);
        setPhotos(data);
      } 

      fetchPhotos();
  },[])



  const classes= useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {photos.map((photo) => (
              <Grid item key={photo.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={photo.url}
                    title={photo.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {photo.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> 
  );
}

export default Photos;
