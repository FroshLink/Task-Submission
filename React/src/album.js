import React from "react";
import { Card } from "react-bootstrap"
import { Button } from 'react-bootstrap';
import "./App.css"


const Album=({title, thumbnailUrl})=>{ 
    
    return (
      
      <Card className="card" style={{ width: '18rem' }, {alignContent: 'center'}, {background: "#fdfaf6"}}>
        <Card.Img className="imgUrl" variant="top" src={thumbnailUrl} />
        <Card.Body>
         <Card.Title>{title}</Card.Title>
         <Button className="center" href="#"variant="outline-secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );        
}

export default Album


