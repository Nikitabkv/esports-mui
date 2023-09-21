'use client'
import {usePathname} from "next/navigation"
import {getPost, getPosts} from "@/lib/api/api"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"


const Article = async () => {
  const pathname = usePathname()
  const post = await getPost(pathname)

  return (
      <Box padding={2} boxShadow={1} borderRadius={1} flexBasis={{medium: 'auto', default: '1034px'}} flexShrink={9}>
        <Typography variant='h1' paddingBottom={2} fontSize={44} fontWeight={700}>
          {console.log('return')}
          {post.title}
        </Typography>
        <Box display={pathname.slice(1, 4) === 'cfg' ? 'none' : 'flex'}
             sx={{
               height: 250,
               backgroundImage: `url(${post.featuredImage.node.mediaDetails.sizes[0].sourceUrl})`,
               backgroundPosition: 'center',
               borderRadius: 1
             }}
        />
        <Divider/>
        <div dangerouslySetInnerHTML={{__html: post.content}}/>
      </Box>
  )
}

export default Article
