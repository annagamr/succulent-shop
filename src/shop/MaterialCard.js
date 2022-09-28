import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        height: "22vw", 
        marginRight: "2vw",
        marginLeft: "2vw",
        marginBottom: "2vw"
      };
    return (
    <Card style={cardStyle}>
      <CardMedia
        component="img"
        height="140"
        image={require('../assets/' + props.img)}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Purchase</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
