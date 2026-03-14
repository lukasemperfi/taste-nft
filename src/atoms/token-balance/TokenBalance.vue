<script setup lang="ts">
import VIcon from '@/atoms/icon/VIcon.vue'

interface Props {
  balance?: string
  tokenIcon?: string
}

const { balance = '1,5M', tokenIcon = 'logo-2' } = defineProps<Props>()
</script>

<template>
  <div class="token-balance">
    <div class="token-balance__icon-wrapper">
      <VIcon :name="tokenIcon" class="token-balance__icon" />
    </div>
    <span class="token-balance__balance-text">{{ balance }}</span>
  </div>
</template>

<style lang="scss" scoped>
.token-balance {
  display: flex;
  align-items: center;
  gap: 6px;

  &__icon-wrapper {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 50%;
    overflow: hidden;
  }

  &__icon {
    width: 24px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__balance-text {
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
