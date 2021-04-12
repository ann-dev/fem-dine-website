import { Counter, CounterButton } from './styles';

const GuestCounter = () => {
  return (
    <Counter>
      <CounterButton>
        <img src="/icons/icon-minus.svg" alt="" role="presentation" />
      </CounterButton>
      <span>4 people</span>
      <CounterButton>
        <img src="/icons/icon-plus.svg" alt="" role="presentation" />
      </CounterButton>
    </Counter>
  );
};

export default GuestCounter;
