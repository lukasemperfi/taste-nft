<script setup lang="ts">
import { ref, computed } from 'vue'
import VIcon from '@/atoms/icon/VIcon.vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue', 'search', 'clear'])

const inputRef = ref<HTMLInputElement | null>(null)

const hasValue = computed(() => props.modelValue.length > 0)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}

const handleEnter = () => {
  emit('search', props.modelValue)
}
</script>

<template>
  <div :class="['search-bar', { 'search-bar--active': hasValue }]">
    <div class="search-bar__inner">
      <VIcon name="search" class="search-bar__icon-search" />

      <input
        ref="inputRef"
        type="text"
        class="search-bar__input"
        :value="modelValue"
        :placeholder="placeholder || 'Search for ...'"
        @input="handleInput"
        @keydown.enter="handleEnter"
      />

      <button v-if="hasValue" type="button" class="search-bar__clear-button" @click="handleClear">
        <VIcon name="cross" class="search-bar__clear-icon" />
        <span class="search-bar__clear-text">Clear</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  height: 32px;
  position: relative;

  @media (max-width: globalBreakpoints.$breakpoint-md) {
    height: 28px;
  }

  &__inner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #1d2228;
    border-radius: globalFunctions.fluidValue(8px, 12px, 375px, 1366px);
    padding: 0 globalFunctions.fluidValue(8px, 12px, 375px, 1366px);
    transition: background 0.2s ease;
  }

  &__icon-search {
    width: globalFunctions.fluidValue(16px, 20px, 375px, 1366px);
    height: globalFunctions.fluidValue(16px, 20px, 375px, 1366px);
    flex-shrink: 0;
    color: #ffffff;
  }

  &__input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 globalFunctions.fluidValue(6px, 8px, 375px, 1366px);
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: globalFunctions.fluidValue(11px, 12px, 375px, 1366px);
    line-height: globalFunctions.fluidValue(13px, 14px, 375px, 1366px);
    color: #ffffff;

    &::placeholder {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: globalFunctions.fluidValue(11px, 12px, 375px, 1366px);
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__clear-button {
    display: flex;
    align-items: center;
    gap: globalFunctions.fluidValue(3px, 4px, 375px, 1366px);
    cursor: pointer;
    flex-shrink: 0;
    margin-left: auto;
  }

  &__clear-icon {
    position: relative;
    width: globalFunctions.fluidValue(9px, 11px, 375px, 1366px);
    height: globalFunctions.fluidValue(9px, 11px, 375px, 1366px);

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: globalFunctions.fluidValue(8px, 10px, 375px, 1366px);
      height: 1.5px;
      background-color: #8e9093;
      border-radius: 1px;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &__clear-text {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: globalFunctions.fluidValue(11px, 13px, 375px, 1366px);
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }
}
</style>
