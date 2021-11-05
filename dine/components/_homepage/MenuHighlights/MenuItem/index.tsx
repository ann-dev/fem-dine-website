import { SmallHeading } from '../../../../components/common/Heading';
import ResponsiveImage from '../../../../components/common/ResponsivePicture';
import {
  ItemWrapper,
  ItemImage,
  ImageDecorator,
  ItemTextWrapper,
  ItemDescription
} from './styles';

type MenuItemProps = {
  description?: string;
  imagePath: string;
  title?: string;
};

const MenuItem = ({
  description = 'Description',
  imagePath = '',
  title = 'Item title'
}: MenuItemProps) => (
  <ItemWrapper>
    <ItemImage>
      <ResponsiveImage path={imagePath} alt="" />
    </ItemImage>
    <ImageDecorator />
    <ItemTextWrapper>
      <SmallHeading>{title}</SmallHeading>
      <ItemDescription>{description}</ItemDescription>
    </ItemTextWrapper>
  </ItemWrapper>
);

export default MenuItem;
