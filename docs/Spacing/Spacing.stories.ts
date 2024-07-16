import { Spacing } from '@/styles/docs/Spacing/Spacing.component';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Styles/Tokens/Spacing',
  component: Spacing,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Spacing>;

export default meta;

// stories
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
