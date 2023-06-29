import Link from 'next/link';
import { PostTag } from '../../shared-typed/tag';
import { Wrapper } from './styles';

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {

  if (tags.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      tags:
      {tags.length > 0 && tags.map((tag) => {
        return (
          <span key={tag.id}>
            <Link href={`/tag/${tag.slug}`} legacyBehavior>
              <a>{tag.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Wrapper>
  );
};
