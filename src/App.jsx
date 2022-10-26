import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>−</button>
      <div className='box'>
        <input type="text" onChange={(e) => setIncrementAmount(e.target.value)} value={ incrementAmount} />
        <button onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)))}>追加</button>
      </div>
    </div>
  )
}

export default App
