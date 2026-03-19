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
    maxSizeMb: 100,
    accept: 'image/*',
  },
  render: (args) => ({
    components: { FileUploader },
    setup() {
      return { args }
    },
    template: '<div style="width: 100%; height: 100px;"> <FileUploader v-bind="args" /> </div>',
  }),
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
  render: (args) => ({
    components: { FileUploader },
    setup() {
      return { args }
    },
    template: '<div style="width: 360px; height: 360px;"> <FileUploader v-bind="args" /> </div>',
  }),
}
