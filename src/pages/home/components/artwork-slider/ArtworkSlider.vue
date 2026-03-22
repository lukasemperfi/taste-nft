<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative, Pagination } from 'swiper/modules'

// Стили Swiper
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'

interface Artwork {
  id: number
  image: string
  name: string
  username: string
  price: string
}

const props = defineProps<{
  items: Artwork[]
}>()

const modules = [EffectCreative, Pagination]
</script>

<template>
  <swiper
    :grab-cursor="true"
    :effect="'creative'"
    :loop="true"
    :modules="modules"
    :slides-per-view="1"
    :watch-slides-progress="true"
    :looped-slides="5"
    :creative-effect="{
      limitProgress: 5,
      perspective: true,
      prev: {
        translate: ['-10%', 0, -200],
        scale: 0.85,
        opacity: 0.7,
      },
      next: {
        translate: ['20%', 0, -150],
        scale: 0.85,
        opacity: 1,
      },
    }"
    class="artwork-swiper"
  >
    <swiper-slide v-for="item in items" :key="item.id" class="artwork-slide">
      <div class="artwork-card">
        <img :src="item.image" :alt="item.name" class="artwork-card__image" />
      </div>
    </swiper-slide>
  </swiper>

  <div class="custom-pagination"></div>
</template>

<style lang="scss" scoped>
.artwork-swiper {
  width: 100%;
  height: 100%;

  overflow: visible !important;

  :deep(.swiper-slide) {
    overflow: visible;
    backface-visibility: hidden;
  }

  :deep(.swiper-wrapper) {
    transform-style: preserve-3d;
  }

  :deep(.swiper-slide-shadow-creative) {
    background: none !important;
  }
}

.artwork-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.artwork-card {
  width: 100%;
  max-width: 519px;
  aspect-ratio: 1 / 1;
  background: #c4c4c4;
  border-radius: 1px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.custom-pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  height: 5px;

  :deep(.swiper-pagination-bullet) {
    width: 95px;
    height: 5px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 99px;
    opacity: 1;
    margin: 0 !important;
    transition: background 0.3s;
  }
}
</style>
