'use client'
import {usePathname} from "next/navigation"
import {getPost, getPosts} from "@/lib/api/api"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import AsideCard from "@/components/AsideCard/AsideCard"
import {useEffect, useState} from "react";


const ArticlePage = () => {
  const pathname = usePathname()
  // const post = await getPost(pathname)
  // const posts = await getPosts()

  const [post, setPostData] = useState({
    title: 'Загрузка',
    content: 'Загрузка'
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const postData = getPost(pathname)
      .then((data) => {
        setPostData(data)
      })
  }, [])

  return (
    <Stack direction={{medium: 'column', default: 'row'}} spacing={1}>
      <Box padding={2} boxShadow={1} borderRadius={1} flexBasis={{medium: 'auto', default: '1034px'}} flexShrink={9}>
        <Typography variant='h1' paddingBottom={2} fontSize={44} fontWeight={700}>
          {post.title}
        </Typography>
        <Box display={pathname.slice(1, 4) === 'cfg' ? 'none' : 'flex'}
          sx={{
            height: 250,
            // backgroundImage: `url(${post.featuredImage.node.mediaDetails.sizes[0].sourceUrl})`,
            backgroundPosition: 'center',
            borderRadius: 1
          }}
        />
        <Divider/>
        <div dangerouslySetInnerHTML={{__html: post.content}}/>
      </Box>
      <Box component='aside' flexBasis={352} flexShrink={5}>
        {/*<AsideCard posts={posts.slice(0, 8)} title={'Поплуярные статьи'}/>*/}
      </Box>
    </Stack>
  )
}

export default ArticlePage
