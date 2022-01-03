import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './redux/counterSlice';

function App() {
  //counterSliceで設定したcountの値を取得
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>UP</button>
      <button onClick={() => dispatch(decrease())}>DOWN</button>
    </div>
  );
}

export default App;
