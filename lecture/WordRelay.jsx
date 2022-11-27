const { useState, useRef } = require('react');
const React = require('react');

const WordRelay = () => {
  const [word, setWord] = useState('김사람');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const CORRECT = '딩동댕';
  const WRONG = '땡';

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult(CORRECT);
      setWord(value);
      setValue('');
    } else {
      setResult(WRONG);
    }
    inputRef.current.focus();
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={(e) => setValue(e.target.value)} value={value} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
