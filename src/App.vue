<script setup lang="ts">
import AppLayout from '@/templates/AppLayout.vue'
import { ref } from 'vue'
import { provide } from 'vue'

const searchQuery = ref('')

provide('searchContext', searchQuery)
</script>

<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<style scoped lang="scss"></style>
