import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import BaseDropdown from './BaseDropdown.vue'
import VIcon from '@/atoms/icon/VIcon.vue'

const defaultOptions = [
  { label: 'Recently added', value: 'recent' },
  { label: 'Oldest first', value: 'old' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
]

const meta: Meta<typeof BaseDropdown> = {
  title: 'Molecules/BaseDropdown',
  component: BaseDropdown,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    offset: { control: 'number' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof BaseDropdown>

export const Default: Story = {
  render: (args) => ({
    components: { BaseDropdown, VIcon },
    setup() {
      const selected = ref(null)
      return { args, selected, options: defaultOptions }
    },
    template: `
      <BaseDropdown v-bind="args" v-model="selected" :options="options">
        <template #trigger="{ toggle, isOpen, selected }">
          <button class="dark-rounded-btn" @click="toggle" :class="{ 'active': isOpen }">
            <span class="label">{{ selected?.label || args.placeholder || 'Recently added' }}</span>
            <VIcon name="polygon" class="icon" :class="{ 'rotated': isOpen }" />
          </button>
        </template>

        <template #menu="{ options, select, selected }">
          <ul class="dark-rounded-menu">
            <li 
              v-for="opt in options" 
              :key="opt.value"
              @click="select(opt)" 
              class="item"
              :class="{ 'item_selected': opt.value === selected?.value }"
            >
              {{ opt.label }}
            </li>
          </ul>
        </template>
      </BaseDropdown>
    `,
  }),
  args: {
    offset: 8,
  },
}
