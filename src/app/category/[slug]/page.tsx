import {getCategories, getPostsByCategory, getPopularPosts} from "@/lib/api/api"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import AsideCard from "@/components/AsideCard/AsideCard"
import NewsList from "@/components/NewsList/NewsList";
import * as React from "react";

export const generateStaticParams = async () => {
  const posts = await getCategories()

  return posts.map((post: any) => {

    return ({
      slug: post.slug
    })
  })
}


const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const {slug} = params
  const category = slug === 'Dota 2' ? 'Dota' : slug
  const posts = await getPostsByCategory(category);
  const popularPosts = await getPopularPosts()

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Stack direction={{medium: "column", default: "row"}} spacing={1}>
        <NewsList posts={posts.slice(0, 20)}/>
        <Box component='aside' sx={{flexBasis: '352px'}}>
          <AsideCard posts={popularPosts.slice(0, 12)} title={'Поплуярные статьи'}/>
        </Box>
      </Stack>
    </Box>
  );
}

export default CategoryPage
