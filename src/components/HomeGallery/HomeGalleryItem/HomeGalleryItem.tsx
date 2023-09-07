import {FC} from 'react'
import {HomeGalleryItemProps} from "@/components/HomeGallery/HomeGalleryItem/HomeGalleryItem.interface";
import {Card, CardContent, CardMedia, Link, Typography,} from "@mui/material";

const HomeGalleryItem: FC<HomeGalleryItemProps> = ({item, index}) => {
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
      <Link href={item.path} underline="none">
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
          image={item.imagePath}
          title={item.title}
        >
          <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '5px'}}>
            <Typography fontSize={fontSizes.meta} color={'primary.dark'} fontWeight={600} component="span">
              {item.category}
            </Typography>
            <Typography fontSize={fontSizes.title} color={'primary.main'} fontWeight={700} variant="h3">
              {item.title}
            </Typography>
            <Typography fontSize={fontSizes.meta} color={'primary.dark'} fontWeight={300} component="span">
              {item.date}
            </Typography>
          </CardContent>
        </CardMedia>
      </Link>
    </Card>
  )
}

export default HomeGalleryItem
