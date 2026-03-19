import type { Meta, StoryObj } from '@storybook/vue3'
import UserIdentity from './UserIdentity.vue'

const meta: Meta<typeof UserIdentity> = {
  title: 'Molecules/UserIdentity',
  component: UserIdentity,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'sm'],
    },
  },
}

export default meta
type Story = StoryObj<typeof UserIdentity>

export const Medium: Story = {
  args: {
    size: 'md',
    name: 'User Name',
    username: 'username',
    avatarUrl: 'https://i.pravatar.cc/150?u=1',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    name: 'User Name',
    username: 'username',
    avatarUrl: 'https://i.pravatar.cc/150?u=2',
  },
}
