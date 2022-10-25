import React, {useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBird } from './store/birds/birds';
import { addBird } from './store/birds/birds';

function App() {
  const birds = [...useSelector(state => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  
  const dispatch = useDispatch();
  const [birdName, setBirdName] = useState("")

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addBird(birdName))
    setBirdName('');
  };

  return (
    <div className="wrapper">
      <h1>Birds List</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Add Bird</p>
          <input type="text" onChange={e => setBirdName(e.target.value)}
            value={birdName}/>
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              views: {bird.views}
              <button onClick={() => {dispatch(incrementBird(bird.name))}}>
                <span role="img" aria-label="add">
                  +
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
