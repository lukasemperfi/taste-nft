<script setup lang="ts"></script>

<template>
  <div class="tabs-list">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tabs-list {
  display: flex;
  gap: 24px;
  width: 100%;
}
</style>
