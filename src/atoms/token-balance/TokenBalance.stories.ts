import type { Meta, StoryObj } from '@storybook/vue3'
import TokenBalance from './TokenBalance.vue'

const iconOptions = ['logo-2', 'logo-3']
const meta: Meta<typeof TokenBalance> = {
  title: 'Atoms/TokenBalance',
  component: TokenBalance,
  tags: ['autodocs'],
  argTypes: {
    tokenIcon: {
      control: 'select',
      options: iconOptions,
      description: 'Имя иконки для VIcon',
    },
    balance: {
      control: 'text',
      description: 'Текст баланса',
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof TokenBalance>

export const Default: Story = {
  args: {
    balance: '1,5M',
    tokenIcon: 'logo-2',
  },
  render: (args) => ({
    components: { TokenBalance },
    setup() {
      return { args }
    },
    template: '<TokenBalance v-bind="args" :key="JSON.stringify(args)" />',
  }),
}

export const SmallBalance: Story = {
  args: {
    balance: '0.005 ETH',
    tokenIcon: 'logo-2',
  },
  render: Default.render,
}
