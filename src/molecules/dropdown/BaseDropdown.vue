<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Option {
  label: string
  value: string | number
}

interface Props {
  options: Option[]
  offset?: number
}

const props = withDefaults(defineProps<Props>(), {
  offset: 8,
})

const selected = defineModel<Option | null>({ default: null })

const isOpen = ref(false)
const triggerRef = ref<HTMLElement | null>(null)

const menuStyles = ref({
  top: '0px',
  left: '0px',
  width: '0px',
})

const updatePosition = () => {
  if (!triggerRef.value) {
    return
  }

  const rect = triggerRef.value.getBoundingClientRect()

  menuStyles.value = {
    top: `${rect.bottom + props.offset}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
  }
}

const toggle = () => {
  if (!isOpen.value) {
    updatePosition()
  }

  isOpen.value = !isOpen.value
}

const select = (option: Option) => {
  selected.value = option
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node

  const isOutsideTrigger = triggerRef.value && !triggerRef.value.contains(target)

  const menu = document.querySelector('.dropdown-content')

  const isOutsideMenu = menu && !menu.contains(target)

  if (isOutsideTrigger && isOutsideMenu) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)

  window.addEventListener('scroll', updatePosition, true)
  window.addEventListener('resize', updatePosition)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', updatePosition, true)
  window.removeEventListener('resize', updatePosition)
})
</script>

<template>
  <div ref="triggerRef" class="dropdown-shell">
    <slot name="trigger" :toggle="toggle" :is-open="isOpen" :selected="selected" />

    <Teleport to="body">
      <div
        v-if="isOpen"
        class="dropdown-content"
        :style="{
          position: 'fixed',
          top: menuStyles.top,
          left: menuStyles.left,
          width: menuStyles.width,
          zIndex: 99999,
        }"
      >
        <slot name="menu" :options="options" :select="select" :selected="selected" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.dropdown-shell {
  display: inline-block;
  width: fit-content;
}
</style>
