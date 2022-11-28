import React, { useRef, useState } from 'react';

function ResponseCheck() {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작!');
  const [result, setResult] = useState([]);
  const timer = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const averageTime =
    result.length && result.reduce((a, b) => a + b) / result.length;

  const onClickScreen = () => {
    if (state === 'waiting') {
      timer.current = setTimeout(() => {
        setState('now');
        setMessage('클릭!!!');
        startTime.current = Date.now();
        console.log(startTime.current);
      }, Math.floor(Math.random() * 1000) + 2000);
      setState('ready');
      setMessage('초록색이 되면 클릭');
    } else if (state === 'ready') {
      clearTimeout(timer.current);
      setState('waiting');
      setMessage('어허');
    } else if (state === 'now') {
      endTime.current = Date.now();
      setState('waiting');
      setMessage('클릭해서 시작');
      setResult((prev) => [...prev, endTime.current - startTime.current]);
    }
  };

  const onReset = () => {
    setResult([]);
  }

  return (
    <>
      <div id='screen' className={state} onClick={onClickScreen}>
        {message}
      </div>
      <div>평균 시간: {averageTime}ms</div>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

export default ResponseCheck;
