import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function App(){
  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);

  useEffect(() => {
    console.log(count)
  }, [count, kossie])
  // [count, kossie]일 때 실행

  useEffect(() => {
    console.log('first rendering')
  }, []);
 // 처음만 랜더링

  const increment = () => {
    setCount(count +1);
  };

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setKossie(kossie +1)}>Click1</button>
    </div>
  );
}

export default App;

// useEffect를 하면 렌더링이 될 때마다 리액트에게 어떤 일을 실행시켜달라고 할 수 있다.