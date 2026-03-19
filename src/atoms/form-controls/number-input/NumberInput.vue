<script setup lang="ts">
import { computed } from 'vue'

import VIcon from '@/atoms/icon/VIcon.vue'

const {
  min = 0,
  max = 100,
  step = 1,
} = defineProps<{
  min?: number
  max?: number
  step?: number
  label?: string
}>()

const model = defineModel<number>({
  default: 0,
  // required: true,
  set(val) {
    let newValue = Number(val)
    if (isNaN(newValue)) {
      newValue = min
    }
    return Math.max(min, Math.min(max, newValue))
  },
})

const increment = () => {
  model.value += step
}

const decrement = () => {
  model.value -= step
}

const isMinReached = computed(() => model.value <= min)
const isMaxReached = computed(() => model.value >= max)
</script>

<template>
  <div class="number-input">
    <button
      type="button"
      class="number-input__button number-input__button_minus"
      :disabled="isMinReached"
      @click="decrement"
    >
      <span class="number-input__icon">
        <VIcon name="minus" />
      </span>
    </button>

    <input v-model.lazy="model" type="text" class="number-input__field" inputmode="numeric" />

    <button
      type="button"
      class="number-input__button number-input__button_plus"
      :disabled="isMaxReached"
      @click="increment"
    >
      <span class="number-input__icon">
        <VIcon name="plus" />
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.number-input {
  display: flex;
  padding: 0;
  border-radius: 0;

  &__field {
    width: 37px;
    border: none;
    text-align: center;
    outline: none;
    background: transparent;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    color: #fff;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.2s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
