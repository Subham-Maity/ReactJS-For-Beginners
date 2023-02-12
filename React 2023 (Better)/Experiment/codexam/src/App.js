import './App.css';
import  Student  from './components/Student';

function App() {
  return (
    <div className="App">
    <Student 
    name="John"
    age={20} />
    </div>
  );
}

export default App;
