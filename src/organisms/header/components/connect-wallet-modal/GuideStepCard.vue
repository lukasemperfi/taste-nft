<script setup lang="ts">
import { computed, ref } from 'vue'
import Modal from '@/molecules/modal/Modal.vue'

interface Props {
  stepNumber: number | string
  description: string
  videoThumbnail?: string
  videoId?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['play'])

const isPlaying = ref(false)

const youtubeEmbedUrl = computed(() => {
  return `https://www.youtube.com/embed/${props.videoId}?autoplay=1`
})

const thumbnailUrl = computed(() => {
  return `https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`
})
</script>

<template>
  <div class="guide-card">
    <div class="guide-card__preview" @click="isPlaying = true">
      <img v-if="!isPlaying" :src="thumbnailUrl" class="guide-card__image" alt="Video preview" />

      <button v-if="!isPlaying" class="guide-card__play-btn">
        <span class="guide-card__play-icon"></span>
      </button>

      <div class="guide-card__badge">
        <span class="guide-card__step-num"> {{ stepNumber }}. </span>
      </div>
    </div>

    <p class="guide-card__description">
      {{ description }}
    </p>

    <Modal v-model="isPlaying" style="background-color: transparent; width: auto; height: auto">
      <template #header-center>Step {{ stepNumber }}</template>
      <template #content>
        <div class="guide-card__video-container">
          <iframe
            class="guide-card__iframe"
            :src="youtubeEmbedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          ></iframe>
        </div>
      </template>
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
.guide-card {
  $bp-xs: 560px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__badge {
    position: absolute;
    z-index: 2;
    left: -10px;
    top: -27px;
    width: 40px;
    height: 40px;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
    border-radius: globalFunctions.fluidValue(12px, 16px, 375px, 1366px);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
  }

  &__step-num {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: globalFunctions.fluidValue(16px, 20px, 375px, 1366px);
    color: #1f2b38;
    transform: translate(2px, -1px);
  }

  &__preview {
    position: relative;
    width: globalFunctions.fluidValue(140px, 160px, 375px, 1366px);
    height: globalFunctions.fluidValue(80px, 90px, 375px, 1366px);
    background: #c4c4c4;
    border-radius: globalFunctions.fluidValue(12px, 16px, 375px, 1366px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  &__placeholder {
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: globalFunctions.fluidValue(12px, 16px, 375px, 1366px);
    overflow: hidden;
  }

  &__play-btn {
    position: absolute;
    width: globalFunctions.fluidValue(20px, 22px, 375px, 1366px);
    height: globalFunctions.fluidValue(20px, 22px, 375px, 1366px);
    background: rgba(0, 0, 0, 0.62);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
      background: rgba(0, 0, 0, 0.8);
    }
  }

  &__play-icon {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 0 4px 7px;
    border-color: transparent transparent transparent #ffffff;
    margin-left: 2px;
  }

  &__description {
    margin-top: 13px;
    width: 100%;
    max-width: 145px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: globalFunctions.fluidValue(12px, 14px, 375px, 1366px);
    line-height: 1.15;
    text-align: center;
    color: #ffffff;
  }

  &__video-container {
    margin-top: 10px;
  }

  &__iframe {
    width: 516px;
    height: 315px;

    @media (max-width: $bp-xs) {
      width: 351px;
      height: 300px;
    }
  }
}
</style>
