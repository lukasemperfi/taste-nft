<script setup lang="ts">
import { type Artwork } from '@/helpers/artworks'
import ArtCard from '@/organisms/art-card/ArtCard.vue'
import ArtCardMenu from '@/organisms/art-card/ArtCardMenu.vue'
import { type MyArtworkCard } from './types'

defineProps<{ item: MyArtworkCard }>()

const statuses = {
  approved: 'Approved',
  ['on-moderation']: 'On moderation',
  declined: 'Declined',
}
</script>
<template>
  <div class="my-artwork-card">
    <ArtCard
      :id="item.id"
      :title="item.title"
      :endingIn="item.endingIn"
      :image="item.image"
      :balance="item.balance"
      :tokenIcon="item.tokenIcon"
    >
      <template #badge>
        <div class="my-artwork-card__badge" :class="item.status">{{ statuses[item.status] }}</div>
      </template>
      <template #menu>
        <ArtCardMenu />
      </template>
    </ArtCard>
  </div>
</template>
<style scoped lang="scss">
.my-artwork-card {
  :deep(.art-card) {
  }

  :deep(.art-card__badge) {
    padding-inline: 15px;
    padding-block: 12px;
  }

  :deep(.art-card__menu) {
    .art-card-menu__btn:nth-child(2),
    .art-card-menu__btn:nth-child(3) {
      display: v-bind("item.status === 'on-moderation' ? 'none' : 'flex'");
    }
  }

  &__badge {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: clamp(14px, 1.2vw, 16px);
    color: #000000;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .approved {
    color: #86d084;
  }
  .on-moderation {
    color: #ffba09;
  }
  .declined {
    color: #ff5e54;
  }
}
</style>
