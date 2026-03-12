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
  </label>
</template>

<style lang="scss" scoped>
.base-radio {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked + .base-radio__decorator {
      background:
        linear-gradient(#1d2228, #1d2228) padding-box,
        linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%) border-box;
      border: 1px solid transparent;

      &::after {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  &__decorator {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    transition: all 0.2s ease;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;

      opacity: 0;
      transform: translate(-50%, -50%) scale(0);

      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);

      transition:
        transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
        opacity 0.2s ease;
    }
  }
}
</style>
