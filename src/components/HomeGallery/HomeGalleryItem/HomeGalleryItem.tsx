import {FC} from 'react'
import {HomeGalleryItemProps} from "@/components/HomeGallery/HomeGalleryItem/HomeGalleryItem.interface"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import {getDate} from "@/lib/utils/utils"

const HomeGalleryItem: FC<HomeGalleryItemProps> = ({post, index}) => {
  const fontSizes = index === 0 ? {
    title: 28,
    meta: 13,
  } : {
    title: 17,
    meta: 12,
  }
  const height = index === 0 ? '520px' : '255px'
  const gridArea = index === 0 ? 'big' : `small${index}`

  return (
    <Card sx={{gridArea: {gridArea}, boxShadow: 0}}>
      <Link href={`/${post.slug}`} underline="none">
        <CardMedia
          sx={{
            maxHeight: {height},
            display: 'flex',
            boxShadow: '75px -79px 64px 11px rgba(76, 0, 0, 0.4) inset',
            backgroundSize: 'auto 100%',
            transition: 'background-size 300ms cubic-bezier(0.46, 0.14, 0, 0.86)',
            ':hover': {
              backgroundSize: 'auto 115%',
            }
          }}
          image={`${post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}.webp`}
          title={post.featuredImage.node.altText}
        >
          <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '5px'}}>
            <Typography fontSize={fontSizes.meta} color={'primary.dark'} fontWeight={600} component="span">
              {post.categories.nodes[0].name === 'Без рубрики' ? 'Новости' : post.categories.nodes[0].name}
            </Typography>
            <Typography fontSize={fontSizes.title} color={'primary.main'} fontWeight={700} variant="h3">
              {post.title}
            </Typography>
            <Typography fontSize={fontSizes.meta} color={'primary.dark'} fontWeight={300} component="span">
              {getDate(post.date)}
            </Typography>
          </CardContent>
        </CardMedia>
      </Link>
    </Card>
  )
}

export default HomeGalleryItem
