<script setup lang="ts">
import type { FileUploaderProps, FileUploaderEvents } from './types'

defineProps<FileUploaderProps>()
defineEmits<FileUploaderEvents>()
</script>

<template>
  <div v-if="previewUrl" class="file-uploader file-uploader_view-compact">
    <div class="file-uploader__card">
      <div
        class="file-uploader__avatar"
        :style="{ backgroundImage: `url(${previewUrl})` }"
        role="img"
        aria-label="File preview"
      ></div>

      <div class="file-uploader__details">
        <span class="file-uploader__filename" :title="fileName">{{ fileName }}</span>
        <span class="file-uploader__filesize">{{ fileSizeLabel }}</span>

        <button
          type="button"
          class="file-uploader__action-button file-uploader__action-button_type_delete"
          @click="$emit('remove')"
        >
          delete file
        </button>
      </div>
    </div>
  </div>

  <div
    v-else
    class="file-uploader file-uploader_view-compact file-uploader__dropzone"
    @click="$emit('trigger')"
    @dragover.prevent
    @drop.prevent="(e) => $emit('drop', e.dataTransfer?.files || null)"
  >
    <span class="file-uploader__hint">Click or drop to upload</span>
  </div>
</template>

<style lang="scss" scoped>
.file-uploader {
  &_view-compact {
    font-family: 'Raleway', sans-serif;
    user-select: none;
  }

  &__card {
    display: flex;
    align-items: center;
    width: 294px;
    height: 120px;
    padding: 0 20px;
    background: #1d2228;
    border-radius: 16px;
    box-sizing: border-box;
  }

  &__avatar {
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    flex-shrink: 0;
  }

  &__details {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &__filename {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__filesize {
    color: rgba(255, 255, 255, 0.3);
    font-size: 14px;
  }

  &__action-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-top: 4px;
    text-align: left;
    font-family: inherit;
    font-size: 16px;
    transition: opacity 0.2s;

    &_type_delete {
      color: #ff5e54;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__dropzone {
    width: 294px;
    height: 120px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1d2228;
    cursor: pointer;
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  &__hint {
    color: rgba(255, 255, 255, 0.4);
    font-size: 14px;
  }
}
</style>
