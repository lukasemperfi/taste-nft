<script setup lang="ts">
import ArtGrid from '@/organisms/art-grid/ArtGrid.vue'
import ArtCard from '@/organisms/art-card/ArtCard.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import { artworks } from '@/helpers/artworks'
</script>
<template>
  <div class="feature-works">
    <div class="feature-works__container app-container">
      <div class="feature-works__title">Feature works</div>
      <div class="feature-works__artworks-list">
        <ArtGrid :items="artworks.slice(0, 8)">
          <template #item="{ item }">
            <ArtCard
              :id="item.id"
              :title="item.title"
              :endingIn="item.endingIn"
              :image="item.image"
              :balance="item.balance"
              :tokenIcon="item.tokenIcon"
            >
              <template #badge>
                <UserIdentity
                  :name="item?.author?.name || ''"
                  :username="item?.author?.nickname || ''"
                  :avatar-url="item?.author?.avatar || ''"
                  size="sm"
                />
              </template>
            </ArtCard>
          </template>
        </ArtGrid>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.feature-works {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 18px;
    color: #fff;
  }

  :deep(.listing-dropdown) {
    width: 121px;
  }

  :deep(.user-identity) {
    .user-identity__name {
      color: #1d2228;
    }
  }
}
</style>
