import type { Meta, StoryObj } from '@storybook/vue3'
import Loader from './Loader.vue'

const meta: Meta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof Loader>

export const Default: Story = {
  args: {},
}
