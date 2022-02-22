import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddMovie from "./components/AddMovie/AddMovie";
import Footer from "./components/Footer/Footer";
import Details from "./components/MovieCard/Details";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import { moviesData } from "./constants/Data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);
  const handleAdd = (movie) => {
    setMovies([...movies, movie]);
  };
  const deleteMovie = (id) => {
    setMovies(movies.filter((el) => el.id !== id));
  };
  return (
    <div className="App">
      <Navbar setText={setText} setRate={setRate} rate={rate} />
      <Switch>
        <Route exact path="/">
          <AddMovie handleAdd={handleAdd} />
          <MovieList
            movies={movies}
            text={text}
            rate={rate}
            deleteMovie={deleteMovie}
          />
        </Route>
        <Route path="/Details/:id" component={Details} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
