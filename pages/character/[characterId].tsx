import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    url: string;
  }

const Character = () => {
    const router = useRouter()
    const { characterId } = router.query
    
    const [character, setCharacter] = useState({});

    const getCharacter = async () => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        const data = await res.json();
    
        console.log(data);

        setCharacter(data);
    }
    
    useEffect(() => {
        getCharacter();
    }, [])

  return (
    <div>
      <p>Algo</p>
    </div>
  )
}

export default Character
