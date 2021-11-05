import Link from 'next/link';
import styled from 'styled-components';
import { DEVICES } from '../../../constants/DEVICES';

const DineImage = styled.img`
  cursor: pointer;
  width: 82px;
  @media ${DEVICES.tablet} {
    width: 103px;
  }
`;

const DineLogo = () => (
  <div>
    <Link href="/">
      <DineImage src="./logo.svg" alt="dine logo" />
    </Link>
  </div>
);

export default DineLogo;
