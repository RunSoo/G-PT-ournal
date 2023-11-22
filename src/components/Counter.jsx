import { useState } from "react";
import viteLogo from "/vite.svg";

function Counter() {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setCount(count - 1);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setUserInput("");
      const num = Number(userInput);
      if (Number.isInteger(num)) setCount(num);
    }
  };

  return (
    <>
      <div>현재 카운트: {count}</div>
      <div>
        <div>카운트 값 입력</div>
        <input
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={handleEnter}
        ></input>
      </div>
      <div>
        <div>버튼:</div>
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
      </div>
    </>
  );
}

export default Counter;
