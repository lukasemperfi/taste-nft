import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import BaseTextarea from './BaseTextarea.vue'

const meta = {
  title: 'Atoms/FormControls/BaseTextarea',
  component: BaseTextarea,
  tags: ['autodocs'],
  args: {
    modelValue: '',
    placeholder: 'Введите описание...',
    'onUpdate:modelValue': fn(),
  },
  argTypes: {},
} as Meta<typeof BaseTextarea>

export default meta
type Story = StoryObj<typeof BaseTextarea>

export const Default: Story = {}

export const Filled: Story = {
  args: {
    modelValue: 'Это многострочный текст,\nкоторый уже введен в поле.',
  },
}

export const Interactive: Story = {
  render: (args) => ({
    components: { BaseTextarea },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <BaseTextarea v-bind="args" v-model="args.modelValue" />
        <div style="color: #565e67; font-size: 12px; font-family: monospace; white-space: pre-wrap;">
Value: 
<span style="color: #fff">{{ args.modelValue }}</span>
        </div>
      </div>
    `,
  }),
}
