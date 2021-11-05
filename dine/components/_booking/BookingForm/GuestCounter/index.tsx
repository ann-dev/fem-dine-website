import { useState } from 'react';
import { Counter, CounterButton } from './styles';

const GuestCounter = () => {
  const [count, setCount] = useState(4);

  return (
    <Counter>
      <CounterButton
        disabled={count < 2}
        onClick={(e) => {
          e.preventDefault();
          setCount(count - 1);
        }}
      >
        <img src="/icons/icon-minus.svg" alt="" role="presentation" />
      </CounterButton>
      <span>{count > 1 ? `${count} people` : '1 person'}</span>
      <CounterButton
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);
        }}
      >
        <img src="/icons/icon-plus.svg" alt="" role="presentation" />
      </CounterButton>
    </Counter>
  );
};

export default GuestCounter;
