<script setup lang="ts">
import BaseInput from '@/atoms/form-controls/input/BaseInput.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import { Tabs } from '@/molecules/tabs'
import ArtCard from '@/organisms/art-card/ArtCard.vue'
import ArtCardMenu from '@/organisms/art-card/ArtCardMenu.vue'
import TestSlider from './TestSlider.vue'

const testPlaceholder = 'Начните писать...'

const testValue = ref('ап')
const activeTab = ref('wallet')

function handleClick() {
  console.log('clicked')
}

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
  <h1>Home</h1>
  <!-- <div style="width: 300px; height: 300px"> -->
  <TestSlider :items="artworks" />
  <!-- </div> -->
</template>
<style scoped lang="scss"></style>
