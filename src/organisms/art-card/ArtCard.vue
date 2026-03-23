<script setup lang="ts">
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'
import { type Artwork } from '@/helpers/artworks'

const props = withDefaults(defineProps<Artwork>(), {
  image: '',
  title: 'WFH - art name',
  endingIn: '05h 02m 41s',
  balance: '1,5M',
  tokenIcon: 'logo-2',
})
</script>

<template>
  <article class="art-card">
    <div class="art-card__image-container">
      <img :src="props.image" class="art-card__image" alt="Artwork" />

      <div class="art-card__badge">
        <slot name="badge" />
      </div>

      <div v-if="$slots.menu" class="art-card__menu">
        <slot name="menu" />
      </div>
    </div>

    <div class="art-card__content">
      <h2 class="art-card__title">{{ props.title }}</h2>

      <div class="art-card__stats">
        <span class="art-card__label">Sold for:</span>
        <div class="art-card__value art-card__value_price">
          <TokenBalance size="sm" :token-icon="props.tokenIcon" :balance="props.balance" />
        </div>
        <span class="art-card__label">Ending in:</span>
        <span class="art-card__value">{{ props.endingIn }}</span>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.art-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;

  &__image-container {
    position: relative;
    aspect-ratio: 1;
    border-radius: 1px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__badge {
    position: absolute;
    left: 16px;
    top: 12px;
    background: #ffffff;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    padding-inline: 12px;
    padding-block: 7px;

    @media (max-width: globalBreakpoints.$breakpoint-xs) {
      font-size: 14px;
    }
  }

  &__menu {
    position: absolute;
    right: 16px;
    top: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    padding-top: 24px;
    padding-bottom: 15px;
    padding-inline: 16px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #333940;
    border-left: 1px solid #333940;
    border-bottom: 1px solid #333940;
  }

  &__title {
    margin: 0 0 15px 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;

    @media (max-width: globalBreakpoints.$breakpoint-xs) {
      font-size: 18px;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    row-gap: 12px;
  }

  &__label {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);

    @media (max-width: globalBreakpoints.$breakpoint-xs) {
      font-size: 12px;
    }
  }

  &__value {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    text-align: right;

    @media (max-width: globalBreakpoints.$breakpoint-xs) {
      font-size: 14px;
    }

    &__price {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  &__token-icon {
    width: 19px;
    height: 19px;
    border-radius: 50%;
  }

  :deep(.token-balance__icon) {
    width: 15px;
    height: 15px;
  }
}
</style>
