<script setup lang="ts">
interface Props {
  name: string
  username: string
  avatarUrl?: string
  size?: 'md' | 'sm'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  avatarUrl: '',
})
</script>

<template>
  <div :class="['user-identity', `user-identity_size_${size}`]">
    <div class="user-identity__avatar-wrapper">
      <img v-if="avatarUrl" :src="avatarUrl" class="user-identity__avatar" alt="User avatar" />
      <div v-else class="user-identity__avatar-placeholder" />
    </div>

    <div class="user-identity__info">
      <h3 class="user-identity__name">{{ name }}</h3>
      <span class="user-identity__username">@{{ username }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-identity {
  display: flex;
  align-items: center;
  width: fit-content;

  &__avatar-wrapper {
    flex-shrink: 0;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15);
  }

  &__avatar,
  &__avatar-placeholder {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__avatar-placeholder {
    background: #30363d;
  }

  &__info {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }

  &__name {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
  }

  &__username {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  &_size_lg {
    gap: 12px;

    .user-identity__avatar-wrapper {
      width: 49px;
      height: 49px;
      border-radius: 12px;
    }

    .user-identity__name {
      font-size: 18px;
      line-height: 21px;
    }

    .user-identity__username {
      font-size: 14px;
      line-height: 16px;
      background-image: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
    }
  }

  &_size_md {
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
      background-image: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
    }
  }

  &_size_sm {
    gap: 8px;

    .user-identity__avatar-wrapper {
      width: 26px;
      height: 26px;
      border-radius: 8px;
    }

    .user-identity__name {
      font-size: 14px;
      line-height: 16px;
    }

    .user-identity__username {
      font-size: 12px;
      line-height: 14px;
      background-image: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
    }
  }
}
</style>
