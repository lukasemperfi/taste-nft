<script setup lang="ts">
import Hero from './sections/hero/Hero.vue'
</script>

<template>
  <div class="home">
    <Hero />
  </div>
</template>
<style scoped lang="scss">
:deep(.hero) {
  margin-top: globalFunctions.fluidValue(16px, 40px, 375px, 1366px);
}
</style>
