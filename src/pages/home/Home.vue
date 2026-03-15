<script setup lang="ts">
import BaseInput from '@/atoms/form-controls/input/BaseInput.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import { Tabs } from '@/molecules/tabs'

const testPlaceholder = 'Начните писать...'

const testValue = ref('ап')
const activeTab = ref('wallet')

function handleClick() {
  console.log('clicked')
}
</script>

<template>
  <h1>Home</h1>

  <Tabs.Root v-model="activeTab">
    <Tabs.List>
      <Tabs.Trigger id="wallet"> Wallet </Tabs.Trigger>
      <Tabs.Trigger id="history"> History </Tabs.Trigger>
    </Tabs.List>
    <div class="tabs-content-container">
      <Tabs.Panel id="wallet">
        <div class="wallet-list">
          <div class="wallet-item">Ethereum Card</div>
          <div class="wallet-item">Solana Card</div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel id="history">
        <div class="history-list">
          <p>No recent transactions found.</p>
        </div>
      </Tabs.Panel>
    </div>
  </Tabs.Root>
</template>
<style scoped lang="scss"></style>
