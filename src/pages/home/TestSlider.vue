<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, EffectCreative } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

interface Artwork {
  id: number
  image: string
  name: string
  username: string
  price: string
}

const props = defineProps<{ items: Artwork[] }>()
const modules = [EffectCreative, Pagination]
</script>

<template>
  <div class="slider-container">
    <swiper
      :effect="'creative'"
      :grabCursor="true"
      :loop="true"
      :slidesPerView="1"
      :loopAdditionalSlides="3"
      :watchSlidesProgress="true"
      :creativeEffect="{
        limitProgress: 3,
        prev: {
          shadow: false,
          translate: [0, 0, -200],
          opacity: 0,
          scale: 0.6,
        },
        next: {
          translate: ['37%', 0, -150],
          opacity: 1,
          scale: 0.85,
        },
      }"
      :pagination="{
        el: '.custom-pagination',
        clickable: true,
      }"
      :modules="modules"
      class="artwork-swiper"
    >
      <swiper-slide v-for="item in items" :key="item.id" class="artwork-slide">
        <div class="artwork-card">
          <img :src="item.image" :alt="item.name" class="artwork-card__image" />
        </div>
      </swiper-slide>
    </swiper>

    <div class="custom-pagination"></div>
  </div>
</template>

<style lang="scss" scoped>
.slider-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.artwork-swiper {
  width: 100%;
  overflow: visible !important;

  :deep(.swiper-slide) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
  }
}

.artwork-card {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #c4c4c4;
  border-radius: 4px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.custom-pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  height: 5px;

  :deep(.swiper-pagination-bullet) {
    width: 60px;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    opacity: 1;
    margin: 0 !important;
    transition: all 0.3s ease;

    // &-active {
    //   background: #fff;
    //   width: 80px;
    // }
  }
}
</style>
