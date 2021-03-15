import Link from 'next/link';

import { Container } from 'components/common/Container';
import { GhostButton } from 'components/common/Button';
import { CtaHeading } from 'components/common/Heading';
import { CtaWrapper } from './styles';

const Cta = () => (
  <CtaWrapper>
    <Container>
      <CtaHeading>Ready to make a reservation?</CtaHeading>
      <Link href="/booking">
        <GhostButton ghost>Book a table</GhostButton>
      </Link>
    </Container>
  </CtaWrapper>
);

export default Cta;
