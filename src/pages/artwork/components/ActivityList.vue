<script setup lang="ts">
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'
import VIcon from '@/atoms/icon/VIcon.vue'

interface ActivityItem {
  id: number
  userAvatar: string
  walletAddress: string
  date: string
  amountToken: string
  amountUsd: string
  externalLink: string
}

defineProps<{
  activities: ActivityItem[]
}>()
</script>

<template>
  <div class="activity">
    <h2 class="activity__title">Activity</h2>

    <div class="activity__list">
      <div v-for="item in activities" :key="item.id" class="activity-item">
        <div class="activity-item__left">
          <div class="activity-item__avatar-wrapper">
            <img :src="item.userAvatar" alt="Avatar" class="activity-item__avatar" />
          </div>

          <div class="activity-item__info">
            <h4 class="activity-item__action">
              Bid placed by <span class="activity-item__wallet">{{ item.walletAddress }}</span>
            </h4>
            <span class="activity-item__date">{{ item.date }}</span>
          </div>
        </div>

        <div class="activity-item__price">
          <TokenBalance size="sm" />
          <span class="activity-item__amount">({{ item.amountUsd }}$)</span>
        </div>

        <a :href="item.externalLink" target="_blank" class="activity-item__link-btn">
          <VIcon name="external-link" class="activity-item__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.activity {
  color: #ffffff;
  font-family: 'Raleway', sans-serif;

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 16px;
    font-family: var(--font-family);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 445px;
    overflow-y: scroll;
    margin-right: -12px;
    padding-right: 7px;
  }
}

.activity-item {
  box-sizing: border-box;
  width: 100%;
  padding-block: 13px;
  padding-inline: 15px;
  border: 1px solid #333940;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(51, 57, 64, 0.3);
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__avatar-wrapper {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15);
    margin-right: 10px;

    @media (max-width: globalBreakpoints.$breakpoint-xs) {
      width: 30px;
      height: 30px;
      border-radius: 8px;
    }
  }

  &__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__action {
    font-weight: 700;
    font-size: clamp(16px, 1.5vw, 20px);
    line-height: 23px;
    margin: 0;
    white-space: nowrap;
  }

  &__date {
    font-weight: 500;
    font-size: clamp(12px, 1.1vw, 14px);
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
    white-space: nowrap;
  }

  &__left {
    @media (max-width: 492px) {
      order: 1;
    }
  }

  &__price {
    display: flex;
    align-items: center;

    gap: 4px;
    margin-left: auto;

    @media (max-width: 492px) {
      order: 3;
      margin-left: 0;
    }
  }

  &__token-icon {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    margin-right: 8px;
  }

  &__amount {
    font-weight: 600;
    font-size: clamp(14px, 1.2vw, 16px);
    line-height: 19px;
    color: rgba(255, 255, 255, 0.5);
  }

  &__link-btn {
    width: 32px;
    height: 32px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
    box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s ease;

    @media (max-width: 492px) {
      order: 2;
    }

    @media (max-width: globalBreakpoints.$breakpoint-xs) {
      width: 30px;
      height: 30px;
      border-radius: 8px;
    }
  }
}
</style>
