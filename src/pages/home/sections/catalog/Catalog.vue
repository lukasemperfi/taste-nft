<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '@/molecules/dropdown/Dropdown.vue'
import VIcon from '@/atoms/icon/VIcon.vue'
import ArtGrid from '@/organisms/art-grid/ArtGrid.vue'
import ArtCard from '@/organisms/art-card/ArtCard.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import { artworks } from '@/helpers/artworks'

const sortOptions = [
  { label: 'Recently added', value: 'recent' },
  { label: 'Oldest first', value: 'old' },
  { label: 'Price: Low-High', value: 'price_asc' },
  { label: 'Price: High-Low', value: 'price_desc' },
]

const listingOptions = [
  { label: 'All Items', value: 'all' },
  { label: 'Auctions', value: 'auction' },
  { label: 'Buy Now', value: 'fixed' },
]

const sortDefault = ref(sortOptions[0])
const listingDefault = ref(listingOptions[1])
</script>
<template>
  <div class="catalog">
    <div class="catalog__container app-container">
      <div class="catalog__filter-bar">
        <Dropdown v-model="sortDefault" :options="sortOptions" />
        <Dropdown
          v-model="listingDefault"
          :options="listingOptions"
          triggerClass="listing-dropdown"
        />
      </div>
      <div class="catalog__artworks-list">
        <ArtGrid :items="artworks.slice(0, 8)">
          <template #item="{ item }">
            <ArtCard
              :title="item.title"
              :soldFor="item.soldFor"
              :endingIn="item.endingIn"
              :image="item.image"
              :balance="item.balance"
              :tokenIcon="item.tokenIcon"
            >
              <template #badge>
                <UserIdentity
                  :name="item.author.name"
                  :username="item.author.nickname"
                  :avatar-url="item.author.avatar"
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
.catalog {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__filter-bar {
    display: flex;
    gap: 12px;
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
