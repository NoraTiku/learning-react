import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';


const App = () => {
  return (
    <>
  <h1>React app working!!!</h1>
  <h1>These two lines are examples of react fragment in JSX</h1>
  <Greetings  name = 'Joe' />
  <Greetings name = 'Marry' />
  <Greetings name = 'Jacky' />

  </>
  );
}

export default App;
