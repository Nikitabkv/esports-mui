import {FC} from 'react'
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import HomeGalleryItem from "@/components/HomeGallery/HomeGalleryItem/HomeGalleryItem"
import HomeGalleryItemMobile from "@/components/HomeGallery/HomeGalleryItemMobile/HomeGalleryItemMobile"
import {HomeGalleryProps} from "@/components/HomeGallery/HomeGallery.interface";

const HomeGallery: FC<HomeGalleryProps> = ({posts}) => {
  return (
    <Box mb={1} p={{medium: 1, default: 2}} boxShadow={1} borderRadius={1}>
      <Box display={{medium: 'none', default: 'grid'}} sx={{
        gridGap: '8px',
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateAreas: `'big small1 small2'
                            'big small3 small4'`
      }}>
        {posts.map((post, index) => (<HomeGalleryItem key={post.id} post={post} index={index}/>))}
      </Box>
      <Box display={{medium: 'contents', default: 'none'}}>
        {posts.map((post, index) => (
          <>
            <HomeGalleryItemMobile key={post.title} post={post} index={index}/>
            {index === 4 ? '' : <Divider/>}
          </>
        ))}
      </Box>
    </Box>
  )
}

export default HomeGallery
