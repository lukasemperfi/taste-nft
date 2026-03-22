<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '@/molecules/dropdown/Dropdown.vue'
import VIcon from '@/atoms/icon/VIcon.vue'

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
      <div class="catalog__artworks-list"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.catalog {
  &__filter-bar {
    display: flex;
    gap: 12px;
  }

  :deep(.listing-dropdown) {
    width: 121px;
  }
}
</style>
