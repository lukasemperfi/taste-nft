<script setup lang="ts">
import BaseInput from '@/atoms/form-controls/input/BaseInput.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'
const testPlaceholder = 'Начните писать...'

const testValue = ref('ап')

function handleClick() {
  console.log('clicked')
}
</script>

<template>
  <h1>Home</h1>
  <Button @click="handleClick">Click me</Button>
  <div style="background-color: #ffffff; padding: 20px">
    <BaseInput :placeholder="testPlaceholder" v-model="testValue" />
    <pre style="color: black; font-size: 12px">Текущее значение: {{ testValue }}</pre>
  </div>
</template>
<style scoped lang="scss"></style>
