<script setup lang="ts">
import BaseDropdown from './BaseDropdown.vue'
import VIcon from '@/atoms/icon/VIcon.vue'

interface Option {
  label: string
  value: string | number
}

interface Props {
  options: Option[]
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Recently added',
})

const selected = defineModel<Option | null>({ default: null })
</script>

<template>
  <BaseDropdown v-model="selected" :options="options" :offset="8">
    <template #trigger="{ toggle, isOpen, selected }">
      <button
        type="button"
        class="dropdown__button"
        :class="{ dropdown__button_active: isOpen }"
        @click="toggle"
      >
        <span class="dropdown__label">
          {{ selected ? selected.label : placeholder }}
        </span>
        <VIcon name="polygon" class="dropdown__icon" :class="{ dropdown__icon_rotated: isOpen }" />
      </button>
    </template>

    <template #menu="{ options, select, selected: currentSelected }">
      <ul class="dropdown__menu">
        <li
          v-for="option in options"
          :key="option.value"
          class="dropdown__item"
          :class="{ dropdown__item_selected: currentSelected?.value === option.value }"
          @click="select(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </template>
  </BaseDropdown>
</template>

<style lang="scss" scoped>
.dropdown {
  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 168px;
    height: 40px;
    padding: 0 20px;
    background: #1d2228;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 99px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Raleway', sans-serif;

    @media (hover: hover) {
      &:hover {
        border-color: rgba(255, 255, 255, 0.3);
      }
    }

    &_active {
      border-color: #8743ff;
    }
  }

  &__label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__icon {
    width: 8px;
    height: 5px;
    transition: transform 0.3s ease;

    &_rotated {
      transform: scaleY(-1);
    }
  }

  &__menu {
    margin: 0;
    padding: 8px 0;
    list-style: none;
    background: #1d2228;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    font-family: 'Raleway', sans-serif;
  }

  &__item {
    padding: 10px 20px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #ffffff;
    }

    &_selected {
      color: #8743ff;
      background: rgba(135, 67, 255, 0.1);
    }
  }
}

:deep(.fade-enter-active),
:deep(.fade-leave-active) {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

:deep(.fade-enter-from),
:deep(.fade-leave-to) {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
