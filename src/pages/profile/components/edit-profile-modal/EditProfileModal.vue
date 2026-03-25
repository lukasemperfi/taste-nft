<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import Loader from '@/atoms/loader/Loader.vue'
import { useAuth } from '@/helpers/useAuth'
import { delay } from '@/helpers/delay'

const isOpen = defineModel<boolean>()
const isLoading = ref(false)

// const handle = async () => {
//   isLoading.value = true
//   await delay(2000)
//   isOpen.value = false
//   isLoading.value = false
// }
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center>Edit your Profile</template>
    <template #content>
      <div v-if="!isLoading" class="edit-profile">fghfghg</div>
      <div v-else class="edit-profile__loader">
        <Loader />
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.edit-profile {
  padding-top: 44px;
  padding-inline: 47px;

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 25px;
  }
}
</style>
