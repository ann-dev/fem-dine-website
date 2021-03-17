import DineLogo from 'components/common/DineLogo';
import { FooterContainer, FooterContentWrapper } from './styles';

import {
  FooterWrapper,
  ContactDetails,
  ContactItem,
  FooterDivider,
  Attribution,
  AttributionItem
} from './styles';

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <DineLogo />
      <FooterContentWrapper>
        <ContactDetails>
          <ContactItem>
            Marthwaite, Sedbergh
            <br /> Cumbria <br /> +00 44 123 4567
          </ContactItem>
        </ContactDetails>
        <ContactDetails>
          <ContactItem>
            Open Times <br />
            Mon - Fri: 09:00 AM - 10:00 PM
            <br />
            Sat - Sun: 09:00 AM - 11:30 PM
          </ContactItem>
        </ContactDetails>
        <FooterDivider />
        <Attribution>
          <AttributionItem>
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
            .
          </AttributionItem>
          <AttributionItem>
            Coded by{' '}
            <a
              href="https://github.com/ann-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              ann-dev
            </a>
            .
          </AttributionItem>
        </Attribution>
      </FooterContentWrapper>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
