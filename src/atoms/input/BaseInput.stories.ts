import type { Meta, StoryObj } from '@storybook/vue3'
import BaseInput from './BaseInput.vue'

const meta: Meta<typeof BaseInput> = {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],

  args: {
    placeholder: 'Введите текст...',
    type: 'text',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
  },
}

export default meta
type Story = StoryObj<typeof BaseInput>

export const Default: Story = {
  args: {
    placeholder: 'Начните писать...',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
  },
}

export const Filled: Story = {
  args: {
    modelValue: 'Hello World',
  },
}

export const Interactive = {
  render: (args: any) => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <BaseInput v-bind="args" v-model="args.modelValue" />
        <pre style="color: #fff; font-size: 12px;">Текущее значение: {{ args.modelValue }}</pre>
      </div>
    `,
  }),
}
