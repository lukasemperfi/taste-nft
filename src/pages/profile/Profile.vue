<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Info from './sections/Info.vue'
import WorkTabs from './sections/WorkTabs.vue'

const route = useRoute()
const userId = computed(() => route.params.id || '1')
</script>

<template>
  <div class="profile">
    <Info />
    <WorkTabs />
  </div>
</template>
<style scoped lang="scss">
.profile {
  :deep(.info) {
    margin-top: 39px;
  }

  :deep(.work-tabs) {
    margin-top: 26px;
    margin-bottom: 51px;
  }
}
</style>
