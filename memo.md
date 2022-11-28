리액트는 Single Page Application

애플리케이션의 수요가 늘었다 -> 데이터가 많다.
데이터를 바꾸면 화면이 바뀐다.

리액트의 필요성을 느끼는 게 중요하다.

검색엔진 노출에 불리하다.

웹은 HTML CSS JS만 읽을 수 있다.
리액트로 프로그래밍 하더라도 JS가 결과물로 나오고 JS로 HTML CSS를 만든다.

리액트는 데이터 중심으로 움직인다.

- component
  - 데이터 = state
  - 화면 = return

ReactDOM.render() v17
ReactDOM.createRoot() v18

- 객체를 함부로 바꾸지 마라, 복사해라 (불변성)
  - pop, push, shift, unshift, splice - X
  - concat, slice, setState, [...arr, +]- O

감잡기 : 웹사이트에서 state 찾기. (한 화면에서 바뀌는 것)

node는 서버가 아니라 자바스크립트 실행기다.

webpack은 여러가지 파일을 하나의 js 파일로 합쳐주면서, 동시에 최신 문법도 옛 부라우저에서 동작하게 해준다.

babel은 JSX를 원문법으로 바꿔준다.

- 컴포넌트 리렌더링 : state 변경, props 변경, 부모 컴포넌트 리렌더링(memo로 예방)
  - memo 사용하면 개발자도구에서 이름이 제대로 안 뜨므로 displayName 이용.

자식 컴포넌트에서 props를 직접 변경하지말고 state로 만든 후에 state를 바꿔라.
