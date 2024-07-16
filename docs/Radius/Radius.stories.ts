import { Radius } from '@/styles/docs/Radius/Radius.component';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Styles/Tokens/Radius',
  component: Radius,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Radius>;

export default meta;

// stories
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
