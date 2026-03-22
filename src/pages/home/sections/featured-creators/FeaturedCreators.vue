<script setup lang="ts">
interface Creator {
  id: number
  name: string
  username: string
  salesInfo: string
  avatar: string
}

defineProps<{
  creators: Creator[]
}>()
</script>

<template>
  <section class="creators">
    <h2 class="creators__title">Featured creators</h2>

    <div class="creators__grid">
      <div v-for="item in creators" :key="item.id" class="creator-card">
        <div class="creator-card__avatar-wrapper">
          <img :src="item.avatar" :alt="item.name" class="creator-card__avatar" />
        </div>

        <h3 class="creator-card__name">{{ item.name }}</h3>

        <span class="creator-card__username">@{{ item.username }}</span>

        <p class="creator-card__sales">{{ item.salesInfo }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.creators {
  background: #0b0e11;
  padding: 40px 25px;
  color: #ffffff;

  &__title {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 24px;
  }

  &__grid {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 20px;
  }
}

.creator-card {
  box-sizing: border-box;
  flex: 0 0 245px; // Фиксированная ширина из ТЗ (Rectangle 108)
  height: 222px;
  border: 1px solid #333940;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #8743ff;
  }

  &__avatar-wrapper {
    width: 80px;
    height: 80px;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 20px;
    background: #c4c4c4;
  }

  &__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin: 0 0 8px 0;
  }

  &__username {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;

    // Градиентный текст из ТЗ
    background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__sales {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
}
</style>
