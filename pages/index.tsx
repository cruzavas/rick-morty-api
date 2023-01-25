//"use client";

import { useState, useEffect  } from 'react';
import ImgCard from '@/components/imgCard';
import { Grid, Pagination, Box, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from "next/router";

import style from '../styles/Home.module.css'

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface Data {
  info: Info,
  results: Result[]
}

export default function Home() {
  const [page, setPage] = useState(1);
  // const [info, setInfo] = useState(null);
  // const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { data } = useQuery(
    ["characters", page],
    async () => {
      setLoading(true);
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();

      setLoading(false);
      return data;
    },
    {
      keepPreviousData: true,
    }
  );

  const info = data?.info;
  const characters = data?.results;

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push('/', undefined, { shallow: true });
  }

  return (
    <>
      <div className={style.root}>
        {
          !info ? <h2>No profile data</h2> :
          isLoading ? 
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box> :
          <>
           <Pagination
              count={info["pages"]}
              variant='outlined'
              color='primary'
              className='pagination'
              page={page}
              onChange={handlePaginationChange}
              sx={{ margin: '2%'}}
            />
            <Grid container spacing={0} sx={{margin: '2% 0 0 0'}}>
              {
                characters.map((character: Result) => (
                <Grid item xs={12} sm={6} md={6} lg={4} className={style.cardGrid} key={ character.id }>
                  <ImgCard id={ character.id }
                  name={ character.name }
                  specie={ character.species }
                  image={ character.image } />
                </Grid>
                ))
              }
            </Grid>
            <Pagination
              count={info["pages"]}
              variant='outlined'
              color='primary'
              className='pagination'
              page={page}
              onChange={handlePaginationChange}
              sx={{ margin: '2%'}}
            />
         </>
        }
      </div>
    </>
  )
}
