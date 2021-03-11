import { ItemImage, ItemDescription } from './styles';
import { SmallHeading } from 'components/common/Heading';

const MenuItem = ({ imagePath, title, description }) => (
  <div>
    <ItemImage>
      <img src={imagePath} alt="" role="presentation" />
    </ItemImage>
    <SmallHeading>{title}</SmallHeading>
    <ItemDescription>{description}</ItemDescription>
  </div>
);

export default MenuItem;
