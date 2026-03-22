export interface Author {
  name: string
  nickname: string
  avatar: string
}

export interface Artwork {
  image: string
  title: string
  endingIn: string
  balance: string
  tokenIcon?: string
  author?: Author
}

export const artworks: Artwork[] = [
  {
    image: 'https://picsum.photos/317/317?random=1',
    title: 'Ethereal Echoes',
    endingIn: '02h 15m 10s',
    tokenIcon: 'logo-2',
    balance: '1.25',
    author: {
      // name: 'Alex Rivera',
      // nickname: 'arivera',
      name: 'User Name',
      nickname: 'username',
      avatar: 'https://i.pravatar.cc/150?u=1',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=2',
    title: 'Neon Dreams',
    endingIn: '12h 40m 00s',
    tokenIcon: 'logo-2',
    balance: '45.00',
    author: {
      name: 'Marcus Void',
      nickname: 'mvoid_nft',
      avatar: 'https://i.pravatar.cc/150?u=2',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=3',
    title: 'Cybernetic Bloom',
    endingIn: '05m 30s 40s',
    tokenIcon: 'logo-2',
    balance: '0.85',
    author: {
      name: 'Elena Stone',
      nickname: 'elena_art',
      avatar: 'https://i.pravatar.cc/150?u=3',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=4',
    title: 'Digital Dust',
    endingIn: '1d 04h 32s',
    tokenIcon: 'logo-2',
    balance: '250.00',
    author: {
      name: 'Julian Hauk',
      nickname: 'jhauk',
      avatar: 'https://i.pravatar.cc/150?u=4',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=5',
    title: 'Abstract Pulse',
    endingIn: '08h 20m 30s',
    tokenIcon: 'logo-2',
    balance: '3.10',
    author: {
      name: 'Sofia Chen',
      nickname: 'schen_crypto',
      avatar: 'https://i.pravatar.cc/150?u=5',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=6',
    title: 'Golden Hour',
    endingIn: '45m 12s 30s',
    tokenIcon: 'logo-2',
    balance: '12.50',
    author: {
      name: 'Lucas Grey',
      nickname: 'lgrey',
      avatar: 'https://i.pravatar.cc/150?u=6',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=7',
    title: 'Vortex Vision',
    endingIn: '03h 10m 41s',
    tokenIcon: 'logo-2',
    balance: '0.45',
    author: {
      name: 'Nova Sky',
      nickname: 'novasky',
      avatar: 'https://i.pravatar.cc/150?u=7',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=8',
    title: 'Liquid Metal',
    endingIn: '15h 55m 41s',
    tokenIcon: 'logo-2',
    balance: '2.15',
    author: {
      name: 'Victor Ray',
      nickname: 'vray_mint',
      avatar: 'https://i.pravatar.cc/150?u=8',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=9',
    title: 'Silent Symphony',
    endingIn: '2d 10h 41s',
    tokenIcon: 'logo-2',
    balance: '5.00',
    author: {
      name: 'Amara Wu',
      nickname: 'amara_w',
      avatar: 'https://i.pravatar.cc/150?u=9',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=10',
    title: 'Quantum Glitch',
    endingIn: '10m 05s 22s',
    tokenIcon: 'logo-2',
    balance: '88.20',
    author: {
      name: 'Dante King',
      nickname: 'dking_art',
      avatar: 'https://i.pravatar.cc/150?u=10',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=11',
    title: 'Solar Flare',
    endingIn: '06h 30m 41s',
    tokenIcon: 'logo-2',
    balance: '1.75',
    author: {
      name: 'Sarah J.',
      nickname: 'sj_pixel',
      avatar: 'https://i.pravatar.cc/150?u=11',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=12',
    title: 'Midnight Mirage',
    endingIn: '18h 20m 00s',
    tokenIcon: 'logo-2',
    balance: '1200.00',
    author: {
      name: 'Leo Thorne',
      nickname: 'lthorne',
      avatar: 'https://i.pravatar.cc/150?u=12',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=13',
    title: 'Prism Peak',
    endingIn: '01h 45m 00s',
    tokenIcon: 'logo-2',
    balance: '0.99',
    author: {
      name: 'Mia Long',
      nickname: 'mlong_nft',
      avatar: 'https://i.pravatar.cc/150?u=13',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=14',
    title: 'Oasis One',
    endingIn: '3d 12h 00s',
    tokenIcon: 'logo-2',
    balance: '34.00',
    author: {
      name: 'Hugo Boss',
      nickname: 'hugo_crypto',
      avatar: 'https://i.pravatar.cc/150?u=14',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=15',
    title: 'Binary Sunset',
    endingIn: '14h 00m 00s',
    tokenIcon: 'logo-2',
    balance: '2.40',
    author: {
      name: 'Chris P.',
      nickname: 'cp_vibe',
      avatar: 'https://i.pravatar.cc/150?u=15',
    },
  },
  {
    image: 'https://picsum.photos/317/317?random=16',
    title: 'Velocity',
    endingIn: '22m 30s 00s',
    tokenIcon: 'logo-2',
    balance: '1.05',
    author: {
      name: 'Zoe Frost',
      nickname: 'zfrost',
      avatar: 'https://i.pravatar.cc/150?u=16',
    },
  },
]
