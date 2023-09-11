interface Post {
  date: string
  link: string
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

export interface NewsListProps {
  posts: Array<Post>
}
