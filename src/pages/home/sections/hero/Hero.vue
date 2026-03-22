<script setup ts>
import { ref } from 'vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'
import Button from '@/atoms/button/Button.vue'
import ArtDetailsActions from '@/organisms/art-details/ArtDetailsActions.vue'
import ArtDetailsField from '@/organisms/art-details/ArtDetailsField.vue'
import ArtDetailsTitle from '@/organisms/art-details/ArtDetailsTitle.vue'
import ArtDetails from '@/organisms/art-details/ArtDetails.vue'
import ArtworkSlider from '@/pages/home/components/artwork-slider/ArtworkSlider.vue'

const artData = ref({
  title: 'WFH - art name',
  copyNumber: 2,
  copyTotal: 10,
  description:
    'The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站)',
  name: 'User Name',
  username: 'username',
  avatarUrl: 'https://i.pravatar.cc/150?u=1',
})

const artList = ref([
  {
    id: 1,
    name: 'WFH - art name',
    username: 'cryptopunk',
    price: '0.34 ETH',
    image: 'https://picsum.photos/id/101/600/600',
  },
  {
    id: 2,
    name: 'Abstract Geometry',
    username: 'design_master',
    price: '1.20 ETH',
    image: 'https://picsum.photos/id/102/600/600',
  },
  {
    id: 3,
    name: 'Digital Ocean',
    username: 'ocean_wave',
    price: '0.55 ETH',
    image: 'https://picsum.photos/id/103/600/600',
  },
  {
    id: 4,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/104/600/600',
  },
  {
    id: 11,
    name: 'WFH - art name',
    username: 'cryptopunk',
    price: '0.34 ETH',
    image: 'https://picsum.photos/id/101/600/600',
  },
  {
    id: 21,
    name: 'Abstract Geometry',
    username: 'design_master',
    price: '1.20 ETH',
    image: 'https://picsum.photos/id/102/600/600',
  },
  {
    id: 31,
    name: 'Digital Ocean',
    username: 'ocean_wave',
    price: '0.55 ETH',
    image: 'https://picsum.photos/id/103/600/600',
  },
  {
    id: 41,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/104/600/600',
  },
])
</script>
<template>
  <div class="hero app-container">
    <div class="hero__column hero__column-1">
      <ArtDetails>
        <template #header>
          <UserIdentity
            :name="artData.name"
            :username="artData.username"
            :avatar-url="artData.avatarUrl"
          />
        </template>

        <ArtDetailsTitle :title="artData.title" />

        <ArtDetailsField label="Description:">
          {{ artData.description }}
        </ArtDetailsField>

        <template #footer>
          <ArtDetailsField label="Sold for:">
            <TokenBalance size="sm" />
          </ArtDetailsField>

          <div class="art-details__actions" style="display: flex; gap: 12px; align-items: flex-end">
            <Button> View </Button>
            <ArtDetailsActions
              @share="() => console.log('Shared!')"
              @external="() => console.log('Link opened!')"
              @menu="() => console.log('Menu opened!')"
            />
          </div>
        </template>
      </ArtDetails>
    </div>

    <div class="hero__column hero__column-2">
      <ArtworkSlider :items="artList" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  display: flex;
  gap: 16px;
  padding-block: 24px;

  &__column {
    &-1 {
      flex: 1 1 516px;
      background: rgba(255, 255, 255, 0.05);
      max-width: 516px;
      display: flex;
      align-items: flex-end;

      :deep(.art-details__footer) {
        .art-field {
          display: flex;
        }
      }
    }

    &-2 {
      flex: 1 1 786px;
      min-width: 0;
      aspect-ratio: 786/572;
      max-height: 572px;
    }
  }

  &__slider-container {
    width: 100%;
    height: 100%;
    position: relative;

    // :deep(.swiper) {
    //   width: 100%;
    //   height: 100%;
    //   border-radius: 16px;
    // }
  }
}

.placeholder-swiper {
  width: 100%;
  height: 100%;
  background: #1d2228;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
}
</style>
