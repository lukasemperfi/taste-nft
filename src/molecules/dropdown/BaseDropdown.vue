<script setup lang="ts">
import { ref } from 'vue'
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/vue'
import { onClickOutside } from '@vueuse/core'

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

const reference = ref<HTMLElement | null>(null)
const floating = ref<HTMLElement | null>(null)

const { floatingStyles } = useFloating(reference, floating, {
  placement: 'bottom',
  whileElementsMounted: autoUpdate,
  middleware: [
    offset(props.offset),
    flip({
      fallbackPlacements: ['top', 'bottom'],
      padding: 10,
    }),
    shift({
      padding: 10,
    }),
  ],
})

const toggle = () => {
  isOpen.value = !isOpen.value
}

const select = (option: Option) => {
  selected.value = option
  isOpen.value = false
}

onClickOutside(
  floating,
  () => {
    if (isOpen.value) isOpen.value = false
  },
  { ignore: [reference] },
)
</script>

<template>
  <div ref="reference" class="dropdown-shell">
    <slot name="trigger" :toggle="toggle" :is-open="isOpen" :selected="selected" />

    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="floating"
        class="dropdown-content"
        :style="{
          ...floatingStyles,
          zIndex: 99999,
        }"
      >
        <slot
          name="menu"
          :options="options"
          :select="select"
          :selected="selected"
          :is-open="isOpen"
          :toggle="toggle"
        />
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
