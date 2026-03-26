<script setup lang="ts">
import { computed } from 'vue'
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'

interface Props {
  symbol?: string
  fiatValue?: string
  balance?: string
  tokenIcon?: string
  showBalance?: boolean
}

const {
  symbol = 'BNB',
  fiatValue = '1308.54$',
  balance = '1,5M',
  tokenIcon,
  showBalance = false,
} = defineProps<Props>()

const model = defineModel<number | string>({
  default: 10000000,
  set(val) {
    const numericValue = String(val).replace(/[^\d]/g, '')
    return numericValue
  },
})

const cutedSymbol = computed(() => {
  const symbolLimit = 5
  if (symbol.length > symbolLimit) {
    return symbol.slice(0, symbolLimit) + '...'
  }
  return symbol
})
</script>

<template>
  <div class="token-input">
    <div class="token-input__field-wrapper">
      <input v-model="model" type="text" class="token-input__input" inputmode="numeric" />
      <span class="token-input__symbol">{{ cutedSymbol }}</span>
    </div>
    <TokenBalance v-if="showBalance" :balance="balance" :token-icon="tokenIcon" size="sm" />
    <div class="token-input__info">
      <span class="token-input__fiat">({{ fiatValue }})</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.token-input {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  color: #fff;

  &__field-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 176px;
    height: 40px;
    padding: 0 16px;
    background: #1d2228;
    border-radius: 8px;
  }

  &__input {
    width: 100%;
    border: none;
    background: transparent;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  &__symbol {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 16px;
    margin-left: 8px;
    user-select: none;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__fiat {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
