import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState(0)
  const [low, setLow] = useState(0)
  const [high, setHigh] = useState(0)

  function calculate() {
   const lowResult = (220 - age) * 0.85
   const highResult = (220 - age) * 0.65
   setLow(lowResult)
   setHigh(highResult)
  }
  return (
    <div id='container'>

     <h2>Heart Rate Calculator</h2>
     <form>
      <div>
        <label>Age</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
      </div>
      <div id='rates'>
        <label>Heart Rate Limits</label>
        <output>{low}-{high}</output>
      </div>
      <button type="button" onClick={calculate}>Calculate</button>

     </form>
    </div>
  );
}

export default App;
