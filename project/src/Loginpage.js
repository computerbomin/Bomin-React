import React, { useState } from 'reack';
import LoginInput from './LoginInput';
// LoginInput 가져오기

const Loginpage = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // username을 선언 및 초기화 해주고, 변경할 때마다 setUsername 값을 대입한다.

    const getUsername = (value) => setUsername(value);
    const getPassword = (Value) => setPassword(Value);
    // getUsername 함수를 만들어준다. ()는 함수의 기본값을 말한다.
    // getUsername(value)의 값을 위 변수, setUsername에 대입한다.
    // 그럼 setUername()은 getUsername(value)에서 준 값을 가진 setUsername(value)가 된다.

    const pushBtn = () => username && password && console.log('success');
    //pushBtn는 username, password, 'success'출력을 모두 가진 함수이다.
    
    // getUsername, getPassword, pushBtn은 모두 함수이다.

    return(
        // 아래를 반환해서 보여준다.
        <div>
            <LoginInput getUser={getUsername}
                        getPassword={getPassword}
                        pushBtn={pushBtn}>
            </LoginInput>
            {/* LoginInput을 import해서, LoginInput 안의 변수, getUser, getPassword, pushBtn에 Loginpage의 변수를 대입시킨다.*/}
            <p>username : {username || 'no user...'}</p>
            <p>password : {password || 'no password'}</p>
            {/* 위 내용을 출력한다. 위에서 선언해준 username을 출력하거나, username이 없으면 위 문장을 출력한다. */}
        </div>
    )
}

export default Loginpage;