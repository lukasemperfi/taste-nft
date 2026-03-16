<script setup lang="ts" generic="T">
interface Props {
  items: T[]
}

defineProps<Props>()
</script>

<template>
  <div class="art-grid">
    <div v-for="(item, index) in items" :key="index" class="art-grid__item">
      <slot name="item" :item="item" :index="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.art-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(auto-fill, minmax(311px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(311px, 475px));
    justify-content: center;
  }
}
</style>
