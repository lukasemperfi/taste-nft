<script setup lang="ts">
import type { FileUploaderProps, FileUploaderEvents } from './types'

defineProps<FileUploaderProps>()
defineEmits<FileUploaderEvents>()
</script>

<template>
  <div
    class="file-uploader"
    :class="{ 'file-uploader_state-uploaded': previewUrl }"
    @click="!previewUrl && $emit('trigger')"
    @dragover.prevent
    @drop.prevent="(e) => !previewUrl && $emit('drop', e.dataTransfer?.files || null)"
  >
    <svg class="file-uploader__border-svg">
      <rect
        x="0.5"
        y="0.5"
        width="calc(100% - 1px)"
        height="calc(100% - 1px)"
        rx="16"
        ry="16"
        fill="none"
        stroke="#c4c4c4"
        stroke-width="1"
        stroke-dasharray="8"
      />
    </svg>
    <div v-if="previewUrl" class="file-uploader__preview-container">
      <div
        class="file-uploader__canvas"
        :style="{ backgroundImage: `url(${previewUrl})` }"
        role="img"
        aria-label="Preview"
      ></div>

      <button
        type="button"
        class="file-uploader__remove-button"
        aria-label="Remove file"
        @click.stop="$emit('remove')"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-else class="file-uploader__placeholder">
      <p class="file-uploader__specs">
        1500x500px. <br />
        JPG, PNG or GIF. <br />
        {{ maxSizeMb }}MB max size.
      </p>
      <p class="file-uploader__instruction">Drag and drop an image here, or click to browse</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.file-uploader {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;

  &__border-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &_state-uploaded {
    .file-uploader__border-svg {
      display: none;
    }
  }

  &__placeholder {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }

  &__specs,
  &__instruction {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    line-height: 1.2;
    margin: 0;

    @media (max-width: globalBreakpoints.$breakpoint-sm) {
      font-size: 12px;
    }
  }

  &__specs {
    margin-bottom: 29px;
  }

  &__preview-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__canvas {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__remove-button {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      background-color 0.2s,
      transform 0.1s;

    @media (hover: hover) {
      &:hover {
        background: #ff5e54;
      }
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>
