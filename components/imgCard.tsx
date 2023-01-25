import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ImgCard = ({ id, name, specie, image }: { id: number, name: string, specie: string, image: string }) => {
  return (
    <Card sx={{ maxWidth: 345, padding: 0 }}>
      <CardMedia
        component="img"
        alt={ name }
        height="300"
        image={ image }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { specie }
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="medium" sx={{backgroundColor: 'orangered'}}>
          <Link href={`/character/${id}`} style={{color: 'white', textDecoration: 'none'}}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ImgCard
