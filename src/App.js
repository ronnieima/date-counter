import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlePreviousStep() {
    setStep((step) => step - 1);
  }

  function handleNextStep() {
    setStep((step) => step + 1);
  }

  function handlePreviousCount() {
    setCount((count) => count - step);
  }

  function handleNextCount() {
    setCount((count) => count + step);
  }

  return (
    <div className="counter">
      <TextWithCounters
        text="Step"
        counter={step}
        handlers={[handlePreviousStep, handleNextStep]}
      />
      <TextWithCounters
        text="Count"
        counter={count}
        handlers={[handlePreviousCount, handleNextCount]}
      />
      <DateCounter count={count} />
    </div>
  );
}

function DateCounter({ count }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p>
      {count < 0 && `${count} days ago was ${date.toDateString()}`}
      {count === 0 && `Today is ${date.toDateString()}`}
      {count > 0 && `${count} days from today is ${date.toDateString()}`}
    </p>
  );
}

function TextWithCounters({ text, counter, handlers }) {
  return (
    <div className="buttonText">
      <button onClick={handlers[0]}>-</button>
      <span>{`${text}: ${counter}`}</span>
      <button onClick={handlers[1]}>+</button>
    </div>
  );
}
