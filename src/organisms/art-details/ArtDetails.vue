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
    margin-bottom: globalFunctions.fluidValue(12px, 20px, 375px, 1366px);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: globalFunctions.fluidValue(12px, 14px, 375px, 1366px);
  }

  &__footer {
    container-type: inline-size;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: globalFunctions.fluidValue(12px, 16px, 375px, 1366px);
  }

  :deep(.user-identity) {
    @media (max-width: 450px) {
      gap: 10px;

      .user-identity__info {
        gap: 4px;
      }

      .user-identity__avatar-wrapper {
        width: 40px;
        height: 40px;
        border-radius: 12px;
      }

      .user-identity__name {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 16px;
      }

      .user-identity__username {
        font-weight: 500;
        font-size: 12px;
      }
    }
  }

  :deep(.token-balance) {
    .token-balance__balance-text {
      font-size: globalFunctions.fluidValue(14px, 16px, 375px, 1366px);
    }
  }

  :deep(.taste-btn) {
    @media (max-width: 450px) {
      height: 38px;
      font-size: 13px;
    }
  }
}
</style>
