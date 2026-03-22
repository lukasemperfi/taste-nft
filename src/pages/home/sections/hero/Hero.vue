<script lang="ts" setup>
import { ref } from 'vue'
import ArtDetails from '@/organisms/art-details/ArtDetails.vue'
import ArtDetailsTitle from '@/organisms/art-details/ArtDetailsTitle.vue'
import ArtDetailsField from '@/organisms/art-details/ArtDetailsField.vue'
import ArtDetailsActions from '@/organisms/art-details/ArtDetailsActions.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'
import Button from '@/atoms/button/Button.vue'
import ArtworkSlider from '../../components/artwork-slider/ArtworkSlider.vue'
const artData = ref({
  title: 'WFH - art name',
  copyNumber: 2,
  copyTotal: 10,
  description: `The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站)`,
  name: 'User Name',
  username: 'username',
  avatarUrl: 'https://i.pravatar.cc/150?u=1',
})

const artworks = ref([
  {
    id: 1,
    name: 'WFH - art name first',
    username: 'cryptopunk',
    price: '0.34 ETH',
    image: 'https://picsum.photos/id/101/600/600', // Замени на реальные пути
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
    id: 43,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/105/600/600',
  },
  {
    id: 42,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/106/600/600',
  },
  {
    id: 46,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/99/600/600',
  },
  {
    id: 4,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/104/600/600',
  },
  {
    id: 43,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/105/600/600',
  },
  {
    id: 42,
    name: 'Neon Future',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/106/600/600',
  },
  {
    id: 46,
    name: 'Neon Future last',
    username: 'cyber_artist',
    price: '2.10 ETH',
    image: 'https://picsum.photos/id/99/600/600',
  },
])
</script>
<template>
  <section class="hero">
    <div class="hero__container app-container">
      <div class="hero__col-1">
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

          <ArtDetailsField label="Description:">
            {{ artData.description }}
          </ArtDetailsField>

          <template #footer>
            <ArtDetailsField label="Sold for:">
              <TokenBalance size="sm" />
            </ArtDetailsField>

            <div
              class="art-details__actions"
              style="display: flex; gap: 12px; align-items: flex-end"
            >
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
      <div class="hero__col-2">
        <ArtworkSlider :items="artworks" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.hero {
  --bottom-padding: 29px;
  &__container {
    display: flex;
    gap: 16px;
    padding-bottom: var(--bottom-padding);
  }

  &__col-1 {
    flex: 1 1 516px;
    max-width: 516px;
    display: flex;
    align-items: flex-end;

    :deep(.art-details__footer) {
      .art-field {
        display: flex;
        gap: 8px;
      }
    }

    :deep(.taste-btn) {
      padding: 0px 32px;
    }
  }

  &__col-2 {
    flex: 1 1 786px;

    max-width: 786px;
    max-height: 519px;
    aspect-ratio: 786 / 519;
    min-width: 0;
    position: relative;
  }
}
</style>
