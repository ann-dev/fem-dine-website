import { SmallHeading } from 'components/common/Heading';

import {
  ItemWrapper,
  ItemImage,
  ImageDecorator,
  ItemTextWrapper,
  ItemDescription
} from './styles';

const MenuItem = ({ imagePath, title, description }) => (
  <ItemWrapper>
    <ItemImage>
      <img src={imagePath} alt="" role="presentation" />
    </ItemImage>
    <ImageDecorator />
    <ItemTextWrapper>
      <SmallHeading>{title}</SmallHeading>
      <ItemDescription>{description}</ItemDescription>
    </ItemTextWrapper>
  </ItemWrapper>
);

export default MenuItem;
