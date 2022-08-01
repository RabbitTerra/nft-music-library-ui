import { ChartsIcon, FavoritesIcon, GenIcon, HomeIcon, LayerIcon, PlayIcon, SettingIcon } from "./icons";
import { Genres, SidebarItemProps, Video } from "./interface";

export const DefaultMetaData = {
  title: "Song NFT",
  description: "Song NFT",
  openGraph: {
    url: "https://song_nft.com",
    title: "Song NFT",
    description: "Song NFT",
    images: [
      {
        url: "/meta.jpg",
        width: 1200,
        height: 674,
        alt: "mirai",
      },
    ],
    site_name: "Mirai",
    type: "website",
  },
  // twitter: {
  //   handle: '@song_nft',
  //   site: '@song_nft',
  //   cardType: 'summary_large_image',
  // },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      href: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "160x160",
    },
    {
      rel: "manifest",
      href: "/manifest",
    },
  ],
};

export const SidebarNavItems: Array<SidebarItemProps> = [
  { name: 'Genres', icon: GenIcon, href: '/gen' },
  { name: "Home", icon: HomeIcon, href: "/" },
  { name: "Charts", icon: ChartsIcon, href: "/charts" },
  {
    name: "Favorites",
    icon: FavoritesIcon,
    href: "/favorites",
  },
  { name: "My Playlists", icon: PlayIcon, href: "/playlist" },
  { name: "Collections", icon: LayerIcon, href: "/collections" },
  { name: "Settings", icon: SettingIcon, href: "/settings" },
];

export const ConnectGuides = [
  'To participate in the buyback your Full Send tokens will have to be in an on-chain wallet connected to PancakeSwap (ie. MetaMask, TrustWallet, or SafePal) and not on an exchange such as Bitmart.',
  'Connect Web3 Wallet and check that balances are correct.',
  'Click Redeem.',
  'Click your wallet and check if you have received Arcadix Token.',
  'Click your wallet and check if you have received Arcadix Token.'
]

export const NetworkContextName = 'NETWORK'
export const IS_IN_IFRAME = window.parent !== window
export const connectorLocalStorageKey = 'connectorId'

export const TemplateTrendingVideos: Video[] = [
  {
    cover: 'https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg',
    title: 'Baby',
    artist: {
      name: 'Justin Bieber',
      avatar: 'https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg'
    },
    likes: 65
  },
  {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vVg3G_Qu3PFN4Z21NnkNhdlVHyKoZP0XVA&usqp=CAU',
    title: 'Chandelier',
    artist: {
      name: 'Sia',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNROwpaSLOJBEabsepqpCVZnKKMkk5zrT1g&usqp=CAU'
    },
    likes: 65
  },
  {
    cover: 'https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg',
    title: 'Baby',
    artist: {
      name: 'Justin Bieber',
      avatar: 'https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg'
    },
    likes: 65
  },
  {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vVg3G_Qu3PFN4Z21NnkNhdlVHyKoZP0XVA&usqp=CAU',
    title: 'Chandelier',
    artist: {
      name: 'Sia',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNROwpaSLOJBEabsepqpCVZnKKMkk5zrT1g&usqp=CAU'
    },
    likes: 65
  },
  {
    cover: 'https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg',
    title: 'Baby',
    artist: {
      name: 'Justin Bieber',
      avatar: 'https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg'
    },
    likes: 65
  },
  {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vVg3G_Qu3PFN4Z21NnkNhdlVHyKoZP0XVA&usqp=CAU',
    title: 'Chandelier',
    artist: {
      name: 'Sia',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNROwpaSLOJBEabsepqpCVZnKKMkk5zrT1g&usqp=CAU'
    },
    likes: 65
  }
]
export const TemplateRecentVideos: Video[] = [
  {
    cover: 'https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg',
    title: 'Baby',
    artist: {
      name: 'Justin Bieber',
      avatar: 'https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg'
    },
    likes: 65
  },
  {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vVg3G_Qu3PFN4Z21NnkNhdlVHyKoZP0XVA&usqp=CAU',
    title: 'Chandelier',
    artist: {
      name: 'Sia',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNROwpaSLOJBEabsepqpCVZnKKMkk5zrT1g&usqp=CAU'
    },
    likes: 65
  },
]
export const TemplatePopularGenres: Genres[] = [
  {
    cover: 'https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg',
    title: 'Baby',
    likes: 65,
    total: 1900
  },
  {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vVg3G_Qu3PFN4Z21NnkNhdlVHyKoZP0XVA&usqp=CAU',
    title: 'Chandelier',
    likes: 65,
    total: 1900
  },
  {
    cover: 'https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg',
    title: 'Baby',
    likes: 65,
    total: 1900
  },
  {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vVg3G_Qu3PFN4Z21NnkNhdlVHyKoZP0XVA&usqp=CAU',
    title: 'Chandelier',
    likes: 65,
    total: 1900
  },
]