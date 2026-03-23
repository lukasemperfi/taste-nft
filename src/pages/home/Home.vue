<script setup lang="ts">
import Hero from './sections/hero/Hero.vue'
import Catalog from './sections/catalog/Catalog.vue'
import FeaturedCreators from './sections/featured-creators/FeaturedCreators.vue'
import { mockCreators } from '@/helpers/creators'
</script>

<template>
  <div class="home">
    <Hero />
    <Catalog />
    <FeaturedCreators :creators="mockCreators" />
  </div>
</template>
<style scoped lang="scss">
:deep(.hero) {
  margin-top: 40px;
}

:deep(.catalog) {
  margin-top: globalFunctions.fluidValue(40px, 80px, 375px, 1366px);
}

:deep(.creators) {
  margin-top: globalFunctions.fluidValue(40px, 80px, 375px, 1366px);
}
</style>
