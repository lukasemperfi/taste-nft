<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import ModalContent from '@/molecules/modal/ModalContent.vue'
import { ref, reactive, watch } from 'vue'
import Button from '@/atoms/button/Button.vue'
import { refManualReset } from '@vueuse/core'

const isOpen = defineModel<boolean>()

const initialForm = {
  name: '',
  description: '',
  type: 'auction',
  copies: 1,
  minSum: 10000000,
  isLoading: false,
}

const currentStep = refManualReset(1)
const form = refManualReset({ ...initialForm })

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

const finishCreating = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  isOpen.value = false
  console.log('Artwork created:', form.value)
}

const resetState = () => {
  currentStep.reset()
  form.reset()
}

watch(isOpen, (val) => {
  if (!val) {
    resetState()
  }
})
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center>Creating artwork</template>
    <template #content>
      <ModalContent>
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
              <p class="create-artwork__subtitle">Upload the artwork you will be selling</p>
              <div class="upload-step__dropzone">
                <div class="upload-step__info">
                  <p>1500x500px</p>
                  <p>JPG, PNG or GIF</p>
                  <p>100MB max size</p>
                </div>
                <p class="upload-step__hint">Drag and drop an image here, or click to browse</p>
              </div>
            </section>

            <section v-if="currentStep === 2" class="create-artwork__step edit-step">
              <p class="create-artwork__subtitle">
                Censor the public version of artwork, if it contains 18+ content
              </p>
              <div class="edit-step__preview">
                <div class="edit-step__tools">
                  <button class="edit-step__tool-btn"></button>
                  <button class="edit-step__tool-btn"></button>
                  <button class="edit-step__tool-btn"></button>
                </div>
              </div>
            </section>

            <section v-if="currentStep === 3" class="create-artwork__step details-step">
              <div class="details-step__form">
                <div class="details-step__field">
                  <label class="details-step__label">Artwork name</label>
                  <input type="text" class="details-step__input" placeholder="Enter name" />
                </div>

                <div class="details-step__field">
                  <label class="details-step__label">Description</label>
                  <textarea
                    class="details-step__textarea"
                    placeholder="Enter description"
                  ></textarea>
                </div>

                <div class="details-step__row">
                  <div class="details-step__type">
                    <label class="details-step__label">Type</label>
                    <div class="details-step__radio-group">
                      <label><input type="radio" name="type" checked /> Auction</label>
                      <label><input type="radio" name="type" /> Sale</label>
                    </div>
                  </div>
                </div>

                <div class="details-step__row">
                  <div class="details-step__field">
                    <label class="details-step__label">Copies</label>
                    <div class="details-step__counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                  <div class="details-step__field">
                    <label class="details-step__label">Min.sum</label>
                    <div class="details-step__price-input">
                      <input type="number" value="10000000" />
                      <span class="details-step__currency">TASTE</span>
                      <span class="details-step__usd">(1308.54$)</span>
                    </div>
                  </div>
                </div>

                <div class="details-step__timer">
                  <p>Selling will end</p>
                  <button class="details-step__link">Set timer</button>
                </div>
              </div>
            </section>
          </main>

          <footer class="create-artwork__footer">
            <Button v-if="currentStep < 3" class="create-artwork__action" @click="currentStep++">
              Next step
            </Button>
            <Button v-else class="create-artwork__action" @click="finishCreating">
              Finish creating
            </Button>
          </footer>
        </div>
      </ModalContent>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.create-artwork {
  &__header {
    display: flex;
    justify-content: center;
  }

  &__stepper {
  }

  &__content {
  }

  &__step {
  }

  &__subtitle {
  }

  &__footer {
  }

  &__action {
  }

  .stepper {
    &__steps {
      display: flex;
      gap: 6px;
    }
    &__item {
      height: 5px;
      background: rgba(255, 255, 255, 0.2);
      width: 150px;
      border-radius: 12px;

      &_active {
        background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
      }
    }
    &__info {
    }
  }
}

.upload-step {
  &__dropzone {
  }

  &__info {
  }

  &__hint {
  }
}
.edit-step {
  &__preview {
  }

  &__tools {
  }

  &__tool-btn {
  }
}
.details-step {
  &__form {
  }

  &__field {
  }

  &__label {
  }

  &__input {
  }

  &__textarea {
  }

  &__row {
  }

  &__type {
  }

  &__radio-group {
  }

  &__counter {
  }

  &__price-input {
  }

  &__currency {
  }

  &__usd {
  }

  &__timer {
  }

  &__link {
  }
}
</style>
