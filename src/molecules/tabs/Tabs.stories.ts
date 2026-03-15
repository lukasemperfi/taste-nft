import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Tabs from './Tabs.vue'
import TabsTrigger from './TabsTrigger.vue'
import TabsPanel from './TabsPanel.vue'
import TabsList from './TabsList.vue'
import Modal from '@/molecules/modal/Modal.vue'

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  tags: ['autodocs'],
  component: Tabs,
}

export default meta

export const Default: StoryObj = {
  render: () => ({
    components: { Tabs, TabsTrigger, TabsPanel, TabsList },
    setup() {
      const activeTab = ref('wallet')
      return { activeTab }
    },
    template: `
      <Tabs v-model="activeTab">
          <TabsList>
            <TabsTrigger id="wallet">
              Wallet
            </TabsTrigger>
            <TabsTrigger id="history">
              History
            </TabsTrigger>
          </TabsList>
        
        <div class="tabs-content-container">
          <TabsPanel id="wallet">
            <div class="wallet-list">
              <div class="wallet-item">Ethereum Card</div>
              <div class="wallet-item">Solana Card</div>
            </div>
          </TabsPanel>
          
          <TabsPanel id="history">
            <div class="history-list">
              <p>No recent transactions found.</p>
            </div>
          </TabsPanel>
        </div>
      </Tabs>
    `,
  }),
}

export const LeftHeaderTabs: StoryObj = {
  render: () => ({
    components: { Tabs, TabsTrigger, TabsPanel, TabsList, Modal },
    setup() {
      const isModalOpen = ref(false)
      const activeTab = ref('wallet')
      return { isModalOpen, activeTab }
    },
    template: `
      <div>
        <button @click="isModalOpen = true">Open Wallet Modal</button>

        <Tabs v-model="activeTab">
          <Modal v-model="isModalOpen">
            
            <template #header-left>
              <TabsList>
                <TabsTrigger id="wallet">
                  Wallet
                </TabsTrigger>
                <TabsTrigger id="history">
                  History
                </TabsTrigger>
              </TabsList>
            </template>

            <div class="tabs-content-container">
              <TabsPanel id="wallet">
                <div class="wallet-list">
                  <div class="wallet-item">Ethereum Card</div>
                  <div class="wallet-item">Solana Card</div>
                </div>
              </TabsPanel>

              <TabsPanel id="history">
                <div class="history-list">
                  <p>No recent transactions found.</p>
                </div>
              </TabsPanel>
            </div>

          </Modal>
        </Tabs>
      </div>

    
    `,
  }),
}
