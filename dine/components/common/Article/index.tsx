import { Heading, HeroHeading } from '../../../components/common/Heading';
import { ArticleParagraph } from './styles';

type ArticleProps = {
  divider?: boolean;
  hero?: boolean;
  paragraph?: string;
  title?: string;
};

const Article = ({
  divider = false,
  hero = false,
  paragraph = 'Some text...',
  title = 'Default title'
}: ArticleProps) => (
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
