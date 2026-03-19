<script setup lang="ts"></script>
<template>
  <div class="form-field">
    <div class="form-field__label">
      <slot name="label" />
    </div>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__label {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);

    @media (max-width: globalBreakpoints.$breakpoint-sm) {
      font-size: 14px;
    }
  }
}
</style>
