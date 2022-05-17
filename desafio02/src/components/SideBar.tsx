import { Button } from './Button';
import { GenreResponseProps } from '../@types/GenreResponseProps';

import '../styles/sidebar.scss';



type SideBarProps = {
  genres: GenreResponseProps[];
  setGenreIdCallback(id: number): void;
  selectedGenreId: number;
};

export function SideBar({ genres, setGenreIdCallback, selectedGenreId }: SideBarProps) {
  function handleClickButton(id: number) {
    setGenreIdCallback(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}