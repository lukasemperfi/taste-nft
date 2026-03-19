import type { Meta, StoryObj } from '@storybook/vue3'
import DateTimePicker from './DateTimePicker.vue'

const meta: Meta<typeof DateTimePicker> = {
  title: 'Atoms/FormControls/DateTimePicker',
  component: DateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'text', description: 'Модель даты (YYYY-MM-DD)' },
    time: { control: 'text', description: 'Модель времени (HH:mm)' },
  },
}

export default meta
type Story = StoryObj<typeof DateTimePicker>

export const Default: Story = {
  args: {
    date: '2026-03-13',
    time: '21:45',
  },
  render: (args) => ({
    components: { DateTimePicker },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 20px; background: #121212; min-height: 100px;">
        <!-- Используем v-model для связи с args -->
        <DateTimePicker v-model:date="args.date" v-model:time="args.time" />
        
        <div style="margin-top: 20px; color: #888; font-family: sans-serif; font-size: 12px;">
          Value: {{ args.date }} {{ args.time }}
        </div>
      </div>
    `,
  }),
}
