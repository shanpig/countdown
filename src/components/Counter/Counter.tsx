import { useEffect, useRef, useState } from "react";
import { SetTimer } from "./Counter.type";

const Counter = () => {
  const ref = useRef<NodeJS.Timer>();
  const [count, setCount] = useState(0);

  const setTimer: SetTimer = (time) => {
    if (ref.current) clearInterval(ref.current);
    setCount(time);

    ref.current = setInterval(() => {
      setCount((currentCount) => currentCount - 1000);
    }, 1000);
  };

  useEffect(() => {
    if (count <= 0 && ref.current) clearInterval(ref.current);
  }, [count]);

  return (
    <div>
      <button type="button" onClick={() => setTimer(120000)}>
        倒數兩分鐘
      </button>
      <button type="button" onClick={() => setTimer(60000)}>
        倒數一分鐘
      </button>
      <button type="button" onClick={() => setTimer(45000)}>
        倒數 45 秒
      </button>
      <button type="button" onClick={() => setTimer(30000)}>
        倒數 30 秒
      </button>
      <button type="button" onClick={() => setTimer(15000)}>
        倒數 15 秒
      </button>
      <button type="button" onClick={() => setTimer(10000)}>
        倒數 10 秒
      </button>
      <div>剩餘時間：{count / 1000}</div>
    </div>
  );
};

export default Counter;
