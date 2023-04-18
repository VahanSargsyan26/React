import logo from './logo.svg';
import './App.css';
import MyFunc from './text';
import Id from './user';
import { useState } from 'react';
import Replace from './replace';
import EmailForm from './validation';
import WordSearch from './search'

function App() {
  const [text, setText] = useState("world")
  return(
  // const [val, setValue] = useState("");
  // const [count, setItem] = useState(0);
  // const [textID, setId] = useState("");
  // const [rangeValue, setVal] = useState(0);
  // <div>{textID}</div>
  // return (
  //   <div className="App">

  //     <MyFunc name="Armenia" fullName="Republic of" age="2800"/>

  //     <button type="submit" className='btn' onClick={() => {
  //         alert("SOS");
  //       }}>Warning</button>
        
  //     <form>

  //       <input type="text" value={val} onChange={(evt) => {
  //         setValue(evt.target.value)
  //       }}/>

  //       <p>{val}</p>

  //     </form>
  //     <em>Simple calculator</em>
  //     <hr/>

  //     <div className='btns'>

  //     <button onClick={() => {
  //       setItem(count + 1);
  //     }}>+1</button>

  //     <button onClick={() => {
  //       setItem(count - 1);
  //     }}>-1</button>

  //     <button onClick={() => {
  //       setItem(count * 2);
  //     }}>x2</button>

  //     <button onClick={() => {
  //       setItem(count / 2);
  //     }}>/2</button>
      
  //     </div>

  //     <h4>{count}</h4>
      
  //     <button onClick={() => {
  //       setId(<Id />);
  //     }}>Generate ID</button>

  //     <div>{textID}</div>

  //     <label>
  //       <p>{rangeValue}</p>
  //       <input type='range' name="volume" min="0" max="100" onChange={(evt) => {
  //         setVal(evt.target.value)
  //       }}/>
  //     </label>
  
    <div className='App'>
      <span>
        <button className='btn' onClick={() => {
        const pattern = /world/;
        const replacement = "universe";
        setText(text.replace(pattern, replacement));
      }}>Change World</button>

      <button className='btn' onClick={() => {
        const pattern = /universe/;
        const replacement = "world";
        setText(text.replace(pattern, replacement));
      }}>Change Universe</button>
      </span>
      
      <h2>Hello {text}</h2>

      <EmailForm />
      <WordSearch />
    </div>

      
  )
}

export default App;
