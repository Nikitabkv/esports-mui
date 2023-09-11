interface Post {
  date: string,
  link: string,
  excerpt: string,
  title: string,
  id: string
  categories: {
    nodes: Array<Categories>
  }
}

interface Categories {
  link: string,
  name: string
}

export interface AsideCardProps {
  title: string,
  posts: Array<Post>
}
