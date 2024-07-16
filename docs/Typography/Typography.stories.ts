import { Typography } from '@/styles/docs/Typography/Typography.component';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Styles/Tokens/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;

// stories
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
