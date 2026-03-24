<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import CreatorInfo from './sections/CreatorInfo.vue'

const route = useRoute()
const creatorId = computed(() => route.params.id || '1')

console.log('creatorId', creatorId.value)
</script>

<template>
  <div class="creator-profile">
    <CreatorInfo />
  </div>
</template>
<style scoped lang="scss">
.creator-profile {
  :deep(.creator-info) {
    margin-top: 39px;
  }
}
</style>
