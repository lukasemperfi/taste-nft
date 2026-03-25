<script setup lang="ts">
import Icon from '@/atoms/icon/VIcon.vue'
import BaseDropdown from '@/molecules/dropdown/BaseDropdown.vue'

const { showMenu = false } = defineProps<{
  showMenu?: boolean
}>()
const emit = defineEmits(['external', 'share', 'menu', 'edit-profile'])

const onMenuClick = (event: PointerEvent | MouseEvent, toggleFn?: () => void) => {
  console.log('clicked')
  emit('menu')

  if (toggleFn) {
    toggleFn()
  }
}
</script>

<template>
  <div class="art-actions">
    <button class="art-actions__btn" @click="$emit('external')">
      <Icon name="external-link" class="art-actions__icon" />
    </button>
    <button class="art-actions__btn" @click="$emit('share')">
      <Icon name="share" class="art-actions__icon" />
    </button>

    <button v-if="!showMenu" class="art-actions__btn" @click="onMenuClick">
      <Icon name="menu" class="art-actions__icon" />
    </button>

    <BaseDropdown v-else :options="[]" :offset="8" class="profile-menu">
      <template #trigger="{ toggle, isOpen }">
        <button class="art-actions__btn" @click="onMenuClick($event, toggle)">
          <Icon name="menu" class="art-actions__icon" />
        </button>
      </template>

      <template #menu="{ toggle, isOpen }">
        <div class="profile-menu__content">
          <nav class="profile-menu__nav">
            <button
              class="profile-menu__link"
              @click="
                () => {
                  $emit('edit-profile')
                  toggle()
                }
              "
            >
              Edit profile
            </button>
          </nav>
        </div>
      </template>
    </BaseDropdown>
  </div>
</template>

<style lang="scss" scoped>
.art-actions {
  display: flex;
  gap: 8px;

  &__btn {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease;

    @media (hover: hover) {
      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }

    @media (max-width: 450px) {
      width: 38px;
      height: 38px;
    }
  }

  &__icon {
    @media (max-width: 450px) {
      width: 14px;
      height: 14px;
    }

    :deep(path) {
      fill: #ffffff;
    }
  }
}

.profile-menu {
  &__content {
    max-width: 267px;
    background: #30363d;
    border-radius: 12px;
    padding-inline: 12px;
    padding-block: 8px;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;

    :deep(.user-identity__avatar-wrapper) {
      width: 36px;
      height: 36px;
      border-radius: 8px;
    }

    :deep(.user-identity__info) {
      gap: 0;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: globalFunctions.fluidValue(6px, 12px, 375px, 1366px);
  }

  &__link {
    background: none;
    border: none;
    padding: 0;
    text-align: left;
    font-weight: 600;
    font-size: globalFunctions.fluidValue(12px, 14px, 375px, 1366px);
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
    transition: opacity 0.2s;

    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
