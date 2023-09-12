'use client'
import Box from "@mui/material/Box"
import {getPost} from "@/lib/api/api"

const headers = {'Content-Type': 'application/json'};
const query = `
query Test { 
  posts(first: 100) {
    nodes {
      slug
    }
  }
}
`


const ArticlePage = async ({params}: { params: { slug: string } }) => {
  const post = await getPost(params.slug)

  return (
    <Box>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.content}}/>
    </Box>
  )
}

export async function generateStaticParams() {
  const posts = await fetch('https:/esports-24.ru/graphql', {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
    }),
  }).then((res) => res.json())

  console.log('posts')

  return posts.map((post: { slug: any; }) => ({
    slug: post.slug,
  }))
}

export default ArticlePage
