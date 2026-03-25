<script setup lang="ts">
import { ref } from 'vue'
import Tabs from '@/molecules/tabs/Tabs.vue'
import TabsTrigger from '@/molecules/tabs/TabsTrigger.vue'
import TabsPanel from '@/molecules/tabs/TabsPanel.vue'
import TabsList from '@/molecules/tabs/TabsList.vue'
import WorksList from '../components/WorksList.vue'
import { artworks, artworksRandom } from '@/helpers/artworks'
import type { MyArtworkCard } from '@/pages/profile/components/types'

const activeTab = ref('created')

const statuses = ['approved', 'approved', 'approved', 'on-moderation', 'declined'] as const

const works = artworks.map((item) => ({
  ...item,
  status: statuses[Math.floor(Math.random() * statuses.length)],
})) as MyArtworkCard[]
</script>
<template>
  <div class="work-tabs app-container">
    <Tabs v-model="activeTab">
      <TabsList>
        <TabsTrigger id="created">Created </TabsTrigger>
        <TabsTrigger id="collected">Collected </TabsTrigger>
        <TabsTrigger id="bids">Bids </TabsTrigger>
      </TabsList>

      <div class="tabs-content-container">
        <TabsPanel id="created">
          <WorksList :list="works" />
        </TabsPanel>
        <TabsPanel id="collected">
          <WorksList :list="works" />
        </TabsPanel>
        <TabsPanel id="bids">
          <WorksList :list="works" />
        </TabsPanel>
      </div>
    </Tabs>
  </div>
</template>
<style scoped lang="scss">
.work-tabs {
  :deep(.tabs-list) {
    margin-bottom: 23px;
    .tab-trigger {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: clamp(16px, 1.3vw, 18px);
    }
  }

  :deep(.user-identity__name) {
    color: #1d2228;
  }
}
</style>
