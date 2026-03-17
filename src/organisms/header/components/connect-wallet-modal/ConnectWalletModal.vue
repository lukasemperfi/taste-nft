<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import GuideStepCard from './GuideStepCard.vue'
import Button from '@/atoms/button/Button.vue'

const isOpen = defineModel<boolean>()
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center> Connecting wallet </template>
    <template #content>
      <div class="connect-wallet">
        <div class="connect-wallet__main">
          <div class="guide-steps">
            <GuideStepCard step-number="1" description="Описание что нужно сделать" />
            <GuideStepCard step-number="2" description="Описание что нужно сделать" />
            <GuideStepCard step-number="3" description="Описание что нужно сделать" />
          </div>
        </div>
        <div class="connect-wallet__footer">
          <Button size="md" class="connect-wallet__button">Connect wallet </Button>
        </div>
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.connect-wallet {
  padding-top: 44px;
  padding-inline: 30px;
  &__main {
  }

  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 31px;
  }

  .guide-steps {
    display: flex;
    gap: 57px;
  }
}
</style>
