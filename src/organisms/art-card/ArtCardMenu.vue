<script setup lang="ts">
import { ref } from 'vue'
import VIcon from '@/atoms/icon/VIcon.vue'

const props = defineProps<{
  actions?: Array<{ icon: string; color: string; emit: string }>
}>()

const emit = defineEmits(['action-click'])

const defaultActions = [
  { icon: 'time', color: '#231F20', emit: 'time' },
  { icon: 'edit', color: '#53B051', emit: 'edit' },
  { icon: 'delete-bin', color: '#FF5E54', emit: 'delete' },
]

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

const getDelay = (index: number) => {
  if (isOpen.value) {
    return `${(index + 1) * 0.1}s`
  } else {
    return `${(defaultActions.length - 1 - index) * 0.1}s`
  }
}
</script>

<template>
  <div :class="['art-card-menu', { 'art-card-menu__open': isOpen }]">
    <button class="art-card-menu__trigger" @click.stop="toggleMenu">
      <VIcon name="menu" />
    </button>

    <div class="art-card-menu__list">
      <button
        v-for="(action, index) in defaultActions"
        :key="index"
        class="art-card-menu__btn"
        :style="{ transitionDelay: getDelay(index) }"
        @click.stop="emit('action-click', action.emit)"
      >
        <VIcon :name="action.icon" :style="{ color: action.color }" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.art-card-menu {
  position: relative;
  width: 32px;
  display: flex;
  flex-direction: column;

  &__trigger {
    width: 32px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 99px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
    border: none;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    @media (hover: hover) {
      &:hover {
        background-color: rgba(255, 255, 255, 0.5);

        :deep(path) {
          fill: #ffffff;
        }
      }
    }

    :deep(svg) {
      height: 14px;
    }

    :deep(path) {
      fill: #000000;
    }
  }

  &__list {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 44px;
    pointer-events: none;
    z-index: 5;
  }

  &__btn {
    width: 32px;
    height: 32px;
    background: #ffffff;
    border-radius: 99px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transform: translateY(-44px) scale(0.5);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    :deep(svg) {
      width: 14px;
      height: 14px;
    }
  }

  &__open {
    .art-card-menu__trigger {
      background-color: rgba(255, 255, 255, 0.5);
      transition: all 0.5s;

      :deep(path) {
        fill: #ffffff;
      }

      @media (hover: hover) {
        &:hover {
          background-color: #ffffff;

          :deep(path) {
            fill: #000000;
          }
        }
      }
    }

    .art-card-menu__list {
      pointer-events: auto;
    }

    .art-card-menu__btn {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
}
</style>
