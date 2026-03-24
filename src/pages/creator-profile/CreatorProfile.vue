<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import CreatorInfo from './sections/CreatorInfo.vue'
import WorkTabs from './sections/WorkTabs.vue'

const route = useRoute()
const creatorId = computed(() => route.params.id || '1')

console.log('creatorId', creatorId.value)
</script>

<template>
  <div class="creator-profile">
    <CreatorInfo />
    <WorkTabs />
  </div>
</template>
<style scoped lang="scss">
.creator-profile {
  :deep(.creator-info) {
    margin-top: 39px;
  }

  :deep(.work-tabs) {
    margin-top: 26px;
    margin-bottom: 51px;
  }
}
</style>
