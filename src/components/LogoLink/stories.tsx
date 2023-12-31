import { Meta, StoryFn } from '@storybook/react';
import { LogoLink, LogoLinkProps } from '.';
export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg:
      'https://raw.githubusercontent.com/luizomf/curso-reactjs-nextjs-project-3/df9710798d0c759f1d4e1a82a374791fbbdd92a2/public/assets/images/logo.svg',
    link: 'http://localhost',
  },
} as Meta;

export const ImageOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
