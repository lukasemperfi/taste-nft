import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
    default: {
      control: 'text',
      table: {
        category: 'Slots',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    default: 'Connect wallet',
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary Action',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'Outline Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Small: Story = {
  args: {
    size: 'sm',
    default: 'Small Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}
