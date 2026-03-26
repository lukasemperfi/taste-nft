<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import GuideStepCard from './GuideStepCard.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import Loader from '@/atoms/loader/Loader.vue'
import { useAuth } from '@/helpers/useAuth'
import { delay } from '@/helpers/delay'

const isOpen = defineModel<boolean>()
const isLoading = ref(false)
const { login } = useAuth()

const handleConnectWallet = async () => {
  isLoading.value = true
  await delay(2000)
  login()
  isOpen.value = false
  isLoading.value = false
}
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center>Connecting wallet</template>
    <template #content>
      <div v-if="!isLoading" class="connect-wallet">
        <div class="connect-wallet__main">
          <div class="guide-steps">
            <GuideStepCard
              step-number="1"
              description="Описание что нужно сделать"
              video-id="dQw4w9WgXcQ"
            />
            <GuideStepCard
              step-number="2"
              description="Описание что нужно сделать"
              video-id="Ct6BUPvE2sM"
            />
            <GuideStepCard
              step-number="3"
              description="Описание что нужно сделать"
              video-id="1BTJ_n9Oqs0"
            />
          </div>
        </div>
        <div class="connect-wallet__footer">
          <Button size="md" class="connect-wallet__button" @click="handleConnectWallet">
            Connect wallet
          </Button>
        </div>
      </div>
      <div v-else class="connect-wallet__loader">
        <Loader />
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.connect-wallet {
  $bp-xs: 570px;

  padding-top: 44px;
  padding-inline: 47px;

  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 31px;
  }

  .guide-steps {
    display: flex;
    justify-content: center;
    gap: globalFunctions.fluidValue(40px, 57px, 600px, 1366px);

    @media (max-width: $bp-xs) {
      flex-direction: column;
    }
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 25px;
  }
}
</style>
