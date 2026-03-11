<template>
  <div class="app-layout">
    <header class="header">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/profile/me">My Profile</router-link> |
        <router-link to="/artwork/1">Artwork</router-link>
      </nav>
    </header>

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}
</style>
