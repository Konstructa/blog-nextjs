import Link from 'next/link';
import { Heading } from '../Heading';
import { Cover, Excerpt, Wrapper } from './styles';
import { StrapiImage } from '@/shared-typed/strapi-image';
 './styles';

 export type PostCardProps = {
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Wrapper>
      <Link href={`/post/${slug}`} legacyBehavior>
        <a>
          <Cover src={cover.url} alt={title} />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`} legacyBehavior>
          <a>{title}</a>
        </Link>
      </Heading>

      <Excerpt>{excerpt}</Excerpt>
    </Wrapper>
  );
};
