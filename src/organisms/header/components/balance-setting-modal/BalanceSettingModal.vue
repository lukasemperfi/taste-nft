<script setup lang="ts">
import Modal from '@/molecules/modal/Modal.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import { delay } from '@/helpers/delay'
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'
import Icon from '@/atoms/icon/VIcon.vue'
import FormField from '@/atoms/form-controls/form-field/FormField.vue'
import TokenInput from '@/molecules/token-input/TokenInput.vue'

type Views = 'default' | 'swap' | 'deposit' | 'withdraw'

const views = {
  default: 'default',
  swap: 'swap',
  deposit: 'deposit',
  withdraw: 'withdraw',
}

const isOpen = defineModel<boolean>()
const isLoading = ref(false)
const currentView = ref('default')

const back = () => {
  currentView.value = 'default'
}

const swap = () => {
  currentView.value = 'swap'
}

const deposit = () => {
  currentView.value = 'deposit'
}

const withdraw = () => {
  currentView.value = 'withdraw'
}

const closeModal = () => {
  isOpen.value = false
  resetState()
}

const resetState = () => {
  currentView.value = 'default'
}
</script>

<template>
  <Modal v-bind="$attrs" v-model="isOpen">
    <template v-if="currentView !== 'default'" #header-left-default>
      <button class="back-button" @click="back">
        <Icon name="back" />
      </button>
    </template>
    <template #header-center>
      <span v-if="currentView === 'default'">Balance setting</span>
      <span v-if="currentView === 'swap'">Swap to TASTE</span>
      <span v-if="currentView === 'deposit'">Deposit to TASTE</span>
      <span v-if="currentView === 'withdraw'">Withdraw</span>
    </template>
    <template #content>
      <div class="modal-content">
        <div v-if="currentView === 'default'" class="balance-setting">
          <div class="tokens">
            <div class="tokens__item">
              <TokenBalance size="md" />
              <div class="tokens__actions">
                <button class="tokens__action" @click="withdraw">Withdraw</button>
              </div>
            </div>
            <div class="tokens__item">
              <TokenBalance size="md" token-icon="pattern" />
              <div class="tokens__actions">
                <button class="tokens__action" @click="swap">Swap to TASTE</button>
                <button class="tokens__action" @click="deposit">Deposit</button>
                <button class="tokens__action" @click="withdraw">Withdraw</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="get-tokens">
          <FormField class="get-tokens__field">
            <template #label>You will get</template>
            <TokenInput
              class="get-tokens__input"
              symbol="TASTE"
              fiat-value="1308.54$"
              :show-balance="true"
              token-icon="logo-3"
            />
          </FormField>
          <div class="get-tokens__actions">
            <Button class="get-tokens__action" @click="closeModal">
              <span v-if="currentView === 'swap'">Swap</span>
              <span v-if="currentView === 'deposit'">Deposit</span>
              <span v-if="currentView === 'withdraw'">Confirm</span>
            </Button>
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

.back-button {
  position: absolute;
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

.get-tokens {
  &__actions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }

  &__action {
    width: 157px;
  }
}
</style>
