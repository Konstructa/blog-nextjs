import { Meta, StoryFn } from '@storybook/react';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/Konstructa">Feito com ❤ por Milena Limoeiro</a></p>`,
  },
} as Meta;

export const Template: StoryFn<FooterProps> = (args) => {
  return (
    <div style={{ marginTop: '200px'}}>
      <Footer {...args} />
    </div>
  );
};
