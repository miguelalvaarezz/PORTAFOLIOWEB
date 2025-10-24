import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Miguel Álvarez - Designer & Developer',
    short_name: 'Miguel Álvarez',
    description: 'Diseñador y desarrollador web especializado en crear experiencias digitales excepcionales.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
