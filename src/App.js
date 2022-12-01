import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store/index';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy())
  }

  const subtractBy = () => {
    dispatch(actions.subtractBy())
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> 
      <button onClick={addBy}>Add by 10</button>
      <button onClick={subtractBy}>Subtract by 10</button>
    </div>
  );
}

export default App;
