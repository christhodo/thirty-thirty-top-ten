export interface Videogame {
  id: string;
  title: string;
  platform: string;
  rating: null;
  released: string;
  genre: string;
}

export const emptyVideogame = {
  id: '',
  title: '',
  platform: '',
  rating: null,
  released: '',
  genre: '',
};
