import React, { useState } from 'react';
import styled from 'styled-components';
/* 매커니즘을 이해하는 걸 목표로 */

function App() {

  const [text, setText] = useState ('Hello');
  const onSubmit = () => {
    alert('submitted');
  }
  /* 태그 정의 -> 이벤트 함수 가져오기
     const 지향
     첫 단어는 소문자, 다음 단어 시작은 모두 대문자
  */
  /* const fun = function(){} 
     const fun = () => {}  
  */

  const onKeyUp = (event) => {
    if (event.keyCode == 13) {
      onSubmit();
    }
    /* 함수 안에 함수 사용 & 조건문 
       엔터키를 쳤을 때, onSubmit 함수 실행
       () 안에 event 사용하여 event 가능
    */
  }

  //let text = 'Hello';
  const updateText = () => {
    //text = 'Bye';
    setText('Bye')
    console.log(text);
  }
  /*
  Update 버튼을 누르면 Hello가 Bye로 바뀐다. 화면 상에서는 그대로 Hello이지만 콘솔창에서 바뀜
  중요한 건 text 사용 방법과 함수를 return에서 사용하는 방법
   */

  return (
    <div>
      <input onKeyUp={onKeyUp}></input>
      <button onClick={onSubmit}>Submit</button>
     
      <br /><br />
     
      <span>{text}</span>
      <button onClick={updateText}>Update</button>

    </div>
    );
  /* <br></br>를 <br />로 표현
     태그 안에 함수 가져오기 : {}
  */
  /* return 안에 html*/
}

export default App;