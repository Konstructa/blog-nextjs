import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { TagsContainer } from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};



export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  console.log(post.tags)
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />

      <TagsContainer>
        <PostTags tags={post.tags.tags} />
      </TagsContainer>
    </BaseTemplate>
  );
};
