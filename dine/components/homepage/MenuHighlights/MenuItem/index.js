import PropTypes from 'prop-types';

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

MenuItem.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

MenuItem.defaultProps = {
  imagePath: '',
  title: 'Item title',
  description: 'Description',
};

export default MenuItem;
