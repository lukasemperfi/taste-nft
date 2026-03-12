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
  width: 294px;
  height: 40px;
  background-color: #1d2228;
  border-radius: 8px;

  border: none;
  outline: none;
  padding: 0 16px;
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;

  transition: opacity 0.2s ease;

  &::placeholder {
    color: #565e67;
  }

  &:focus {
    background-color: #272d35;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    // 1. Заменяем стандартный фон на внутреннюю тень вашего цвета
    -webkit-box-shadow: 0 0 0 1000px #272d35 inset !important;

    // 2. Устанавливаем цвет текста
    -webkit-text-fill-color: #ffffff !important;

    // 3. Плавный переход, чтобы при автозаполнении не «мигало»
    transition: background-color 5000s ease-in-out 0s;
  }
}
</style>
