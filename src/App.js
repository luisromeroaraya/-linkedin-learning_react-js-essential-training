import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`it's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`it's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}.</h1>
      <button onClick={() => setEmotion("happy")}>Make happy</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
      <button onClick={() => setSecondary("crabby")}>Make crabby</button>
    </>
  )
}

export default App;
