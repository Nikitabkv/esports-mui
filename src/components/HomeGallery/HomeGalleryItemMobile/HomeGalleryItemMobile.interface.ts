export interface HomeGalleryItemMobileProps {
  index: number
  post: {
    date: string
    link: string
    slug: string
    excerpt: string
    title: string
    id: string
    categories: {
      nodes: Array<{ link: string, name: string }>
    }
    featuredImage: {
      node: {
        link: string
        altText: string
        mediaDetails: {
          sizes: Array<{ sourceUrl: string }>
        }
      }
    }
  }
}
