import { SmallHeading } from 'components/common/Heading';
import ResponsiveImage from 'components/common/ResponsivePicture';

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
      <ResponsiveImage path={imagePath} alt="" role="presentation" />
    </ItemImage>
    <ImageDecorator />
    <ItemTextWrapper>
      <SmallHeading>{title}</SmallHeading>
      <ItemDescription>{description}</ItemDescription>
    </ItemTextWrapper>
  </ItemWrapper>
);

export default MenuItem;
