import type { Meta, StoryObj } from '@storybook/vue3'
import VIcon from './VIcon.vue'

const iconFiles = import.meta.glob('@/assets/icons/*.svg')

const iconNames = Object.keys(iconFiles).map((path) => {
  return path.split('/').pop()?.replace('.svg', '') || ''
})

const meta: Meta<typeof VIcon> = {
  title: 'Atoms/VIcon',
  component: VIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof VIcon>

export const Default: Story = {
  args: {
    name: 'plus',
  },
  render: (args) => ({
    components: { VIcon },
    setup() {
      return { args }
    },
    template: `
    <div style="min-width: 50px; min-height: 50px; ">
        <VIcon v-bind="args" :key="args.name" />
    </div>
  `,
  }),
}

export const AllIcons: Story = {
  render: (args) => ({
    components: { VIcon },
    setup() {
      return { iconNames }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 16px;">
        <div v-for="name in iconNames" :key="name" style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <VIcon :name="name" v-bind="args"  />
            <span style="font-size: 12px; color: #666;">{{ name }}</span>
        </div>
      </div>
    `,
  }),
}
