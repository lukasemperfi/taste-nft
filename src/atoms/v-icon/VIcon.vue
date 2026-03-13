<script setup lang="ts">
import { defineAsyncComponent, computed, useAttrs } from 'vue'

interface Props {
  name: string
}

const { name = 'default' } = defineProps<Props>()

const IconComponent = computed(() => {
  return defineAsyncComponent({
    loader: () => import(`@/assets/icons/${name}.svg`),
  })
})
</script>

<template>
  <component :is="IconComponent" class="v-icon" v-bind="$attrs" />
</template>

<style scoped>
.v-icon {
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
}
</style>
