import type { Meta, StoryObj } from '@storybook/vue3'
import ArtGrid from './ArtGrid.vue'
import ArtCard from '@/organisms/art-card/ArtCard.vue'

interface MockItem {
  id: number
  title: string
  soldFor: string
  endingIn: string
  image: string
}

const mockItems: MockItem[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Artwork #${i + 1}`,
  soldFor: '1.5M',
  endingIn: '05h 02m 41s',
  image: `https://picsum.photos/317/317?random=${i}`,
}))

const meta = {
  title: 'Organisms/ArtGrid',
  component: ArtGrid as any,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
} satisfies Meta<typeof ArtGrid>

export default meta

type Story = StoryObj<typeof ArtGrid<MockItem>>

export const Default: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => ({
    components: { ArtGrid, ArtCard },
    setup() {
      return { args }
    },
    template: `
      <div style="background: #15191d; padding: 25px; min-height: 100vh; max-width: 1366px; margin: 0 auto;">
        <ArtGrid v-bind="args">
          <template #item="{ item }">
            <ArtCard 
              :title="item.title"
              :soldFor="item.soldFor"
              :endingIn="item.endingIn"
              :image="item.image"
            />
          </template>
        </ArtGrid>
      </div>
    `,
  }),
}
