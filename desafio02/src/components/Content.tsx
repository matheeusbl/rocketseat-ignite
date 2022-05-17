import React from 'react';

import { GenreResponseProps } from '../@types/GenreResponseProps';
import { MovieProps } from '../@types/MovieProps';
import { api } from '../services/api';
import { MovieCard } from './MovieCard';

import '../styles/content.scss';

type ContentProps = {
  selectedGenreId: number;
}

export function Content({ selectedGenreId }: ContentProps) {
  const [movies, setMovies] = React.useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = React.useState<GenreResponseProps>({} as GenreResponseProps);

  React.useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (<div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>)
}