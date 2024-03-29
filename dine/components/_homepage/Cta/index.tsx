import Link from 'next/link';
import { GhostButton } from '../../../components/common/Button';
import { CtaWrapper, BgImageWrapper, CtaHeading, CtaContainer } from './styles';
import ResponsivePicture from '../../../components/common/ResponsivePicture';

const Cta = () => (
  <CtaWrapper>
    <BgImageWrapper>
      <ResponsivePicture path="/images/homepage/ready-bg" tablet desktop />
    </BgImageWrapper>
    <CtaContainer>
      <CtaHeading>Ready to make a reservation?</CtaHeading>
      <Link href="/booking">
        <GhostButton no_margin>Book a table</GhostButton>
      </Link>
    </CtaContainer>
  </CtaWrapper>
);

export default Cta;
