<script setup lang="ts">
import VIcon from '@/atoms/icon/VIcon.vue'

interface Props {
  balance?: string
  tokenIcon?: string
  size?: 'xs' | 'sm' | 'md'
}

const { balance = '1,5M', tokenIcon = 'logo-2', size = 'md' } = defineProps<Props>()
</script>

<template>
  <div :class="['token-balance', `token-balance_size_${size}`]">
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 50%;
    overflow: hidden;
  }

  &__icon {
    object-fit: cover;
  }

  &__balance-text {
    color: #ffffff;
    font-weight: 600;
  }

  &_size_md {
    .token-balance__icon-wrapper {
      width: 32px;
      height: 32px;
    }
    .token-balance_icon {
      width: 24px;
      height: 25px;
    }
    .token-balance__balance-text {
      font-size: globalFunctions.fluidValue(14px, 16px, 375px, 1366px);
    }
  }

  &_size_sm {
    .token-balance__icon-wrapper {
      width: 19px;
      height: 19px;
    }
    .token-balance_icon {
      width: 15px;
      height: 15px;
    }
    .token-balance__balance-text {
      font-size: globalFunctions.fluidValue(14px, 16px, 375px, 1366px);
    }
  }

  &_size_xs {
    gap: 3px;
    .token-balance__icon-wrapper {
      width: 16px;
      height: 16px;
    }

    .v-icon {
      width: 12px;
      height: 13px;
    }

    .token-balance__balance-text {
      font-size: 12px;
    }
  }
}
</style>
