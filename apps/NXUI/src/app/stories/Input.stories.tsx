import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import Input from '../components/Input';

type StoryProps = ComponentProps<typeof Input> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
    rounded: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    type: {
      options: ['text', 'password', 'email'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    rounded: 'small',
    type: 'text',
    size: 'small',
  },
  render: ({ buttonText, ...args }) => {
    return <Input {...args} />;
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    rounded: 'small',
    type: 'text',
    size: 'small',
  },
  render: ({ buttonText, ...args }) => {
    return <Input {...args} />;
  },
};
