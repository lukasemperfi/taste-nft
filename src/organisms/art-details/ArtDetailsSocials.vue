<script setup lang="ts">
import VIcon from '@/atoms/icon/VIcon.vue'

interface SocialItem {
  name: string
  icon: string
  url?: string
}

interface Props {
  items?: SocialItem[]
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    { name: 'Twitch', icon: 'twitch' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
    { name: 'Onlyfans', icon: 'onlyfans' },
  ],
})
</script>

<template>
  <div class="social-links">
    <a v-for="item in props.items" :key="item.name" href="#" class="social-links__item">
      <VIcon :name="item.icon" class="social-links__icon" />
      <span class="social-links__name">{{ item.name }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social-links {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 24px;
  align-items: center;

  height: 20px;
  background: transparent;

  &__item {
    display: grid;
    grid-template-columns: 20px auto;
    gap: 6px;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    :deep(path) {
      fill: #ffffff;
    }
  }

  &__name {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
  }
}
</style>
