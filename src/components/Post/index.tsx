import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader'
import { Container } from './styles';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';

export type PostProps = {
  content: string;
} & ArticleHeaderProps;


export const Post = ({
  title,
  author,
  categories,
  content,
  cover,
  createdAt,
  excerpt,
  id,
}: PostProps) => {
  return (
    <Container>
      <PostContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          title={title}
          excerpt={excerpt}
          id={id}
          cover={cover}
          createdAt={createdAt}
        />
      </PostContainer>

      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Container>
  )
}
