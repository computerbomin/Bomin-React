import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // [변수명, 변수를 업데이트하는 함수명]
    // value값이  const ''이기  때문에 항상 비어있다. const는 변하지 않는 값이기 때문에.
    const onSubmit = () => {
        alert('submitted');
        console.log(username, password);
        // 클릭하면 reflash 된다. 보내주긴 해도 초기화 시키고 싶지 않다면 e.preventDefault 사용
    };
    /*
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    };
    */

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br />
                <input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                //  setPassword를 통해서 password를 업데이트를 시켜주고 이 값이  value에 들어간다.
                //  값 -> setPassword -> password -> input value
                /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );

}

export default App;