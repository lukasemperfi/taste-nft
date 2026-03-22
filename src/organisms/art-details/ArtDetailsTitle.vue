<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h1 class="art-title">{{ title }}</h1>
</template>

<style lang="scss" scoped>
.art-title {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: globalFunctions.fluidValue(28px, 32px, 375px, 1366px);
  line-height: 38px;
  color: #ffffff;
}
</style>
