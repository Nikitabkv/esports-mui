import {getPopularCfg, getPopularPosts, getPost, getPosts, getPostsByCategory} from "@/lib/api/api"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import AsideCard from "@/components/AsideCard/AsideCard"

export const generateStaticParams = async () => {
  const posts = await getPosts()

  return posts.map((post: any) => {

    return ({
      slug: post.slug
    })
  })
}

const wpStyles = {
  '.wp-block-image': {
    margin: 0,
    padding: 1,
    'img': {
      borderRadius: 1,
      width: '100%',
      height: 'auto'
    },
    'figcaption': {
      color: 'primary.dark'
    }
  },
  'img': {
    height: 'auto'
  }
}

const cfgStyles = {
  '.wp-block-image': {
    margin: 0,
    padding: 1,
    float: 'left',
    'img': {
      borderRadius: 1,
      width: '100%',
    },
    'figcaption': {
      color: 'primary.dark'
    },
    'mark': {
      color: 'buttons.main'
    }
  },
  '.device': {
    padding: 1,
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: '1px',
    borderColor: 'buttons.main',
    height: 190,
    float: 'none',
    'img': {
      width: '80px',
      height: 'auto'
    },
    'figure': {
      margin: 0,
      width: '108px',
    },
    'figcaption': {
      fontSize: '10px'
    },
    'mark': {
      fontSize: '10px'
    }
  },
  '.wp-block-columns': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2
  },
  '.is-style-rounded': {
    borderRadius: 20
  },
  'img': {
    height: 'auto'
  }
}

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const {slug} = params
  const post = await getPost(slug)
  const isCfg = post.categories.nodes[0].name === 'CFG Игроков'
  const category = post.categories.nodes[0].name === 'Dota 2' ? 'Dota' : post.categories.nodes[0].name
  const similarPosts = await getPostsByCategory(category)
  const popularPosts = await getPopularPosts()
  const popularCfg = await getPopularCfg()


  return (
    <Stack direction={{medium: 'column', default: 'row'}} spacing={1}>
      <Box padding={2} boxShadow={1} borderRadius={1} flexBasis={{medium: 'auto', default: '1034px'}} flexShrink={9}>
        <Typography variant='h1' paddingBottom={2} fontSize={44} fontWeight={700}>
          {post.title}
        </Typography>
        <Box
          display={post.categories.nodes[0].name === 'CFG Игроков' ? 'none' : 'flex'}
          sx={{
            height: 250,
            backgroundImage: `url(${post.featuredImage.node.mediaDetails.sizes[0].sourceUrl})`,
            backgroundPosition: 'center',
            borderRadius: 1
          }}
        />
        <Divider/>
        <Box
          dangerouslySetInnerHTML={{__html: post.content}}
          display={'flex'}
          flexDirection={'column'}
          sx={isCfg ? cfgStyles : wpStyles }
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'} component='aside' flexBasis={352} flexShrink={5} gap={1} position={'sticky'} top={'-745px'} height={'fit-content'}>
        <AsideCard posts={isCfg ? popularCfg : similarPosts} title={isCfg ? 'Популярные CFG' : `Статьи на тему: ${category}`}/>
        <AsideCard posts={popularPosts} title={`Популярное`}/>
      </Box>
    </Stack>
  )
}

export default ArticlePage

//
// 'use client'
// import {usePathname} from "next/navigation"
// import {getPost, getPosts} from "@/lib/api/api"
// import Box from "@mui/material/Box"
// import Stack from "@mui/material/Stack"
// import Typography from "@mui/material/Typography"
// import Divider from "@mui/material/Divider"
// import AsideCard from "@/components/AsideCard/AsideCard"
// import {useEffect, useState} from "react";
//
// const ArticlePage = () => {
//   const pathname = usePathname()
//   // const post = await getPost(pathname)
//   // const posts = await getPosts()
//
//   const [post, setPostData] = useState({
//     title: 'Загрузка',
//     content: 'Загрузка'
//   })
//
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => {
//     const postData = getPost(pathname)
//       .then((data) => {
//         setPostData(data)
//       })
//   }, [])
//
//   return (
//     <Stack direction={{medium: 'column', default: 'row'}} spacing={1}>
//       <Box padding={2} boxShadow={1} borderRadius={1} flexBasis={{medium: 'auto', default: '1034px'}} flexShrink={9}>
//         <Typography variant='h1' paddingBottom={2} fontSize={44} fontWeight={700}>
//           {post.title}
//         </Typography>
//         <Box display={pathname.slice(1, 4) === 'cfg' ? 'none' : 'flex'}
//              sx={{
//                height: 250,
//                // backgroundImage: `url(${post.featuredImage.node.mediaDetails.sizes[0].sourceUrl})`,
//                backgroundPosition: 'center',
//                borderRadius: 1
//              }}
//         />
//         <Divider/>
//         <div dangerouslySetInnerHTML={{__html: post.content}}/>
//       </Box>
//       <Box component='aside' flexBasis={352} flexShrink={5}>
//         {/*<AsideCard posts={posts.slice(0, 8)} title={'Поплуярные статьи'}/>*/}
//       </Box>
//     </Stack>
//   )
// }
//
// export default ArticlePage
//
// export const generateStaticParams = async () => {
//   const posts = await getPosts()
//
//   return posts.map((post) => {
//
//     return ({
//       slug: post.slug
//     })
//   })
// }
