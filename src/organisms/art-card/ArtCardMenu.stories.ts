import type { Meta, StoryObj } from '@storybook/vue3'
import ArtCardMenu from './ArtCardMenu.vue'

const meta: Meta<typeof ArtCardMenu> = {
  title: 'Organisms/ArtCardMenu',
  component: ArtCardMenu,
}

export default meta

export const Default: StoryObj = {
  render: () => ({
    components: { ArtCardMenu },
    template: `
      <div style="padding: 100px; background: #1D2228; min-height: 300px;">
        <ArtCardMenu />
      </div>
    `,
  }),
}
