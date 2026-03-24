<script setup lang="ts">
import ArtDetails from '@/organisms/art-details/ArtDetails.vue'
import ArtDetailsField from '@/organisms/art-details/ArtDetailsField.vue'
import ArtDetailsActions from '@/organisms/art-details/ArtDetailsActions.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import Button from '@/atoms/button/Button.vue'
import ArtDetailsSocials from '@/organisms/art-details/ArtDetailsSocials.vue'
import ArtDetailsUserStats from '@/organisms/art-details/ArtDetailsUserStats.vue'
import { ref } from 'vue'
import FollowModal from '../components/FollowModal.vue'

const artData = ref({
  title: 'WFH - art name',
  copyNumber: 2,
  copyTotal: 10,
  description:
    'The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).',
  name: 'User Name',
  username: 'username',
  avatarUrl: 'https://i.pravatar.cc/150?u=1',
})

const isFollowModalOpen = ref(false)

const openFollowModal = () => {
  isFollowModalOpen.value = true
}
</script>
<template>
  <div class="creator-info app-container">
    <ArtDetails>
      <template #header>
        <div class="creator-info__header-wrapper">
          <UserIdentity
            :name="artData.name"
            :username="artData.username"
            :avatar-url="artData.avatarUrl"
            size="lg"
          />
          <ArtDetailsUserStats />
          <Button @click="openFollowModal">Follow</Button>
          <ArtDetailsActions
            @share="() => console.log('Shared!')"
            @external="() => console.log('Link opened!')"
            @menu="() => console.log('Menu opened!')"
          />
        </div>
      </template>

      <ArtDetailsSocials />

      <ArtDetailsField label="Description:">
        <span style="max-width: 1061px">
          {{ artData.description }}
        </span>
      </ArtDetailsField>
    </ArtDetails>
    <FollowModal v-model="isFollowModalOpen" />
  </div>
</template>
<style scoped lang="scss">
.creator-info {
  $bp-sm: 680px;

  &__header-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    align-items: center;
    column-gap: 15px;

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        'avatar actions'
        'stats   button';
      row-gap: 15px;
    }
  }

  :deep(.art-details) {
    .art-details__header {
      margin-bottom: clamp(18px, 1.8vw, 25px);
    }

    .art-details__body {
      gap: 16px;
      max-width: 1060px;
    }
  }

  :deep(.user-identity) {
    @media (max-width: $bp-sm) {
      grid-area: avatar;
    }

    .user-identity__name {
      margin-bottom: 3px;

      @media (max-width: globalBreakpoints.$breakpoint-xs) {
        margin-bottom: 0;
      }
    }
    .user-identity__info {
      gap: 0 !important;
    }
  }

  :deep(.user-stats) {
    @media (max-width: $bp-sm) {
      grid-area: stats;
    }
  }

  :deep(.taste-btn) {
    padding: 0 32px;
    font-size: clamp(12px, 1vw, 13px);

    @media (max-width: $bp-sm) {
      grid-area: button;
    }
  }

  :deep(.art-actions) {
    @media (max-width: $bp-sm) {
      grid-area: actions;
    }
  }

  :deep(.social-links) {
    @media (max-width: globalBreakpoints.$breakpoint-xs) {
      gap: 0;
      justify-content: space-between;
    }
  }
}
</style>
