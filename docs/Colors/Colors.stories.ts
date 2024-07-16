import { Colors } from '@/styles/docs/Colors/Colors.component';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Styles/Tokens/Colors',
  component: Colors,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: ['light', 'dark', 'light-variant', 'dark-variant'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Colors>;

export default meta;

// stories
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    theme: 'light',
  },
};
