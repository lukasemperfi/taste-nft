<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import Loader from '@/atoms/loader/Loader.vue'
import { delay } from '@/helpers/delay'
import Tabs from '@/molecules/tabs/Tabs.vue'
import TabsTrigger from '@/molecules/tabs/TabsTrigger.vue'
import TabsPanel from '@/molecules/tabs/TabsPanel.vue'
import TabsList from '@/molecules/tabs/TabsList.vue'
import FollowCard from './FollowCard.vue'

const isOpen = defineModel<boolean>()
const isLoading = ref(false)
const activeTab = ref('following')

const handleConnectWallet = async () => {
  isLoading.value = true
  await delay(2000)
  isOpen.value = false
  isLoading.value = false
}

const following = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: `User Name`,
  username: `username`,
  avatarUrl: `https://i.pravatar.cc/150?u=${i}`,
  isFollow: (i + 1) % 3 === 0,
}))

console.log('following', following)
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen" style="padding-bottom: 0">
    <template #header-left>
      <Tabs v-model="activeTab">
        <TabsList>
          <TabsTrigger id="following">Following</TabsTrigger>
          <TabsTrigger id="followers">Followers</TabsTrigger>
        </TabsList>
      </Tabs>
    </template>

    <template #content>
      <Tabs v-model="activeTab">
        <div v-if="!isLoading" class="follow">
          <TabsPanel id="following">
            <div class="follow__list">
              <FollowCard
                v-for="item in following"
                :key="item.id"
                :name="item.name"
                :username="item.username"
                :avatar-url="item.avatarUrl"
                :is-follow="item.isFollow"
              />
            </div>
          </TabsPanel>
          <TabsPanel id="followers">
            <div class="follow__list">
              <FollowCard
                v-for="item in following"
                :key="item.id"
                :name="item.name"
                :username="item.username"
                :avatar-url="item.avatarUrl"
                :is-follow="item.isFollow"
              />
            </div>
          </TabsPanel>
        </div>
        <div v-else class="follow__loader">
          <Loader />
        </div>
      </Tabs>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.follow {
  padding-inline: clamp(12px, 1.76vw, 24px);
  padding-top: clamp(24px, 2.4vw, 32px);

  &__list {
    max-height: 373px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-right: -10px;
    padding-right: 5px;
    padding-bottom: 32px;

    @media (max-width: globalBreakpoints.$breakpoint-xs) {
      gap: 24px;
    }
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 25px;
  }
}
</style>
