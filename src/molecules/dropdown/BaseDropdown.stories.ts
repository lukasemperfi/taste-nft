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

export const DarkRounded: Story = {
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

export const LightFlat: Story = {
  render: (args) => ({
    components: { BaseDropdown },
    setup() {
      const selected = ref(null)
      return { args, selected, options: defaultOptions }
    },
    template: `
      <div style="font-family: sans-serif;">
        <BaseDropdown v-bind="args" v-model="selected" :options="options" :offset="4">
          
          <template #trigger="{ toggle, selected }">
            <div class="light-flat-trigger" @click="toggle">
              <span class="label">Filter by:</span>
              <span class="value">{{ selected?.label || 'None' }}</span>
              <span class="arrow">▼</span>
            </div>
          </template>

          <template #menu="{ options, select, selected }">
            <div class="light-flat-menu">
              <h4 class="header">Options</h4>
              <button 
                v-for="opt in options" 
                :key="opt.value"
                @click="select(opt)"
                class="option-btn"
                :class="{ 'is-active': opt.value === selected?.value }"
              >
                {{ opt.label }}
              </button>
            </div>
          </template>
        </BaseDropdown>
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    ...DarkRounded.args,
  },
}

export const HoverPanel: Story = {
  render: (args) => ({
    components: { BaseDropdown },
    setup() {
      const selected = ref(null)
      return { args, selected, options: defaultOptions }
    },
    template: `
      <div style="display: flex; gap: 20px; color: #fff; font-family: monospace;">
        <BaseDropdown v-bind="args" v-model="selected" :options="options">
          
          <template #trigger="{ toggle }">
            <div class="hover-panel-trigger" @mouseenter="toggle" @mouseleave="toggle">
              Actions
            </div>
          </template>

          <template #menu="{ options }">
            <div class="hover-panel-menu" @mouseenter="toggle" @mouseleave="toggle">
              <p>Quick actions panel</p>
              <div class="actions-grid">
                 <button>Edit</button>
                 <button>Delete</button>
                 <button>Share</button>
              </div>
            </div>
          </template>
        </BaseDropdown>
      </div>
    `,
  }),
}
