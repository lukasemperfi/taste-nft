<script setup lang="ts">
import Hero from './sections/hero/Hero.vue'
import Catalog from './sections/catalog/Catalog.vue'
</script>

<template>
  <div class="home">
    <Hero />
    <Catalog />
  </div>
</template>
<style scoped lang="scss">
:deep(.hero) {
  margin-top: globalFunctions.fluidValue(40px, 40px, 375px, 1366px);
}

:deep(.catalog) {
  margin-top: globalFunctions.fluidValue(40px, 80px, 375px, 1366px);
}
</style>
