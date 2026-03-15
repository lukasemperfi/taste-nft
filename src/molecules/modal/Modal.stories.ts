import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from './Modal.vue'
import { ref } from 'vue'

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const ConnectingWallet: Story = {
  render: (args) => ({
    components: { Modal },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <div>
        <button @click="isOpen = true">Open Modal</button>
        
        <Modal v-bind="args" v-model="isOpen">
          <template #header-center>
            Connecting wallet
          </template>
          
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 20px;">
             <p style="text-align: center; color: rgba(255,255,255,0.6)">
               Please select a wallet to connect to the platform
             </p>
             <div style="width: 100%; height: 100px; border: 2px dashed rgba(255,255,255,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center;">
                Wallet List Placeholders
             </div>
          </div>
        </Modal>
      </div>
    `,
  }),
  args: {},
}

export const LongContent: Story = {
  render: (args) => ({
    components: { Modal },
    setup() {
      const isOpen = ref(false)
      const longText = Array(20)
        .fill(
          'This is a long content to test scrolling inside the modal. ' +
            'We need to make sure the header stays fixed while the content area scrolls. ' +
            'The modal should not exceed the maximum height of the viewport minus paddings.',
        )
        .join('\n\n')

      return { args, isOpen, longText }
    },
    template: `
      <div>
        <button @click="isOpen = true">Open Scrollable Modal</button>
        
        <Modal v-bind="args" v-model="isOpen">
          <template #header-center>
            Scroll Test
          </template>
          
          <div style="white-space: pre-wrap; line-height: 1.6;">
             <p style="color: rgba(255,255,255,0.8)">
               {{ longText }}
             </p>
             <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; text-align: center;">
                --- End of Content ---
             </div>
          </div>
        </Modal>
      </div>
    `,
  }),
  args: {},
}
