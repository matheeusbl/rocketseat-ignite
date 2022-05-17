import { useEffect, useState } from 'react';

import { GenreResponseProps } from './@types/GenreResponseProps';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} setGenreIdCallback={setSelectedGenreId} selectedGenreId={selectedGenreId} />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}