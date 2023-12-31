import {FC} from 'react'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import {getDate} from "@/lib/utils/utils";
import {NewsListItemProps} from "@/components/NewsListItem/NewsListItem.interface";

const NewsListItem: FC<NewsListItemProps> = ({post}) => {
  return (
    <Card sx={{'&:hover h3': {color: "#ff3535"}, boxShadow: 'none'}}>
      <Link href={`/${post.slug}`} underline="none">
        <Stack direction="row">
          <CardMedia
            sx={{
              height: 'auto',
              flexBasis: '225px',
              display: {
                medium: "none",
                default: "flex"
              }
            }}
            image={post.featuredImage.node.mediaDetails.sizes === null ? 'https://esports-24.ru/wp-content/uploads/2022/05/rachelr-cfg-csgo-1.jpg' : `${post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}.webp`}
            title={post.featuredImage.node.altText}
          />
          <CardContent sx={{
            display: 'flex',
            flexBasis: '775px',
            '&:last-child': {
              padding: 0,
              paddingLeft: {medium: 0, default: 2}
            },
          }}>
            <Stack spacing={1} justifyContent='space-evenly'>
              <Typography fontSize={{medium: 16, default: 20}} color={'primary.contrastText'} fontWeight={500}
                          variant='h3'>
                {post.title}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography fontSize={{medium: 11, default: 13}} color={'#ff3535'} component='span'>
                  {post.categories.nodes[0].name === 'Без рубрики' ? 'Новости' : post.categories.nodes[0].name}
                </Typography>
                <Typography fontSize={{medium: 11, default: 13}} color={'primary.dark'} component='span'>
                  {getDate(post.date)}
                </Typography>
              </Stack>
              <Typography fontSize={13} color={'primary.dark'} component='span'
                          display={{medium: "none", default: "flex"}}>
                {`${post.excerpt.slice(3, 280).replaceAll('&nbsp;', '')}...`}
              </Typography>
            </Stack>
          </CardContent>
        </Stack>
      </Link>
    </Card>
  )
}

export default NewsListItem
