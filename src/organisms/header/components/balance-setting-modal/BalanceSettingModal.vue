<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import { delay } from '@/helpers/delay'
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'

const isOpen = defineModel<boolean>()
const isLoading = ref(false)

// const handleConnectWallet = async () => {
//   isLoading.value = true
//   await delay(2000)
//   login()
//   isOpen.value = false
//   isLoading.value = false
// }
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template #header-center>Balance settings</template>
    <template #content>
      <div class="modal-content">
        <div class="balance-setting">
          <div class="tokens">
            <div class="tokens__item">
              <TokenBalance size="md" />
              <div class="tokens__actions">
                <button class="tokens__action">Withdraw</button>
              </div>
            </div>
            <div class="tokens__item">
              <TokenBalance size="md" token-icon="pattern" />
              <div class="tokens__actions">
                <button class="tokens__action">Swap to TASTE</button>
                <button class="tokens__action">Deposit</button>
                <button class="tokens__action">Withdraw</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.modal-content {
  padding-top: 25px;
  padding-bottom: 7px;
  padding-inline: clamp(12px, 1.76vw, 24px);
}

.balance-setting {
  .tokens {
    display: flex;
    justify-content: space-between;
    gap: 13px;

    &__item {
      box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.05);
      background: #1d2228;
      border-radius: 16px;
      width: 100%;
      padding-top: 19px;
      padding-bottom: 19px;
      padding-inline: 15px;
    }
    &__actions {
      margin-top: 10px;
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }
    &__action {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
      color: #ff5693;
      white-space: nowrap;
      cursor: pointer;
    }
  }
}
</style>
