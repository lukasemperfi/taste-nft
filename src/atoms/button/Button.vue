<script setup lang="ts">
import { computed, type ButtonHTMLAttributes } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md'

interface ButtonConfig {
  classes: string[]
  role: string
}

function getButtonConfig(variant: ButtonVariant, size: ButtonSize): ButtonConfig {
  const baseClass = 'taste-btn'

  return {
    classes: [baseClass, `${baseClass}_${variant}`, `${baseClass}_size-${size}`],
    role: 'button',
  }
}

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant?: ButtonVariant
  size?: ButtonSize
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const config = computed(() => getButtonConfig(props.variant, props.size))
</script>

<template>
  <button :class="config.classes" :role="config.role" v-bind="$attrs">
    <slot>Connect wallet</slot>
  </button>
</template>

<style scoped lang="scss">
@use '@/atoms/button/button-mixins' as mixins;

.taste-btn {
  @include mixins.taste-button-base;

  &_primary {
    @include mixins.taste-button-variant('primary');
  }
  &_outline {
    @include mixins.taste-button-variant('outline');
  }
  &_secondary {
    @include mixins.taste-button-variant('secondary');
  }

  &_size-sm {
    @include mixins.taste-button-size('sm');
  }
  &_size-md {
    @include mixins.taste-button-size('md');
  }
}
</style>
