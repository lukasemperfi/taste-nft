import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import ArtDetails from './ArtDetails.vue'
import ArtDetailsTitle from './ArtDetailsTitle.vue'
import ArtDetailsField from './ArtDetailsField.vue'
import ArtDetailsActions from './ArtDetailsActions.vue'
import UserIdentity from '@/molecules/user-identity/UserIdentity.vue'
import TokenBalance from '@/atoms/token-balance/TokenBalance.vue'
import Button from '@/atoms/button/Button.vue'
import ArtDetailsSocials from './ArtDetailsSocials.vue'
import ArtDetailsUserStats from './ArtDetailsUserStats.vue'

const meta: Meta = {
  title: 'Organisms/ArtDetails',
  component: ArtDetails,
  tags: ['autodocs'],
}

export default meta

export const ArtWorkPage: StoryObj = {
  render: (args) => ({
    components: { ArtDetails, ArtDetailsTitle, ArtDetailsField, ArtDetailsActions, UserIdentity },
    setup() {
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

      return { artData }
    },
    template: `
      <div style="background: #14171B;  max-width: 517px; min-height: 500px; display: flex; justify-content: center;">
        
        <ArtDetails>
          <template #header>
            <UserIdentity :name="artData.name" :username="artData.username" :avatar-url="artData.avatarUrl" />
          </template>

          <ArtDetailsTitle :title="artData.title" />
          
          <ArtDetailsField label="Copy">
            {{ artData.copyNumber }} of {{ artData.copyTotal }}
          </ArtDetailsField>

          <ArtDetailsField label="Description">
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
    `,
  }),
}

export const ArtMainPage: StoryObj = {
  render: (args) => ({
    components: {
      ArtDetails,
      ArtDetailsTitle,
      ArtDetailsField,
      ArtDetailsActions,
      UserIdentity,
      TokenBalance,
      Button,
    },
    setup() {
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

      return { artData }
    },
    template: `
      <div style="background: #14171B;  max-width: 517px; min-height: 500px; display: flex; justify-content: center;">
        
        <ArtDetails>
          <template #header>
            <UserIdentity :name="artData.name" :username="artData.username" :avatar-url="artData.avatarUrl" />
          </template>

          <ArtDetailsTitle :title="artData.title" />
          
          <ArtDetailsField label="Description:">
            {{ artData.description }}
          </ArtDetailsField>

          <template #footer>
            
            <ArtDetailsField label="Sold for:">
              <TokenBalance size="sm"/>
            </ArtDetailsField>

        
            <div class="art-details__actions" style="display: flex; gap: 12px; align-items: flex-end;">
            <Button>
              View
            </Button>
            <ArtDetailsActions 
              @share="() => console.log('Shared!')" 
              @external="() => console.log('Link opened!')" 
              @menu="() => console.log('Menu opened!')"
            />
            </div>
          </template>
        </ArtDetails>
      </div>
    `,
  }),
}

export const CreatorProfilePage: StoryObj = {
  render: (args) => ({
    components: {
      ArtDetails,
      ArtDetailsTitle,
      ArtDetailsField,
      ArtDetailsActions,
      UserIdentity,
      Button,
      ArtDetailsSocials,
      ArtDetailsUserStats,
    },
    setup() {
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

      return { artData }
    },
    template: `
      <div style="background: #14171B;">
        
        <ArtDetails>
          <template #header>
            <UserIdentity :name="artData.name" :username="artData.username" :avatar-url="artData.avatarUrl" />

            <div class="art-details__actions" style="display: flex; gap: 12px; align-items: flex-end;">
                <ArtDetailsUserStats/>
                <Button>
                    Follow
                </Button>
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

          <template #footer>

          </template>
        </ArtDetails>
      </div>
    `,
  }),
}
