<script setup lang="ts">
import BaseDropdown from '@/molecules/dropdown/BaseDropdown.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import VIcon from '@/atoms/icon/VIcon.vue'
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

interface Props {
  name: string
  username: string
  avatarUrl: string
  address: string
  balance: string
}

defineProps<Props>()
const emit = defineEmits(['logout', 'profile', 'balance-settings'])

const { width } = useWindowSize()

const dynamicOffset = computed(() => {
  if (width.value < 1025) {
    return 16
  }
  return 12
})
</script>

<template>
  <BaseDropdown :options="[]" :offset="dynamicOffset" class="profile-menu">
    <template #trigger="{ toggle, isOpen }">
      <div class="profile-menu__trigger" @click="toggle">
        <UserIdentity :name="name" :username="username" size="md" :avatar-url="avatarUrl" />
        <div class="profile-menu__balance">
          <span class="profile-menu__balance-label">Balance:</span>
          <TokenBalance size="xs" />
        </div>
        <div class="profile-menu__arrow-wrapper">
          <VIcon
            name="polygon"
            :class="['profile-menu__arrow', { 'profile-menu__arrow_open': isOpen }]"
          />
        </div>
      </div>
    </template>

    <template #menu="{ isOpen, toggle }">
      <div class="profile-menu__content">
        <div class="profile-menu__header">
          <UserIdentity :name="name" :username="username" size="md" :avatar-url="avatarUrl" />
          <div class="profile-menu__balance">
            <span class="profile-menu__balance-label">Balance:</span>
            <TokenBalance size="xs" />
          </div>
          <div class="profile-menu__arrow-wrapper">
            <VIcon
              name="polygon"
              :class="['profile-menu__arrow', { 'profile-menu__arrow_open': isOpen }]"
            />
          </div>
        </div>
        <p class="profile-menu__address">Address: {{ address }}</p>
        <nav class="profile-menu__nav" @click="toggle">
          <button class="profile-menu__link" @click="emit('profile')">My profile</button>
          <button class="profile-menu__link" @click="emit('balance-settings')">
            Balance settings
          </button>
          <button class="profile-menu__link profile-menu__link_logout" @click="emit('logout')">
            Log out
          </button>
        </nav>
      </div>
    </template>
  </BaseDropdown>
</template>

<style lang="scss" scoped>
.profile-menu {
  $profile-bp-lg: 1024px;

  &__trigger {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    user-select: none;

    :deep(.user-identity) {
      .user-identity__info {
        @media (max-width: $profile-bp-lg) {
          display: none;
        }
      }
    }

    .profile-menu__balance {
      @media (max-width: $profile-bp-lg) {
        display: none;
      }
    }

    .profile-menu__arrow-wrapper {
      @media (max-width: $profile-bp-lg) {
        display: none;
      }
    }
  }

  &__arrow-wrapper {
    width: 13px;
    align-self: center;
  }

  &__arrow {
    width: 13px;
    height: 5px;
    color: rgba(255, 255, 255, 0.5);
    transition: transform 0.3s ease;
    align-self: center;
    opacity: 0.5;

    &_open {
      transform: scaleY(-1);
    }
  }

  &__content {
    max-width: 267px;
    background: #30363d;
    border-radius: 12px;
    padding-inline: 12px;
    padding-block: 8px;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;

    :deep(.user-identity__avatar-wrapper) {
      width: 36px;
      height: 36px;
      border-radius: 8px;
    }

    :deep(.user-identity__info) {
      gap: 0;
    }
  }

  &__header {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    user-select: none;
    margin-bottom: globalFunctions.fluidValue(10px, 17px, 375px, 1366px);
  }

  &__balance {
    display: flex;
    align-items: center;
    gap: 4px;
    transform: translateX(-6px);

    &-label {
      font-family: var(--font-family);
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__address {
    font-weight: 600;
    font-size: globalFunctions.fluidValue(12px, 14px, 375px, 1366px);
    color: rgba(255, 255, 255, 0.5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: globalFunctions.fluidValue(6px, 10px, 375px, 1366px);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: globalFunctions.fluidValue(6px, 12px, 375px, 1366px);
  }

  &__link {
    background: none;
    border: none;
    padding: 0;
    text-align: left;
    font-weight: 600;
    font-size: globalFunctions.fluidValue(12px, 14px, 375px, 1366px);
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &_logout {
      color: #ff5e54;
    }
  }
}
</style>
