<script setup lang="ts">
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'
import Button from '@/atoms/button/Button.vue'

interface AuctionProps {
  buttonText?: string
  label?: string
}

withDefaults(defineProps<AuctionProps>(), {
  buttonText: 'Place a bid',
  label: 'Current Bid:',
})

defineEmits(['click'])
</script>

<template>
  <div class="auction-card">
    <div class="auction-card__section auction-card__section_token-balance">
      <span class="auction-card__label">{{ label }}</span>
      <div class="auction-card__value-group">
        <TokenBalance size="sm" />
        <span class="auction-card__sub-value">(1308.54$)</span>
      </div>
    </div>

    <div class="auction-card__section auction-card__section_timer">
      <span class="auction-card__label">Auction ending in:</span>
      <div class="auction-card__timer">1 h 28 m 32 s</div>
    </div>
    <div class="auction-card__section auction-card__section_button">
      <Button class="auction-card__button" @click="$emit('click')">{{ buttonText }}</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auction-card {
  $bp-md: 560px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #30363d;
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding-block: 16px;

  @media (max-width: $bp-md) {
    grid-template-columns: 1fr 1fr;
    row-gap: 12px;
    padding-block: 12px;
  }

  &__section {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-inline: 20px;

    @media (max-width: $bp-md) {
      padding-inline: 12px;
    }

    &_timer {
      border-left: 3px solid rgba(255, 255, 255, 0.15);
      border-right: 3px solid rgba(255, 255, 255, 0.15);

      @media (max-width: $bp-md) {
        border-left: 2px solid rgba(255, 255, 255, 0.15);
        border-right: none;
      }
    }

    &_button {
      @media (max-width: $bp-md) {
        grid-column: 1/3;
        align-items: center;
      }
    }
  }

  &__label {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    font-size: clamp(12px, 2vw, 14px);
    margin-bottom: 9px;
    white-space: nowrap;
  }

  &__value-group {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__value {
    color: #ffffff;
    font-weight: 600;
    font-size: clamp(13px, 2.5vw, 16px);
  }

  &__sub-value {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: clamp(13px, 2.5vw, 16px);
  }

  &__timer {
    color: #ffffff;
    font-weight: 600;
    font-size: clamp(13px, 2.5vw, 16px);

    b {
      font-weight: 600;
    }
  }

  &__button {
    padding: 0 32px;

    @media (max-width: $bp-md) {
      padding: 0 20px;
      font-size: 13px;
    }
  }

  :deep(.token-balance__balance-text) {
    @media (max-width: $bp-md) {
      font-size: 13px;
    }
  }
}
</style>
