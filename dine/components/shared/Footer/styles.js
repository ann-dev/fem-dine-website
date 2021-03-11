import styled from 'styled-components';
import { COLORS } from 'constants/COLORS';

export const FooterWrapper = styled.footer`
  background-color: ${COLORS.codGray};
  color: white;
  padding: 80px 0;
`;

export const ContactDetails = styled.div`
  margin-top: 32px;
`;

export const ContactItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 28px;
  text-transform: uppercase;
`;

export const FooterDivider = styled.div`
  background-color: white;
  height: 1px;
  margin: 40px auto;
  width: 40px;
`;

export const Attribution = styled.div`
    margin-top: 25px;
`

export const AttributionItem = styled.p`
    font-size: 13px;
    a {
        text-decoration: underline;
    }
`
