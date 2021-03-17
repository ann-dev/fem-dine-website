import Link from 'next/link';

import { GhostButton } from 'components/common/Button';
import ResponsivePicture from 'components/common/ResponsivePicture';
import { CtaWrapper, BgImageWrapper, CtaHeading, CtaContainer } from './styles';

const Cta = () => (
  <CtaWrapper>
    <BgImageWrapper>
      <ResponsivePicture path="images/homepage/ready-bg" tablet />
    </BgImageWrapper>
    <CtaContainer>
      <CtaHeading>Ready to make a reservation?</CtaHeading>
      <Link href="/booking">
        <GhostButton ghost>Book a table</GhostButton>
      </Link>
    </CtaContainer>
  </CtaWrapper>
);

export default Cta;
