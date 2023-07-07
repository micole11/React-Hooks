import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import { useState } from 'react';


function App() { const [movies, setMovies] = useState([
  {
    title: 'Rango',
    description: 'Rango is a 2011 American computer-animated Western comedy film directed by Gore Verbinski from a screenplay by John Logan.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_FMjpg_UX1000_.jpg' ,
    rating: 9.1
  },
  {
    title: 'Sonic the Hedgehog',
    description: 'Sonic the Hedgehog 2 is a 2022 action-adventure comedy film based on the video game series published by Sega, and the sequel to Sonic the Hedgehog (2020).',
    posterURL:  'https://pbs.twimg.com/media/FNlXBt1VkAQ5z96.jpg',
    rating: 9.0
  },
  {
    title: 'Avengers_Endgame',
    description: 'Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers.',
    posterURL:   'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg',
    rating: 8.0
  }
]);
const [filterTitle, filterbyTitle] = useState('');
const [filterRate, filterbyRate] = useState(0);

function handleFilterTitleChange(event) {
  filterbyTitle(event.target.value);
}

function handleFilterRateChange(event) {
  filterbyRate(parseFloat(event.target.value));
}

function handleAddMovie() {
  const newMovie = {
    title: 'New Movie',
    description: 'A new movie has been added to the list!',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_FMjpg_UX1000_.jpg',
    rating: 8.5
  };
  setMovies([...movies, newMovie]);
}
  return (
    <div style={{ textAlign : 'center'}}>
    <button onClick={handleAddMovie}>Add Movie</button>
    <Filter
        filterbyTitle={handleFilterTitleChange}
        filterbyRate={handleFilterRateChange}
      />
      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate}/>
    </div>
  );
}

export default App;