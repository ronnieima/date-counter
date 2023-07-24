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

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="counter">
      <Range step={step} setStep={setStep} />
      <FieldWithCounterButtons count={count} step={step} setCount={setCount} />
      <DateCounter count={count} />
      {(count !== 0 || step !== 1) && <button onClick={reset}>Reset</button>}
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

function Range({ step, setStep }) {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      ></input>
      <span>{step}</span>
    </div>
  );
}

function FieldWithCounterButtons({ count, step, setCount }) {
  return (
    <div>
      <button onClick={() => setCount((count) => count - step)}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setCount((count) => count + step)}>+</button>
    </div>
  );
}
