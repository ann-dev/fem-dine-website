import Link from 'next/link';

const DineLogo = ({ style }) => (
  <div style={{ cursor: 'pointer' }}>
    <Link href="/">
      <img style={style} src="./logo.svg" alt="dine logo" />
    </Link>
  </div>
);

export default DineLogo;
