<script setup lang="ts">
import logo from '@/assets/icons/logo-1.svg?url'
import { ref } from 'vue'
import SearchBar from './components/searchbar/Searchbar.vue'
import Button from '@/atoms/button/Button.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'

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
        <UserIdentity v-if="true" name="John Doe" username="johndoe" />

        <Button v-else size="sm">Connect wallet</Button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-radius: 0 0 32px 32px;
  box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.05);
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
}
</style>
