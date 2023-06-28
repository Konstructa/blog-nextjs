import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { StrapiImage } from '../../shared-typed/strapi-image';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';
import { Heading } from '../Heading';
import { Excerpt, ArticleContainer, Cover } from './styles';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <ArticleContainer>
      <Heading size="huge">{title}</Heading>
      <Excerpt>{excerpt}</Excerpt>
      <Cover src={cover.url} alt={title}/>
      <ArticleMeta categories={categories} author={author} createdAt={createdAt}/>
    </ArticleContainer>
  )
}
