<script setup lang="ts">
const { label = '', value = '' } = defineProps<{
  label: string
  value?: string | number
}>()
</script>

<template>
  <div class="art-field">
    <span class="art-field__label">{{ label }}</span>
    <span class="art-field__value">
      <slot>{{ value }}</slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.art-field {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  &__label {
    margin-right: 4px;
    color: rgba(255, 255, 255, 0.5);
  }

  &__value {
    color: #ffffff;
  }
}
</style>
