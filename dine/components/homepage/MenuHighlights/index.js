import { Container } from 'components/common/Container';
import Article from 'components/common/Article';
import MenuItem from './MenuItem';

import {
  HighlightsWrapper,
  MenuItemsWrapper,
  ArticleWrapper,
  ItemDivider
} from './styles';

const MenuHighlights = () => (
  <HighlightsWrapper>
    <Container>
      <ArticleWrapper>
        <Article
          divider
          title="A few highlights from our menu"
          paragraph="We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season."
        />
      </ArticleWrapper>

      <MenuItemsWrapper>
        <MenuItem
          imagePath="./images/homepage/salmon-mobile.jpg"
          title="Seared Salmon Fillet"
          description="Our locally sourced salmon served with a refreshing buckwheat
      summer salad."
        />
        <ItemDivider />
        <MenuItem
          imagePath="./images/homepage/beef-mobile.jpg"
          title="Rosemary Filet Mignon"
          description="Our prime beef served to your taste with a delicious choice of
      seasonal sides."
        />
        <ItemDivider />
        <MenuItem
          imagePath="./images/homepage/chocolate-mobile.jpg"
          title="Summer Fruit Chocolate Mousse"
          description="Creamy mousse combined with summer fruits and dark chocolate shavings."
        />
      </MenuItemsWrapper>
    </Container>
  </HighlightsWrapper>
);

export default MenuHighlights;
