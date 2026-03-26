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
    <div class="app-container">
      <h2 class="creators__title">Featured creators</h2>

      <div class="creators__grid">
        <div v-for="item in creators" :key="item.id" class="creator-card">
          <div class="creator-card__avatar-wrapper">
            <img :src="item.avatar" :alt="item.name" class="creator-card__avatar" />
          </div>

          <RouterLink :to="`/creator-profile/1`" class="creator-card__name">
            {{ item.name }}
          </RouterLink>

          <span class="creator-card__username">@{{ item.username }}</span>

          <p class="creator-card__sales">{{ item.salesInfo }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$bp-md: 655px;
.creators {
  padding-bottom: clamp(24px, 4vw, 40px);
  color: #ffffff;

  .app-container {
    @media (max-width: $bp-md) {
      padding: 0;
    }
  }

  &__title {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: clamp(24px, 2.5vw, 32px);
    line-height: 1.2;
    margin-bottom: clamp(16px, 2vw, 24px);

    @media (max-width: $bp-md) {
      padding-inline: globalFunctions.fluidValue(12px, 24px, 375px, 1366px);
    }
  }

  &__grid {
    display: flex;
    gap: clamp(12px, 1.5vw, 16px);
    overflow-x: auto;
    padding-bottom: 17px;

    @media (max-width: $bp-md) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      padding-inline: globalFunctions.fluidValue(12px, 24px, 375px, 1366px);
      max-height: 500px;
    }
  }
}

.creator-card {
  box-sizing: border-box;
  flex: 0 0 clamp(200px, 18vw, 245px);
  height: clamp(180px, 17vw, 222px);

  border: 1px solid #333940;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;
  cursor: pointer;

  @media (max-width: $bp-md) {
    height: auto;
    aspect-ratio: 1;
  }

  @media (hover: hover) {
    &:hover {
      border-color: #8743ff;
    }
  }

  &__avatar-wrapper {
    width: clamp(60px, 6vw, 80px);
    height: clamp(60px, 6vw, 80px);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: clamp(12px, 1.5vw, 20px);
    background: #c4c4c4;
    flex-shrink: 0;
  }

  &__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: clamp(17px, 1.5vw, 20px);
    line-height: 23px;
    margin: 0 0 8px 0;
    text-align: center;
    color: #ffffff;
  }

  &__username {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: clamp(14px, 1.2vw, 16px);
    line-height: 19px;
    margin-bottom: 8px;

    background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__sales {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: clamp(12px, 1vw, 14px);
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
}
</style>
