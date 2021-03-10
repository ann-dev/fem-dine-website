import Link from 'next/link';

import { GhostButton } from 'components/common/Button';
import { CtaWrapper, CtaHeading } from './styles';

const Cta = () => (
  <CtaWrapper
    style={{
      backgroundImage: "url('./images/homepage/ready-bg-mobile.jpg')",
      backgroundRepeat: 'no-repeat'
    }}
  >
    <CtaHeading>Ready to make a reservation?</CtaHeading>
    <Link href="/booking">
      <GhostButton ghost>Book a table</GhostButton>
    </Link>
  </CtaWrapper>
);

export default Cta;
