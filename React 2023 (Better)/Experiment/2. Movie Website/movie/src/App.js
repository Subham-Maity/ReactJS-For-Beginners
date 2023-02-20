import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Movie Website</h1>
      </header>
      <main className="main">
        {movies.map((element) => (
            <Movie 
            title={element.Title} 
            year={element.Year} 
            img={element.Poster} 
            />
        ))}
      </main>
      <footer className="footer">
        <p>© 2023 Movie Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;



