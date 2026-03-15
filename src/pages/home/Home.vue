<script setup lang="ts">
import BaseInput from '@/atoms/form-controls/input/BaseInput.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
import { Tabs } from '@/molecules/tabs'
import ArtCard from '@/organisms/art-card/ArtCard.vue'
import ArtCardMenu from '@/organisms/art-card/ArtCardMenu.vue'

const testPlaceholder = 'Начните писать...'

const testValue = ref('ап')
const activeTab = ref('wallet')

function handleClick() {
  console.log('clicked')
}
</script>

<template>
  <h1>Home</h1>

  <div style="background: #14171b; max-width: 317px; display: flex; justify-content: center">
    <ArtCard>
      <template #badge>
        <span style="color: #000; font-weight: bold">Badge Content</span>
      </template>

      <template #menu>
        <ArtCardMenu />
      </template>
    </ArtCard>
  </div>
</template>
<style scoped lang="scss"></style>
