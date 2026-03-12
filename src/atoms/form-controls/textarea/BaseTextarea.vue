<script setup lang="ts">
import type { TextareaHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ TextareaHTMLAttributes {}

const props = defineProps<Props>()
const model = defineModel<string>()
</script>

<template>
  <textarea v-bind="$attrs" class="base-textarea" v-model="model"></textarea>
</template>

<style lang="scss" scoped>
.base-textarea {
  @include globalMixins.form-control-base;
  height: auto;
  min-height: 120px;
  padding: 12px 16px;
  line-height: 1.5;
  resize: vertical;
}
</style>
