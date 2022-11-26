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

babel이 JSX를 원문법으로 바꿔준다.

ReactDOM.render(~) v17
ReactDOM.createRoot(~) v18

- 객체를 함부로 바꾸지 마라, 복사해라 (불변성)
  - pop, push, shift, unshift, splice - X
  - concat, slice, setState - O

감잡기 : 웹사이트에서 state 찾기. (한 화면에서 바뀌는 것)
