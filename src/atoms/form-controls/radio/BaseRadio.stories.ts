import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import BaseRadio from './BaseRadio.vue'

const meta = {
  title: 'Atoms/FormControls/BaseRadio',
  component: BaseRadio,
  tags: ['autodocs'],
  args: {
    name: 'example-group',
    'onUpdate:modelValue': fn(),
  },
} satisfies Meta<typeof BaseRadio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Group = {
  render: (args: any) => ({
    components: { BaseRadio },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <BaseRadio v-bind="args" value="apple" v-model="args.modelValue" name="fruits">Apple</BaseRadio>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <BaseRadio v-bind="args" value="banana" v-model="args.modelValue" name="fruits">Banana</BaseRadio>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <BaseRadio v-bind="args" value="orange" v-model="args.modelValue" name="fruits">Orange</BaseRadio>
        </div>
        <div style="margin-top: 10px; padding: 8px; background: #272d35; border-radius: 4px; color: #8743FF; font-size: 12px;">
          Выбрано: {{ args.modelValue || 'ничего не выбрано' }}
        </div>
      </div>
    `,
  }),
  args: {
    modelValue: 'apple',
  },
}
