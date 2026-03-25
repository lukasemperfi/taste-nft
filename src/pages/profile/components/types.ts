import type { Artwork } from '@/helpers/artworks'

export interface MyArtworkCard extends Artwork {
  status: 'approved' | 'on-moderation' | 'declined'
}
