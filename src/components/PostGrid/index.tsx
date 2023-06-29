import { PostCard, PostCardProps } from "../PostCard"
import { Grid, Wrapper, NotFound } from "./styles"

export type PostGridProps = {
  posts?: PostCardProps[]
}

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  console.log(posts)
  return (
    <Wrapper>
      {posts.length === 0 && (
        <NotFound>Nenhum post encontrado</NotFound>
      )}

      <Grid>
        {posts.length > 0 && posts.map((post) => (
          <PostCard key={`post-card-${post.id}`} {...post} />
        ))}
      </Grid>
    </Wrapper>
  )
}
