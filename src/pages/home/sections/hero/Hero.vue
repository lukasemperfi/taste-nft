<script lang="ts" setup>
import { ref } from 'vue'
import ArtworkSlider from '../../components/artwork-slider/ArtworkSlider.vue'

const artworks = ref([
  {
    id: 1,
    name: 'WFH - art name first',
    username: 'cryptopunk',
    price: '0.34 ETH',
    image: 'https://picsum.photos/id/101/600/600', // Замени на реальные пути
  },
  {
    id: 2,
    name: 'Abstract Geometry',
    username: 'design_master',
    price: '1.20 ETH',
    image: 'https://picsum.photos/id/102/600/600',
  },
  {
    id: 3,
    name: 'Digital Ocean',
    username: 'ocean_wave',
    price: '0.55 ETH',
    image: 'https://picsum.photos/id/103/600/600',
  },
  {
    id: 4,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/104/600/600',
  },
  {
    id: 43,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/105/600/600',
  },
  {
    id: 42,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/106/600/600',
  },
  {
    id: 46,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/99/600/600',
  },
  {
    id: 4,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/104/600/600',
  },
  {
    id: 43,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/105/600/600',
  },
  {
    id: 42,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/106/600/600',
  },
  {
    id: 46,
    name: 'Neon Future last',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/99/600/600',
  },
])
</script>
<template>
  <section class="hero">
    <div class="hero__container app-container">
      <div class="hero__col-1"></div>
      <div class="hero__col-2">
        <ArtworkSlider :items="artworks" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.hero {
  &__container {
    display: flex;
    gap: 16px;
    padding-block: 24px;
  }

  &__col-1 {
    flex: 1 1 516px;

    max-width: 516px;
  }

  &__col-2 {
    flex: 1 1 786px;

    max-width: 786px;
    max-height: 519px;
    aspect-ratio: 786 / 519;
    min-width: 0;
    position: relative;
  }
}
</style>
