import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { ICharacter } from '@/interfaces/ICharacter';

const ImgCard = ({ character }: { character : ICharacter }) => {
  return (
    <Card sx={{ maxWidth: 345, padding: 0 }}>
      <CardMedia
        component="img"
        alt={ character.name }
        height="300"
        image={ character.image }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { character.name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { character.species }
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/character/${character.id}`} style={{color: 'white', textDecoration: 'none'}}>
         <Button variant="contained" size="medium" sx={{backgroundColor: 'orangered', '&:hover': {backgroundColor: 'white', color: 'orangered'}}}>
          Learn More
         </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ImgCard
