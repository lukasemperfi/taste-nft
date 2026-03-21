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

const updatePaginationWidth = (swiper: any) => {
  const activeSlide = swiper.slides[swiper.activeIndex]

  if (!activeSlide) {
    return
  }

  const width = activeSlide.offsetWidth

  const paginationEl = swiper.pagination?.el

  if (!paginationEl) {
    return
  }

  paginationEl.style.width = `${width}px`
}
</script>

<template>
  <swiper
    :effect="'creative'"
    :grabCursor="true"
    :loop="true"
    :slidesPerView="'auto'"
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
        translate: ['26.5%', 0, -150],
        opacity: 1,
        scale: 1,
      },
    }"
    :pagination="{
      el: '.custom-pagination',
      clickable: true,
    }"
    @init="updatePaginationWidth"
    @slideChange="updatePaginationWidth"
    @resize="updatePaginationWidth"
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
</template>

<style lang="scss" scoped>
.artwork-swiper {
  width: 100%;
  height: 100%;
}

:deep(.swiper-slide) {
  aspect-ratio: 1;
  width: 38vw !important;
  max-width: 519px;
  max-height: 519px;
}

.artwork-card {
  aspect-ratio: 1;
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
  position: absolute;
  bottom: calc(var(--bottom-padding) * -1);
  left: 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 5px;

  :deep(.swiper-pagination-bullet) {
    width: 60px;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    opacity: 1;
    margin: 0 !important;
    transition: all 0.3s ease;

    &.swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}
</style>
