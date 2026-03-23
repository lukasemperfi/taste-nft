<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const artworkId = computed(() => route.params.id || '1')
const imageUrl = computed(
  () => `https://loremflickr.com/1920/1080/abstract?lock=${artworkId.value}`,
)

console.log('artworkId', artworkId.value)
</script>

<template>
  <div class="artwork">
    <div class="hero">
      <div class="hero__container app-container">
        <div class="hero__image-wrapper">
          <img :src="imageUrl" alt="Artwork" class="hero__image" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.artwork {
  .hero {
    margin-top: globalFunctions.fluidValue(20px, 40px, 375px, 1366px);

    &__image-wrapper {
      aspect-ratio: 1318/582;
      border-radius: 1px;

      @media (max-width: 950px) {
        aspect-ratio: 16/9;
      }

      @media (max-width: 650px) {
        aspect-ratio: 3/2;
      }
    }
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
