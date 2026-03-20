//"use client";

import { useState, SetStateAction  } from 'react';
import ImgCard from '@/components/imgCard';
import { Grid, Pagination, Box, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from "next/router";
import { ICharacter } from '@/interfaces/ICharacter';
import style from '../styles/Home.module.css'

export default function Home() {
  const [page, setPage] = useState(1);
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

  function handlePaginationChange(e: any, value: SetStateAction<number>) {
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
                characters.map((character: ICharacter) => (
                <Grid item xs={12} sm={6} md={6} lg={4} className={style.cardGrid} key={ character.id }>
                  <ImgCard character={ character } />
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
