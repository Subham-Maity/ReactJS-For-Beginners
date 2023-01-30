 
import { Function1, Function2, Function3 } from './components/MyComponent';


let name = 'Subham';
function App() {
  return (
    <>
      <div className="container">
        <Function1 />
        <Function2 />
        <Function3 />
        <h1>Hello {name}</h1>
      </div>
    </>
  );
}

export default App;
