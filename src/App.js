import { useState } from 'react';
import './App.css';

function App() {
  const [fcount, setFcount] = useState(localStorage.getItem("fcount") || 0);
  const [ecount, setEcount] = useState(localStorage.getItem("ecount") || 0);

  const temp = { "Fresher Interviews": fcount, "Experienced Interviews": ecount }

  const increment = (type) => () => {
    type === "Fresher Interviews" ?
    setFcount(prev => prev + 1):
    setEcount(prev => prev + 1)

    localStorage.setItem(
      type === "Fresher Interviews" ? "fcount" : "ecount",
      type === "Fresher Interviews" ? fcount + 1 : ecount + 1,
    )
  }

  const decrement = (type) => () => {
    type === "Fresher Interviews" ?
    setFcount(prev => prev - 1):
    setEcount(prev => prev - 1)

    localStorage.setItem(
      type === "Fresher Interviews" ? "fcount" : "ecount",
      type === "Fresher Interviews" ? fcount - 1 : ecount - 1,
    )
  }

  return (
    <div className="App">
      {Object.entries(temp).map(row => {
        return <div className='card'>
          <p>{row[0]} : {row[1]}</p>
          <span className='button-container'>
            <button className='button' onClick={increment(row[0])}>+</button>
            <button className='button' onClick={decrement(row[0])}>-</button>
          </span>
        </div>
      })}
    </div>
  );
}

export default App;
