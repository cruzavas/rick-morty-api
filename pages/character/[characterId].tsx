import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Paper, Grid, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material/';
import { ICharacter } from '@/interfaces/ICharacter';

const Character = () => {
    const router = useRouter()
    const { characterId } = router.query
    
    const [character, setCharacter] = useState<ICharacter>({
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      image: '',
      url: ''
    });

    const getCharacter = async () => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        const data = await res.json();
        
        setCharacter(data);
    }
    
    useEffect(() => {
        getCharacter();
    }, [])

  return (
    <div className="root">
      <Paper elevation={3}  sx={{ height: '30em' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display:'flex', justifyContent: 'center' }}>
          <Avatar
            alt={ character.name }
            src={ character.image }
            sx={{ width: 220, height: 220 }}
          />
        </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}><List>
            <ListItem>
              <ListItemText primary={ `Name: ${character.name}` } sx={{ textAlign: 'center' }}/>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={ `Specie: ${character.species}` }  sx={{ textAlign: 'center' }}/>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={ `Gender: ${character.gender}` }  sx={{ textAlign: 'center' }}/>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={ `Status: ${character.status}` }  sx={{ textAlign: 'center' }}/>
            </ListItem>
            <Divider />
          </List>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Character
