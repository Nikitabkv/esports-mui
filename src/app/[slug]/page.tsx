'use client'
import {Box} from "@mui/material";
import {getPost} from "@/lib/api/api";
import {usePathname} from 'next/navigation'


const ArticlePage = async () => {
  const pathname = usePathname().substring(1)
  const post = await getPost(pathname)
  console.log({post})

  return (
    <Box>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.content}}/>
    </Box>
  )
}

export default ArticlePage
