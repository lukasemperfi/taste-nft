import type { Meta, StoryObj } from '@storybook/vue3'
import Dropdown from './Dropdown.vue'
import { ref } from 'vue'

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: (args) => ({
    components: { Dropdown },
    setup() {
      const selected = ref(null)
      return { args, selected }
    },
    template: '<Dropdown v-bind="args" v-model="selected" />',
  }),
  args: {
    placeholder: 'Recently added',
    options: [
      { label: 'Recently added', value: 'recent' },
      { label: 'Oldest', value: 'old' },
      { label: 'Price: Low to High', value: 'price_asc' },
      { label: 'Price: High to Low', value: 'price_desc' },
    ],
  },
}

export const OverlappingContent: Story = {
  render: (args) => ({
    components: { Dropdown },
    setup() {
      const selected = ref(null)
      return { args, selected }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <Dropdown v-bind="args" v-model="selected" />
        <div style="position: absolute; top: 65px; left: 0; z-index: 1000; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; color: #666;">
          <h4 style="color: #fff; margin-bottom: 8px;">Content Below</h4>
          <p>This content should be covered by the dropdown menu if the z-index and absolute positioning are correct. The dropdown should not push this block down when it opens.</p>
        </div>
      </div>
    `,
  }),
  args: {
    ...Default.args,
  },
}
