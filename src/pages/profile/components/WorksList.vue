<script setup lang="ts">
import { ref } from 'vue'
import ArtGrid from '@/organisms/art-grid/ArtGrid.vue'
import ArtCard from '@/organisms/art-card/ArtCard.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import { type Artwork } from '@/helpers/artworks'

defineProps<{ list: Artwork[] }>()
</script>
<template>
  <ArtGrid :items="list.slice(0, 8)">
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
</template>
<style scoped lang="scss"></style>
