export interface Author {
  name: string
  nickname: string
  avatar: string
}

export interface Artwork {
  id: string
  image: string
  title: string
  endingIn: string
  balance: string
  tokenIcon?: string
  author?: Author
}

export const artworks: Artwork[] = [
  {
    id: '1',
    image: 'https://loremflickr.com/600/400/abstract?lock=1',
    title: 'Ethereal Echoes',
    endingIn: '02h 15m 10s',
    tokenIcon: 'logo-2',
    balance: '1.25',
    author: {
      name: 'Alex Rivera',
      nickname: 'arivera',
      avatar: 'https://i.pravatar.cc/150?u=1',
    },
  },
  {
    id: '2',
    image: 'https://loremflickr.com/600/400/abstract?lock=2',
    title: 'Neon Dreams',
    endingIn: '12h 40m 00s',
    tokenIcon: 'logo-2',
    balance: '45.00',
    author: {
      name: 'Marcus Void',
      nickname: 'mvoidnft',
      avatar: 'https://i.pravatar.cc/150?u=2',
    },
  },
  {
    id: '3',
    image: 'https://loremflickr.com/600/400/abstract?lock=3',
    title: 'Cybernetic Bloom',
    endingIn: '05m 30s 40s',
    tokenIcon: 'logo-2',
    balance: '0.85',
    author: {
      name: 'Elena Stone',
      nickname: 'elenaart',
      avatar: 'https://i.pravatar.cc/150?u=3',
    },
  },
  {
    id: '4',
    image: 'https://loremflickr.com/600/400/abstract?lock=4',
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
    id: '5',
    image: 'https://loremflickr.com/600/400/abstract?lock=5',
    title: 'Abstract Pulse',
    endingIn: '08h 20m 30s',
    tokenIcon: 'logo-2',
    balance: '3.10',
    author: {
      name: 'Sofia Chen',
      nickname: 'schencrypto',
      avatar: 'https://i.pravatar.cc/150?u=5',
    },
  },
  {
    id: '6',
    image: 'https://loremflickr.com/600/400/abstract?lock=6',
    title: 'Golden Hour',
    endingIn: '45m 12s 30s',
    tokenIcon: 'logo-2',
    balance: '12.50',
    author: {
      name: 'Lucas Grey',
      nickname: '@lgrey',
      avatar: 'https://i.pravatar.cc/150?u=6',
    },
  },
  {
    id: '7',
    image: 'https://loremflickr.com/600/400/abstract?lock=7',
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
    id: '8',
    image: 'https://loremflickr.com/600/400/abstract?lock=8',
    title: 'Liquid Metal',
    endingIn: '15h 55m 41s',
    tokenIcon: 'logo-2',
    balance: '2.15',
    author: {
      name: 'Victor Ray',
      nickname: 'vraymint',
      avatar: 'https://i.pravatar.cc/150?u=8',
    },
  },
  {
    id: '9',
    image: 'https://loremflickr.com/600/400/abstract?lock=9',
    title: 'Silent Symphony',
    endingIn: '2d 10h 41s',
    tokenIcon: 'logo-2',
    balance: '5.00',
    author: {
      name: 'Amara Wu',
      nickname: 'amaraw',
      avatar: 'https://i.pravatar.cc/150?u=9',
    },
  },
  {
    id: '10',
    image: 'https://loremflickr.com/600/400/abstract?lock=10',
    title: 'Quantum Glitch',
    endingIn: '10m 05s 22s',
    tokenIcon: 'logo-2',
    balance: '88.20',
    author: {
      name: 'Dante King',
      nickname: 'dkingart',
      avatar: 'https://i.pravatar.cc/150?u=10',
    },
  },
  {
    id: '11',
    image: 'https://loremflickr.com/600/400/abstract?lock=11',
    title: 'Solar Flare',
    endingIn: '06h 30m 41s',
    tokenIcon: 'logo-2',
    balance: '1.75',
    author: {
      name: 'Sarah J.',
      nickname: 'sjpixel',
      avatar: 'https://i.pravatar.cc/150?u=11',
    },
  },
  {
    id: '12',
    image: 'https://loremflickr.com/600/400/abstract?lock=12',
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
    id: '13',
    image: 'https://loremflickr.com/600/400/abstract?lock=13',
    title: 'Prism Peak',
    endingIn: '01h 45m 00s',
    tokenIcon: 'logo-2',
    balance: '0.99',
    author: {
      name: 'Mia Long',
      nickname: 'mlongnft',
      avatar: 'https://i.pravatar.cc/150?u=13',
    },
  },
  {
    id: '14',
    image: 'https://loremflickr.com/600/400/abstract?lock=14',
    title: 'Oasis One',
    endingIn: '3d 12h 00s',
    tokenIcon: 'logo-2',
    balance: '34.00',
    author: {
      name: 'Hugo Boss',
      nickname: 'hugocrypto',
      avatar: 'https://i.pravatar.cc/150?u=14',
    },
  },
  {
    id: '15',
    image: 'https://loremflickr.com/600/400/abstract?lock=15',
    title: 'Binary Sunset',
    endingIn: '14h 00m 00s',
    tokenIcon: 'logo-2',
    balance: '2.40',
    author: {
      name: 'Chris P.',
      nickname: 'cpvibe',
      avatar: 'https://i.pravatar.cc/150?u=15',
    },
  },
  {
    id: '16',
    image: 'https://loremflickr.com/600/400/abstract?lock=16',
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
