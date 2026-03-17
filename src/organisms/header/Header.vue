<script setup lang="ts">
import logo from '@/assets/icons/logo-1.svg?url'
import { ref } from 'vue'
import SearchBar from './components/searchbar/Searchbar.vue'
import Button from '@/atoms/button/Button.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import ProfileMenu from './components/profile-menu/ProfileMenu.vue'
import VIcon from '@/atoms/icon/VIcon.vue'
import ConnectWalletModal from './components/connect-wallet-modal/ConnectWalletModal.vue'

const currentUser = ref({
  name: 'User Name',
  username: 'username',
  avatarUrl: 'https://i.pravatar.cc/150?u=1',
  address: '0c0xcx1cx606g4516x51g1...',
  balance: '1,5M',
})

const isOpenConnectWalletModal = ref(false)

const toogleConnectWalletModal = () => {
  isOpenConnectWalletModal.value = !isOpenConnectWalletModal.value
}

const handleLogout = () => {
  console.log('User logged out')
}

const handleOpenProfile = () => {
  console.log('Redirecting to profile...')
}

const searchQuery = ref('')

const onSearch = (value: string) => {
  console.log('Searching for:', value)
}

const onClear = () => {
  console.log('Search cleared')
}
</script>

<template>
  <header class="header">
    <div class="header__container app-container">
      <RouterLink to="/" class="header__logo">
        <img :src="logo" alt="TasteNFT" class="header__logo-img" />
      </RouterLink>

      <SearchBar
        v-model="searchQuery"
        placeholder="Search for ..."
        @search="onSearch"
        @clear="onClear"
      />

      <div class="header__actions">
        <div v-if="false" class="header__user-actions">
          <Button size="sm" class="art-work-button">
            <span class="art-work-button__label">+ Add artwork</span>
            <span class="art-work-button__icon">+</span>
          </Button>
          <ProfileMenu
            v-bind="currentUser"
            @logout="handleLogout"
            @profile="handleOpenProfile"
            @balance-settings="() => console.log('Settings')"
          />
        </div>

        <Button v-else size="sm" class="wallet-button" @click="toogleConnectWalletModal">
          <span class="wallet-button__label">Connect wallet</span>
          <VIcon name="connection" class="wallet-button__icon" />
        </Button>
        <ConnectWalletModal v-model="isOpenConnectWalletModal" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-radius: 0 0 globalFunctions.fluidValue(16px, 32px, 375px, 1336px)
    globalFunctions.fluidValue(16px, 32px, 375px, 1336px);
  background: #30363d;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: globalFunctions.fluidValue(48px, 56px, 375px, 1336px);
  display: flex;
  align-items: center;

  &__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 globalFunctions.fluidValue(36px, 47px, 375px, 1336px);
    height: globalFunctions.fluidValue(36px, 47px, 375px, 1336px);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  :deep(.search-bar) {
    margin-left: globalFunctions.fluidValue(12px, 25px, 375px, 1336px);
  }

  &__actions {
    display: flex;
    align-items: center;
    margin-left: globalFunctions.fluidValue(8px, 17px, 375px, 1336px);
  }

  :deep(.user-identity) {
    .user-identity__avatar-wrapper {
      @media (max-width: globalBreakpoints.$breakpoint-md) {
        width: 28px;
        height: 28px;
        border-radius: 8px;
      }
    }
  }

  &__user-actions {
    display: flex;
    align-items: center;
    gap: globalFunctions.fluidValue(10px, 16px, 375px, 1336px);
  }

  .art-work-button {
    @media (max-width: globalBreakpoints.$breakpoint-md) {
      width: 28px;
      height: 28px;
      padding: 0;
      border-radius: 8px;
    }

    &__label {
      @media (max-width: globalBreakpoints.$breakpoint-md) {
        display: none;
      }
    }

    &__icon {
      display: none;
      @media (max-width: globalBreakpoints.$breakpoint-md) {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        line-height: 1;
        width: 100%;
        height: 100%;
      }
    }
  }

  .wallet-button {
    @media (max-width: globalBreakpoints.$breakpoint-md) {
      height: 28px;
      border-radius: 8px;
    }

    @media (max-width: globalBreakpoints.$breakpoint-sm) {
      width: 28px;
      height: 28px;
      padding: 0;
    }

    &__label {
      font-size: globalFunctions.fluidValue(11px, 12px, 375px, 1336px);
      @media (max-width: globalBreakpoints.$breakpoint-sm) {
        display: none;
      }
    }

    &__icon {
      display: none;
      @media (max-width: globalBreakpoints.$breakpoint-sm) {
        display: block;
      }

      :deep(path) {
        @media (max-width: globalBreakpoints.$breakpoint-sm) {
          fill: #ffffff;
        }
      }
    }
  }
}
</style>
