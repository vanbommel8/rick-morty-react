import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";




export default function Character({ name, image, status, gender, species, origin }) {

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Rick & Morty Character'
          height='300'
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <strong>Status:</strong> {status}<br />
            <strong>Species:</strong> {species}<br />
            <strong>Gender:</strong> {gender}<br />
            <strong>Origin:</strong> {origin.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>

  );
}
