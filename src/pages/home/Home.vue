<script setup lang="ts">
import Hero from './sections/hero/Hero.vue'
import Catalog from './sections/catalog/Catalog.vue'
import FeaturedCreators from './sections/featured-creators/FeaturedCreators.vue'
import { mockCreators } from '@/helpers/creators'
import { inject, type Ref, ref } from 'vue'

const searchQuery = inject<Ref<string>>('searchContext', ref(''))
</script>

<template>
  <div class="home" :class="{ 'is-searching': searchQuery }">
    <Transition name="fade" mode="out-in">
      <Hero v-if="!searchQuery" />
    </Transition>
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

.is-searching {
  :deep(.catalog) {
    margin-top: 32px;
  }

  :deep(.creators) {
    margin-top: 47px;

    .creators__title {
      display: none;
    }
  }
}

:deep(.creators) {
  margin-top: globalFunctions.fluidValue(40px, 80px, 375px, 1366px);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
