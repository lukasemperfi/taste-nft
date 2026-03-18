<script setup lang="ts">
import { inject } from 'vue'

const context = inject('modalContext')
</script>
<template>
  <div class="modal-content">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.modal-content {
  padding-inline: 24px;
}
</style>
