const React = require('react');
const { useState, useRef } = React;

const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 9);
};

const GuGuDan = () => {
  const [first, setFirst] = useState(generateRandomNumber());
  const [second, setSecond] = useState(generateRandomNumber());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  const CORRECT = '정답';
  const WRONG = '땡';

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(value + CORRECT);
      setFirst(generateRandomNumber());
      setSecond(generateRandomNumber());
      setValue('');
      inputEl.current.focus();
    } else {
      setResult(WRONG);
      setValue('');
      inputEl.current.focus();
    }
  };

  return (
    <div>
      <div>
        {first} 곱하기 {second} = ?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type='number'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

module.exports = GuGuDan;
