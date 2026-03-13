import type { Meta, StoryObj } from '@storybook/vue3'
import FileUploader from './FileUploader.vue'

const meta = {
  title: 'Atoms/FormControls/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['compact', 'full'],
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0B0E12' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
} satisfies Meta<typeof FileUploader>

export default meta
type Story = StoryObj<typeof meta>

export const CompactEmpty: Story = {
  args: {
    variant: 'compact',
    maxSizeMb: 5,
    accept: 'image/*',
  },
}

export const FullEmpty: Story = {
  args: {
    variant: 'full',
    maxSizeMb: 100,
    accept: 'image/*',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}
