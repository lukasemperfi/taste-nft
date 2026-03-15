<script setup lang="ts">
interface Props {
  followers?: number | string
  following?: number | string
}

const { followers = 234, following = 15 } = defineProps<Props>()
</script>

<template>
  <div class="user-stats">
    <div class="user-stats__item">
      <span class="user-stats__count">{{ followers }}</span>
      <span class="user-stats__label">Followers</span>
    </div>

    <div class="user-stats__item">
      <span class="user-stats__count">{{ following }}</span>
      <span class="user-stats__label">Following</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-stats {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 16px;
  height: 38px;

  &__item {
    display: grid;
    grid-template-rows: 18px 18px;
    gap: 2px;
  }

  &__count {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
  }

  &__label {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
