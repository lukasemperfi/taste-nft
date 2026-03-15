import type { Meta, StoryObj } from '@storybook/vue3'
import ArtCard from './ArtCard.vue'
import ArtCardMenu from '@/organisms/art-card/ArtCardMenu.vue'

const meta: Meta<typeof ArtCard> = {
  title: 'Organisms/ArtCard',
  component: ArtCard,
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof ArtCard> = {
  args: {
    title: 'WFH - art name',
    endingIn: '05h 02m 41s',
    image:
      'https://img.pikbest.com/wp/202343/vibrant-abstract-fluid-art-wallpaper-with-colorful-textured-background-for-design_9973675.jpg!w700wp',
  },
  render: (args) => ({
    components: { ArtCard },
    setup() {
      return { args }
    },
    template: `
    <div style="background: #14171B;  max-width: 317px;  display: flex; justify-content: center;">
      <ArtCard v-bind="args">
        <template #badge>
          <span style="color: #000; font-weight: bold;">Badge Content</span>
        </template>
      </ArtCard>
      </div>
    `,
  }),
}

export const WithMenu: StoryObj<typeof ArtCard> = {
  args: {
    title: 'WFH - art name',
    endingIn: '05h 02m 41s',
    image:
      'https://img.pikbest.com/wp/202343/vibrant-abstract-fluid-art-wallpaper-with-colorful-textured-background-for-design_9973675.jpg!w700wp',
  },
  render: (args) => ({
    components: { ArtCard, ArtCardMenu },
    setup() {
      return { args }
    },
    template: `
    <div style="background: #14171B;  max-width: 317px;  display: flex; justify-content: center;">
      <ArtCard v-bind="args">
        <template #badge>
          <span style="color: #000; font-weight: bold;">Badge Content</span>
        </template>

        <template #menu>
          <ArtCardMenu />
        </template>
      </ArtCard>
      </div>
    `,
  }),
}
