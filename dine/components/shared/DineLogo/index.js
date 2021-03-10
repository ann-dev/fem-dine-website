import Link from 'next/link';

const DineLogo = ({ style }) => (
  <div style={style}>
    <Link href="/">
      <img src="./logo.svg" alt="dine logo" />
    </Link>
  </div>
);

export default DineLogo;
