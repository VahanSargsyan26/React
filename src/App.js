import logo from './logo.svg';
import './App.css';
import MyFunc from './text';
import Id from './user';
import { useState } from 'react';

function App() {
  const [val, setValue] = useState("");
  const [count, setItem] = useState(0);
  const [textID, setId] = useState("");
  const [rangeValue, setVal] = useState(0);
  <div>{textID}</div>
  return (
    <div className="App">

      <MyFunc name="Armenia" fullName="Republic of" age="2800"/>

      <button type="submit" className='btn' onClick={() => {
          alert("SOS");
        }}>Warning</button>
        
      <form>

        <input type="text" value={val} onChange={(evt) => {
          setValue(evt.target.value)
        }}/>

        <p>{val}</p>

      </form>
      <em>Simple calculator</em>
      <hr/>

      <div className='btns'>

      <button onClick={() => {
        setItem(count + 1);
      }}>+1</button>

      <button onClick={() => {
        setItem(count - 1);
      }}>-1</button>

      <button onClick={() => {
        setItem(count * 2);
      }}>x2</button>

      <button onClick={() => {
        setItem(count / 2);
      }}>/2</button>
      
      </div>

      <h4>{count}</h4>
      
      <button onClick={() => {
        setId(<Id />);
      }}>Generate ID</button>

      <div>{textID}</div>

      <label>
        <p>{rangeValue}</p>
        <input type='range' name="volume" min="0" max="100" onChange={(evt) => {
          setVal(evt.target.value)
        }}/>
      </label>

    </div>
  )
}

export default App;
