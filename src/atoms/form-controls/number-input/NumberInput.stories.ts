import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import NumberInput from './NumberInput.vue'

const meta: Meta<typeof NumberInput> = {
  title: 'Atoms/FormControls/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number', description: 'Минимальное значение' },
    max: { control: 'number', description: 'Максимальное значение' },
    step: { control: 'number', description: 'Шаг изменения' },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof NumberInput>

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => ({
    components: { NumberInput },
    setup() {
      const value = ref(args.modelValue)
      return { args, value }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <NumberInput 
          v-bind="args" 
          v-model="value" 
        />
        <div style="font-family: monospace; font-size: 12px; color: #666;">
          Value: {{ value }}
        </div>
      </div>
    `,
  }),
}

export const StepFive: Story = {
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 5,
  },
  render: Default.render,
}

export const MaxReached: Story = {
  args: {
    modelValue: 10,
    min: 0,
    max: 10,
    step: 1,
  },
  render: Default.render,
}
