<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import Loader from '@/atoms/loader/Loader.vue'
import { delay } from '@/helpers/delay'
import FormField from '@/atoms/form-controls/form-field/FormField.vue'
import TokenInput from '@/molecules/token-input/TokenInput.vue'

const isOpen = defineModel<boolean>()
const isLoading = ref(false)
const inputValue = ref('10000000')

const emit = defineEmits<{
  (e: 'success', value: string): void
}>()

const placeBid = async () => {
  isLoading.value = true
  await delay(2000)
  isOpen.value = false
  isLoading.value = false

  emit('success', inputValue.value)
}
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center>Place a bid</template>
    <template #content>
      <div v-if="!isLoading" class="place-bid">
        <FormField class="place-bid__field">
          <template #label>Min.sum</template>
          <TokenInput
            v-model="inputValue"
            class="place-bid__price-input"
            symbol="TASTE"
            fiat-value="1308.54$"
          />
        </FormField>
        <div class="place-bid__actions">
          <Button class="place-bid__action" @click="placeBid" size="md">Place</Button>
        </div>
      </div>
      <div v-else class="place-bid__loader">
        <Loader />
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.place-bid {
  $bp-xs: 570px;

  padding-top: 25px;
  padding-inline: 24px;

  &__actions {
    display: flex;
    justify-content: center;
    padding-top: 32px;
  }

  &__action {
    padding: 0 60px;
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 25px;
  }
}
</style>
