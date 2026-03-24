<script setup lang="ts">
import { ref } from 'vue'
import ArtDetails from '@/organisms/art-details/ArtDetails.vue'
import ArtDetailsTitle from '@/organisms/art-details/ArtDetailsTitle.vue'
import ArtDetailsField from '@/organisms/art-details/ArtDetailsField.vue'
import ArtDetailsActions from '@/organisms/art-details/ArtDetailsActions.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import ActivityList from '@/pages/artwork/components/ActivityList.vue'
import AuctionCard from '@/pages/artwork/components/AuctionCard.vue'
import PlaceBidModal from '@/pages/artwork/components/PlaceBidModal.vue'

const artData = ref({
  title: 'WFH - art name',
  copyNumber: 2,
  copyTotal: 10,
  description: `The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).`,
  name: 'User Name',
  username: 'username',
  avatarUrl: 'https://i.pravatar.cc/150?u=1',
})

const activitiesData = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  userAvatar: `https://i.pravatar.cc/150?u=${i}`,
  walletAddress: '0x6FC0...14A4',
  date: 'May 19, 2021 at 2:27pm',
  amountToken: '1,5M',
  amountUsd: '1308.54',
  externalLink: '#',
}))

const isBid = ref(false)
const isBidModalOpen = ref(false)

const handleBid = () => {
  console.log('Bid!')
  isBidModalOpen.value = true
}
const handleBuy = () => {
  console.log('Buy!')
}

const onBidSuccess = (value: string) => {
  console.log('Bid success', value)
  isBid.value = true
}
</script>
<template>
  <div class="bid">
    <div class="bid__container app-container">
      <div class="bid__top" :class="isBid ? 'bid__top_buy' : 'bid__top_place'">
        <AuctionCard v-if="!isBid" button-text="Place a bid" @click="handleBid" />
        <AuctionCard
          v-else
          label="Price:"
          button-text="Buy art"
          class="auction-card_buy"
          @click="handleBuy"
        />
      </div>
      <div class="bid__col-1">
        <ArtDetails>
          <template #header>
            <UserIdentity
              :name="artData.name"
              :username="artData.username"
              :avatar-url="artData.avatarUrl"
              size="lg"
            />
          </template>

          <ArtDetailsTitle :title="artData.title" />

          <ArtDetailsField label="Copy:">
            {{ artData.copyNumber }} of {{ artData.copyTotal }}
          </ArtDetailsField>

          <ArtDetailsField label="Description:">
            {{ artData.description }}
          </ArtDetailsField>

          <template #footer>
            <ArtDetailsActions
              @share="() => console.log('Shared!')"
              @external="() => console.log('Link opened!')"
              @menu="() => console.log('Menu opened!')"
            />
          </template>
        </ArtDetails>
      </div>
      <div class="bid__col-2">
        <ActivityList :activities="activitiesData" />
      </div>
    </div>
    <PlaceBidModal v-model="isBidModalOpen" @success="onBidSuccess" />
  </div>
</template>
<style scoped lang="scss">
.bid {
  $bp-md: 1066px;

  &__container {
    display: flex;
    gap: 22px;
    position: relative;

    @media (max-width: $bp-md) {
      flex-direction: column;
    }
  }

  &__top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -106px);

    &_place {
      @media (max-width: 560px) {
        transform: translate(-50%, -151px);
      }
    }
  }

  &__col-1 {
    flex: 1 1 517px;

    @media (max-width: $bp-md) {
      flex: 1;
    }
  }

  &__col-2 {
    flex: 1 1 779px;
    padding-top: 6px;

    @media (max-width: $bp-md) {
      padding-top: 0;
      flex: 1;
    }
  }

  :deep(.auction-card_buy) {
    display: flex;
    width: max-content;

    .auction-card__section_token-balance {
      border-right: 3px solid rgba(255, 255, 255, 0.15);
    }

    .auction-card__section_timer {
      display: none;
    }
  }
}
</style>
