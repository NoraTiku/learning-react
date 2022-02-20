import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';


const App = () => {
  return (
    <>
  <h1>React app working!!!</h1>
  <h1>These two lines are examples of react fragment in JSX</h1>
  <Greetings  
      name = 'Joe' 
  favoriteNumber= {1}
  
  />
  <Greetings 
     name = 'Marry' 
     favoriteNumber= {25}
  
  />

  <Greetings 
     name = 'Jacky' 
     favoriteNumber= {30}
  />

  </>
  );
}

export default App;

