<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import FileUploaderCompact from './FileUploaderCompact.vue'
import FileUploaderFull from './FileUploaderFull.vue'

interface Props {
  variant?: 'compact' | 'full'
  accept?: string
  maxSizeMb?: number
}

const { variant = 'compact', accept = 'image/*', maxSizeMb = 5 } = defineProps<Props>()

const model = defineModel<File | null>({ default: null })
const emit = defineEmits(['delete', 'error'])

const fileInput = ref<HTMLInputElement | null>(null)
const previewUrl = ref<string | null>(null)
const fileName = ref('')
const fileSizeLabel = ref('')

const revokeUrl = () => {
  if (previewUrl.value?.startsWith('blob:')) {
    URL.revokeObjectURL(previewUrl.value)
  }
}

const handleFiles = (files: FileList | null) => {
  const file = files?.[0]
  if (!file) return

  if (file.size > maxSizeMb * 1024 * 1024) {
    emit('error', `File is too large. Max size is ${maxSizeMb}MB`)
    return
  }

  model.value = file
  fileName.value = file.name
  fileSizeLabel.value = (file.size / (1024 * 1024)).toFixed(2) + ' mb'
  revokeUrl()
  previewUrl.value = URL.createObjectURL(file)
}

const removeFile = () => {
  revokeUrl()
  previewUrl.value = null
  model.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  emit('delete')
}

watch(model, (val) => {
  if (!val) {
    revokeUrl()
    previewUrl.value = null
  }
})

onUnmounted(revokeUrl)
</script>

<template>
  <div class="file-uploader" :class="[`file-uploader--${variant}`]">
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      class="file-uploader__input"
      @change="(e) => handleFiles((e.target as HTMLInputElement).files)"
    />
    <component
      :is="variant === 'compact' ? FileUploaderCompact : FileUploaderFull"
      :preview-url="previewUrl"
      :file-name="fileName"
      :file-size-label="fileSizeLabel"
      :max-size-mb="maxSizeMb"
      @trigger="fileInput?.click()"
      @remove="removeFile"
      @drop="handleFiles"
    />
  </div>
</template>

<style lang="scss" scoped>
.file-uploader {
  font-family: 'Raleway', sans-serif;
  height: 100%;

  &__input {
    display: none;
  }
}
</style>
