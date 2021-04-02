import PropTypes from 'prop-types';

import { Heading, HeroHeading } from 'components/common/Heading';
import { ArticleParagraph } from './styles';

const Article = ({ title, paragraph, hero, divider }) => (
  <>
    {divider ? (
      <img
        src="/images/patterns/pattern-divide.svg"
        alt=""
        role="presentation"
      />
    ) : (
      ''
    )}
    {hero ? <HeroHeading>{title}</HeroHeading> : <Heading>{title}</Heading>}
    <ArticleParagraph>{paragraph}</ArticleParagraph>
  </>
);

Article.defaultProps = {
  title: 'Default title',
  paragraph: 'Some text...',
  hero: false,
  divider: false
};

Article.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  hero: PropTypes.bool,
  divider: PropTypes.bool
};

export default Article;
