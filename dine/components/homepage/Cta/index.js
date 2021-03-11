import Link from 'next/link';

import Container from 'components/common/Container';
import { GhostButton } from 'components/common/Button';
import { Heading } from 'components/common/Heading';
import { CtaWrapper } from './styles';

const Cta = () => (
  <CtaWrapper>
    <Container>
      <Heading>Ready to make a reservation?</Heading>
      <Link href="/booking">
        <GhostButton ghost>Book a table</GhostButton>
      </Link>
    </Container>
  </CtaWrapper>
);

export default Cta;
