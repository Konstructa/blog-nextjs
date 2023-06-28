import React from 'react'
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader'
import { Container } from './styles';
import { HtmlContent } from '../HtmlContent';

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
      <ArticleHeader
        author={author}
        categories={categories}
        title={title}
        excerpt={excerpt}
        id={id}
        cover={cover}
        createdAt={createdAt}
      />
      <HtmlContent html={content} />
    </Container>
  )
}
