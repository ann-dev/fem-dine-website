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

export default Article;
