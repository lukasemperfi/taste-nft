<script setup lang="ts"></script>

<template>
  <section class="art-details">
    <header class="art-details__header">
      <slot name="header" />
    </header>

    <div class="art-details__body">
      <slot />
    </div>

    <footer class="art-details__footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.art-details {
  display: flex;
  flex-direction: column;

  &__header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 14px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
