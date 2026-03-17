<script setup lang="ts">
import logo from '@/assets/icons/logo-1.svg?url'
import { ref } from 'vue'
import SearchBar from './components/searchbar/Searchbar.vue'
import Button from '@/atoms/button/Button.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import ProfileMenu from './components/profile-menu/ProfileMenu.vue'

const currentUser = ref({
  name: 'User Name',
  username: 'username',
  avatarUrl: 'https://i.pravatar.cc/150?u=1',
  address: '0c0xcx1cx606g4516x51g1...',
  balance: '1,5M',
})

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
        <div v-if="true" class="header__user-actions">
          <Button size="sm">+ Add artwork</Button>
          <ProfileMenu
            v-bind="currentUser"
            @logout="handleLogout"
            @profile="handleOpenProfile"
            @balance-settings="() => console.log('Settings')"
          />
        </div>

        <Button v-else size="sm">Connect wallet</Button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-radius: 0 0 32px 32px;
  background: #30363d;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 56px;
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
    flex: 0 0 47px;
    height: 47px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  :deep(.search-bar) {
    margin-left: 25px;
  }

  &__actions {
    display: flex;
    align-items: center;
    margin-left: 17px;
  }

  &__user-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
