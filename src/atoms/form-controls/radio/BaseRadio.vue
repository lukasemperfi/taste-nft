<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ InputHTMLAttributes {}

const props = defineProps<Props>()
const model = defineModel()
</script>

<template>
  <label class="base-radio">
    <input type="radio" v-bind="$attrs" v-model="model" class="base-radio__input" />
    <span class="base-radio__decorator"></span>
    <span v-if="$slots.default" class="base-radio__text">
      <slot />
    </span>
  </label>
</template>

<style lang="scss" scoped>
.base-radio {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .base-radio__decorator {
      border: none;
      &::before {
        opacity: 1;
      }

      &::after {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }

    &:checked ~ .base-radio__text {
      color: #fff;
    }
  }

  &__decorator {
    position: relative;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.5);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;

      background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);

      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);

      -webkit-mask-composite: xor;
      mask-composite: exclude;

      opacity: 0;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;

      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
      transition:
        transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
        opacity 0.2s ease;
    }
  }

  &__text {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.2s ease;
  }
}
</style>
