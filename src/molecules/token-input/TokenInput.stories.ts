import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import TokenInput from './TokenInput.vue'

const meta: Meta<typeof TokenInput> = {
  title: 'Molecules/TokenInput',
  component: TokenInput,
  tags: ['autodocs'],
  argTypes: {
    symbol: { control: 'text', description: 'Тикер токена' },
    balance: { control: 'text', description: 'Баланс пользователя' },
    fiatValue: { control: 'text', description: 'Эквивалент в фиате' },
    tokenIcon: { control: 'text', description: 'URL иконки токена' },
  },
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof TokenInput>

export const Default: Story = {
  args: {
    symbol: 'BNB',
    fiatValue: '1308.54$',
    balance: '1,5M',
  },
  render: (args) => ({
    components: { TokenInput },
    setup() {
      const amount = ref('100')
      return { args, amount }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <TokenInput v-bind="args" v-model="amount"/>
        <span style="color: #666; font-family: monospace; font-size: 12px;">
          Model Value (numeric only): {{ amount }}
        </span>
      </div>
    `,
  }),
}

export const USDT: Story = {
  args: {
    symbol: 'USDT',
    fiatValue: '1.00$',
    balance: '25,430',
    tokenIcon: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=024',
  },
  render: Default.render,
}

export const LongValues: Story = {
  args: {
    symbol: 'LONGTOKENNAME',
    fiatValue: '1,000,000.00$',
    balance: '999,999,999',
  },
  render: Default.render,
}
