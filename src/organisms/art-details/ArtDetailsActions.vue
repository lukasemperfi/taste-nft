<script setup lang="ts">
import Icon from '@/atoms/icon/VIcon.vue'

defineEmits(['external', 'share', 'menu'])
</script>

<template>
  <div class="art-actions">
    <button class="art-actions__btn" @click="$emit('external')">
      <Icon name="external-link" class="art-actions__icon" />
    </button>
    <button class="art-actions__btn" @click="$emit('share')">
      <Icon name="share" class="art-actions__icon" />
    </button>
    <button class="art-actions__btn" @click="$emit('menu')">
      <Icon name="menu" class="art-actions__icon" />
    </button>
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
  }

  &__icon {
    :deep(path) {
      fill: #ffffff;
    }
  }
}
</style>
