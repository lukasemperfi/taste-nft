<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { useScrollLock } from '@vueuse/core'
import VIcon from '@/atoms/icon/VIcon.vue'

const isOpen = defineModel<boolean>({ default: false })

const isLocked = useScrollLock(document.body)

watch(
  isOpen,
  (val) => {
    isLocked.value = val
  },
  { immediate: true },
)

const close = () => {
  isOpen.value = false
}

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) close()
}

onMounted(() => document.addEventListener('keydown', handleEscape))
onUnmounted(() => document.removeEventListener('keydown', handleEscape))
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal-container">
          <header class="modal-header">
            <div class="modal-header__left">
              <slot name="header-left" />
            </div>

            <div class="modal-header__center">
              <slot name="header-center" />
            </div>

            <div class="modal-header__right">
              <slot name="header-right">
                <button class="modal-close" @click="close">
                  <VIcon name="cross" class="modal-close__icon" />
                </button>
              </slot>
            </div>
          </header>

          <div class="modal-content">
            <slot name="content" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 31, 32, 0.7);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.modal-container {
  position: relative;
  background: #30363d;
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  max-width: 653px;
  min-height: 200px;
  max-height: 90vh;
  max-width: 90vw;

  padding-top: 45px;
  padding-bottom: 31px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 24px;

  &__center {
    flex: 1;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }

  &__left,
  &__right {
    flex: 0 0 40px;
    display: flex;
    align-items: center;
  }

  &__right {
    justify-content: flex-end;
  }
}

.modal-close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }

  &__icon {
    width: 17px;
    height: 16px;

    :deep(path) {
      fill: #ffffff;
    }
  }
}

.modal-content {
  flex: 1;
  overflow-y: auto;
  color: #ffffff;

  @include globalMixins.custom-scrollbar;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;

  .modal-container {
    transition: transform 0.3s ease;
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .modal-container {
    transform: scale(0.9) translateY(20px);
  }
}
</style>
