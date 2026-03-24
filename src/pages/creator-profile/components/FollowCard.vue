<script setup lang="ts">
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import Button from '@/atoms/button/Button.vue'
import { ref } from 'vue'

interface Props {
  name: string
  username: string
  avatarUrl: string
  isFollow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isFollow: false,
})

const isFollow = ref(props.isFollow)

const handleFollow = () => {
  console.log('Follow!')
  isFollow.value = true
}

const handleUnfollow = () => {
  console.log('Unfollow!')
  isFollow.value = false
}
</script>

<template>
  <div class="follow-card">
    <UserIdentity :name="name" :username="username" :avatar-url="avatarUrl" size="lg" />
    <div class="follow-card__actions">
      <Transition name="fade" mode="out-in">
        <Button
          v-if="!isFollow"
          class="follow-card__action follow-card__action_follow"
          @click="handleFollow"
          size="md"
        >
          Follow
        </Button>
        <Button
          v-else
          class="follow-card__action follow-card__action_unfollow"
          @click="handleUnfollow"
          variant="outline"
        >
          Unfollow
        </Button>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.follow-card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  :deep(.user-identity) {
    .user-identity__avatar-wrapper {
      @media (max-width: globalBreakpoints.$breakpoint-xs) {
        width: 40px;
        height: 40px;
        border-radius: 8px;
      }
    }

    .user-identity__info {
      gap: 4px;

      @media (max-width: globalBreakpoints.$breakpoint-xs) {
        gap: 0;
      }

      .user-identity__name {
        font-size: 16px;
      }

      .user-identity__username {
        font-size: 12px;
      }
    }
  }

  :deep(.taste-btn) {
    padding: 0 27px;
    font-size: 12px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
}
</style>
