<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import ModalContent from '@/molecules/modal/ModalContent.vue'
import { ref, reactive, watch } from 'vue'
import Button from '@/atoms/button/Button.vue'
import { refManualReset } from '@vueuse/core'
import FileUploader from '@/atoms/form-controls/file-uploader/FileUploader.vue'
import VIcon from '@/atoms/icon/VIcon.vue'
import FormField from '@/atoms/form-controls/form-field/FormField.vue'
import BaseInput from '@/atoms/form-controls/input/BaseInput.vue'
import BaseTextarea from '@/atoms/form-controls/textarea/BaseTextarea.vue'
import BaseRadio from '@/atoms/form-controls/radio/BaseRadio.vue'
import NumberInput from '@/atoms/form-controls/number-input/NumberInput.vue'
import TokenInput from '@/molecules/token-input/TokenInput.vue'
import DataTimePicker from '@/atoms/form-controls/date-time-picker/DateTimePicker.vue'

const isOpen = defineModel<boolean>()

const initialForm = {
  name: '',
  description: '',
  type: 'auction',
  copies: 1,
  minSum: 10000000,
  file: null as File | null,
  previewUrl: null as string | null,
  date: '2020-02-22',
  time: '23:45',
  isLoading: false,
}

const currentStep = ref(1)
const form = reactive({ ...initialForm })
const showTimer = ref(false)

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const selectedFile = target.files?.[0]

  if (selectedFile) {
    console.log('File selected:', selectedFile)

    form.file = selectedFile
    form.previewUrl = URL.createObjectURL(selectedFile)

    console.log('Preview URL:', form.previewUrl)
  }
}

const finishCreating = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  isOpen.value = false
  console.log('Artwork created:', form)
}

const resetState = () => {
  currentStep.value = 1
  Object.assign(form, initialForm)
}

watch(isOpen, (val) => {
  if (!val) {
    resetState()
  }
})

watch(form, (newVal) => {
  console.log('form changed:', newVal)
})
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center>Creating artwork</template>
    <template #content>
      <div class="modal-content">
        <div class="create-artwork">
          <header class="create-artwork__header">
            <div class="create-artwork__stepper stepper">
              <div class="stepper__steps">
                <div
                  v-for="step in 3"
                  :key="step"
                  :class="['stepper__item', { stepper__item_active: currentStep >= step }]"
                ></div>
              </div>
              <div class="stepper__info">Step {{ currentStep }} from 3</div>
            </div>
          </header>

          <main class="create-artwork__content">
            <section v-if="currentStep === 1" class="create-artwork__step upload-step">
              <h3 class="create-artwork__subtitle">Upload the artwork you will be selling</h3>
              <FileUploader
                variant="full"
                v-model="form.file"
                :max-size-mb="100"
                :max-files="1"
                accept="image/*"
                @change="onFileChange"
              />
            </section>

            <section v-if="currentStep === 2" class="create-artwork__step edit-step">
              <p class="create-artwork__subtitle">
                Censor the public version of artwork, if it contains 18+ content
              </p>
              <div class="edit-step__preview">
                <div class="edit-step__img-wrapper">
                  <img
                    v-if="form.previewUrl"
                    :src="form.previewUrl"
                    alt="Preview"
                    class="edit-step__image"
                  />
                  <div v-else class="edit-step__placeholder">No image selected</div>
                </div>
                <div class="edit-step__tools">
                  <button class="edit-step__tool-btn"><VIcon name="image" /></button>
                  <button class="edit-step__tool-btn"><VIcon name="sticker" /></button>
                  <button class="edit-step__tool-btn"><VIcon name="blur" /></button>
                </div>
              </div>
            </section>

            <section v-if="currentStep === 3" class="create-artwork__step details-step">
              <div class="details-step__form">
                <FormField class="details-step__field details-step__field_name">
                  <template #label>Artwork name</template>
                  <BaseInput v-model="form.name" type="text" class="details-step__input" />
                </FormField>

                <FormField class="details-step__field details-step__field_description">
                  <template #label>Description</template>
                  <BaseTextarea v-model="form.description" class="details-step__textarea" />
                </FormField>

                <FormField class="details-step__field details-step__field_type">
                  <template #label>Type</template>
                  <div class="details-step__radio-group">
                    <BaseRadio
                      v-model="form.type"
                      value="auction"
                      name="type"
                      class="details-step__radio"
                      >Auction</BaseRadio
                    >
                    <BaseRadio
                      v-model="form.type"
                      value="sale"
                      name="type"
                      class="details-step__radio"
                      >Sale</BaseRadio
                    >
                  </div>
                </FormField>

                <div class="details-step__row details-step__row_copies">
                  <FormField class="details-step__field details-step__field_copies">
                    <template #label>Copies</template>
                    <NumberInput v-model="form.copies" class="details-step__counter" />
                  </FormField>
                  <FormField class="details-step__field details-step__field_min-sum">
                    <template #label>Min.sum</template>
                    <TokenInput
                      v-model="form.minSum"
                      class="details-step__price-input"
                      symbol="TASTE"
                      fiat-value="1308.54$"
                    />
                  </FormField>
                </div>

                <FormField class="details-step__field details-step__field_timer">
                  <template #label>Selling will end</template>
                  <div class="details-step__timer">
                    <button
                      v-if="!showTimer"
                      class="details-step__set-timer-button"
                      @click="showTimer = true"
                    >
                      Set timer
                    </button>
                    <div v-if="showTimer" class="details-step__timer-form">
                      <DataTimePicker v-model:date="form.date" v-model:time="form.time" />
                      <span class="details-step__time-left">05h 02m 41s</span>
                      <button class="details-step__delete-timer-button" @click="showTimer = false">
                        <VIcon name="cross" /> delete timer
                      </button>
                    </div>
                  </div>
                </FormField>
              </div>
            </section>
          </main>

          <footer class="create-artwork__footer">
            <Button v-if="currentStep < 3" class="create-artwork__action" @click="nextStep">
              Next step
            </Button>
            <Button v-else class="create-artwork__action" @click="finishCreating">
              Finish creating
            </Button>
          </footer>
        </div>
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.modal-content {
  padding-inline: globalFunctions.fluidValue(16px, 27px, 375px, 1336px);
}
.create-artwork {
  &__subtitle {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 12px;

    @media (max-width: globalBreakpoints.$breakpoint-sm) {
      font-size: 14px;
    }
  }

  &__header {
    display: flex;
    justify-content: center;
    padding-top: 16px;
    margin-bottom: 20px;
  }

  .stepper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    &__steps {
      display: flex;
      gap: 6px;
      justify-content: center;
    }
    &__item {
      height: 5px;
      background: rgba(255, 255, 255, 0.2);
      flex: 1 1 150px;
      max-width: 150px;
      border-radius: 12px;

      &_active {
        background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
      }
    }
    &__info {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      align-self: center;
    }
  }

  .upload-step {
    :deep(.file-uploader) {
      height: 360px;
    }
  }

  .edit-step {
    &__img-wrapper {
      position: relative;
      aspect-ratio: 1;
      border-radius: 16px;
      overflow: hidden;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__tools {
      margin-top: 16px;
      display: flex;
      gap: 21px;
    }
  }

  &__footer {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }

  &__action {
    width: 157px;
  }
}

.details-step {
  &__row {
    display: flex;

    &_copies {
      gap: 30px;
      margin-bottom: 24px;
    }
  }

  &__field {
    &_name {
      margin-bottom: 24px;
    }

    &_description {
      margin-bottom: 32px;
    }

    &_type {
      gap: 12px;
      margin-bottom: 32px;
    }

    &_copies {
      :deep(.number-input) {
        height: 40px;
      }
    }
  }

  &__radio-group {
    display: flex;
    gap: 15px;
  }

  &__timer {
    height: 40px;
    display: flex;
    align-items: center;
  }

  &__set-timer-button {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__timer-form {
    display: flex;
    align-items: center;
  }

  &__time-left {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    margin-left: 13px;
  }

  &__delete-timer-button {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    color: #ff5e54;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 16px;

    :deep(path) {
      fill: #ff5e54;
    }
  }

  :deep(.datetime-picker) {
    .datetime-picker__field_type_date {
      width: 127px;
      padding: 0;
    }

    .datetime-picker__field_type_time {
      padding: 11px;
    }
  }
}
</style>
