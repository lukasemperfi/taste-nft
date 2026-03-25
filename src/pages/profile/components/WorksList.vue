<script setup lang="ts">
import { ref } from 'vue'
import ArtGrid from '@/organisms/art-grid/ArtGrid.vue'
import { type Artwork } from '@/helpers/artworks'
import MyArtworkCard from './MyArtworkCard.vue'
import { type MyArtworkCard as MyArtworkCardType } from './types'

defineProps<{ list: MyArtworkCardType[] }>()
</script>
<template>
  <ArtGrid :items="list.slice(0, 8)">
    <template #item="{ item }">
      <MyArtworkCard :item="item" />
    </template>
  </ArtGrid>
</template>
<style scoped lang="scss"></style>
