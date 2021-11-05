import styled from 'styled-components';
import { COLORS } from '../../../constants/COLORS';
import { DEVICES } from '../../../constants/DEVICES';
import Container from '../../../components/common/Container';

export const FooterWrapper = styled.footer`
  background-color: ${COLORS.codGray};
  color: white;
  padding: 80px 0;
  @media ${DEVICES.tablet} {
    padding: 64px 0;
  }
`;

export const FooterContainer = styled(Container)`
  @media ${DEVICES.tablet} {
    display: flex;
  }
`;

export const FooterContentWrapper = styled.div`
  @media ${DEVICES.tablet} {
    margin-left: 130px;
    text-align: left;
  }
  @media ${DEVICES.laptopL} {
    display: flex;
    flex-direction: column;
    width: 700px;
  }
  @media ${DEVICES.desktopL} {
    margin-left: 275px;
  }
`;

export const ContactDetailsWrapper = styled.div`
  @media ${DEVICES.laptopL} {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContactDetails = styled.address`
  font-style: normal;
  margin-top: 38px;
  @media ${DEVICES.tablet} {
    margin-top: 0;
  }
`;

export const ContactItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 28px;
  text-transform: uppercase;
  @media ${DEVICES.tablet} {
    margin-bottom: 32px;
  }
`;

export const FooterDivider = styled.div`
  background-color: white;
  height: 1px;
  margin: 40px auto;
  width: 40px;
  @media ${DEVICES.tablet} {
    margin: 0 0 36px;
  }
`;

export const Attribution = styled.div`
  margin-top: 25px;
`;

export const AttributionItem = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
  a {
    text-decoration: underline;
  }
`;
