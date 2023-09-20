'use client'
import {usePathname} from "next/navigation"
import {getPost, getPosts} from "@/lib/api/api"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import AsideCard from "@/components/AsideCard/AsideCard"

// const headers = {'Content-Type': 'application/json'};
// const query = `
// query Test {
//   posts(first: 100) {
//     nodes {
//       slug
//     }
//   }
// }
// `


const ArticlePage = async () => {
  const pathname = usePathname()
  const post = await getPost(pathname)
  const posts = await getPosts()

  return (
    <Stack direction={{medium: 'column', default: 'row'}} spacing={1}>
      <Box padding={2} boxShadow={1} borderRadius={1} flexBasis={{medium: 'auto', default: '1034px'}} flexShrink={9}>
        <Typography variant='h1' paddingBottom={2} fontSize={44} fontWeight={700}>
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
      <Box component='aside' flexBasis={352} flexShrink={5}>
        <AsideCard posts={posts.slice(0, 8)} title={'Поплуярные статьи'}/>
      </Box>
    </Stack>
  )
}

// export async function generateStaticParams() {
//   const posts = await fetch('https:/esports-24.ru/graphql', {
//     headers,
//     method: 'POST',
//     body: JSON.stringify({
//       query,
//     }),
//   }).then((res) => res.json())
//
//   return posts.map((post: { slug: any; }) => ({
//     slug: post.slug,
//   }))
// }

export default ArticlePage
