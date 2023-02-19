import './App.css';
import Comp from './components/Comp';
import  Student  from './components/Student';

function App() {
  return (
    <div className="App">
    <Student 
    name="John"
    age={20} />
    <Comp/>
    </div>

  );
}

export default App;
