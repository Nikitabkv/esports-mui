interface Categories {
  link: string,
  name: string
}

export interface AsideCardItemProps {
  post: {
    date: string,
    link: string,
    slug: string,
    excerpt: string,
    title: string,
    id: string
    categories: {
      nodes: Array<Categories>
    }
  }
  isLast: boolean
}
