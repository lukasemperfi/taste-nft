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

  &__inner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #1d2228;
    border-radius: 12px;
    padding: 0 12px;
    transition: background 0.2s ease;
  }

  &__icon-search {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: #ffffff;
  }

  &__input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 8px 0 8px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;

    &::placeholder {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__clear-button {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    flex-shrink: 0;
    margin-left: auto;
  }

  &__clear-icon {
    position: relative;
    width: 11px;
    height: 11px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
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
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }
}
</style>
