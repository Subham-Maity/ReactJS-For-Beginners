import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Movie />
        </div>
    </div>
  );
}

export default App;
