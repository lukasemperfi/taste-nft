<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ InputHTMLAttributes {}

const props = defineProps<Props>()
const model = defineModel<string>()
</script>

<template>
  <input v-bind="$attrs" class="base-input" v-model="model" />
</template>

<style lang="scss" scoped>
.base-input {
  @include globalMixins.base-input-styles;
  height: 40px;
}
</style>
