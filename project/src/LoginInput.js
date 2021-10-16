import React from 'react';
import styled from 'styled-components';

const LoginInput = (props) => {
    return (
        <div>
            <input onChange={(event) => props.getUser(event.target.value)} />
            {/* 
            onChange 함수 : 변화를 탐지한다. 이벤트는 함수의 형태 값을 전달한다.
            e.target.value : 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있다.
            */}
            <input onChange={(event) => props.getPassword(event.target.value)} />
            <button onClick={props.pushBtn}>Log In</button>
        </div>
    )
}

export default LoginInput;