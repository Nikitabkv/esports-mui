import {FC} from 'react'
import {Card, CardContent, CardMedia, Link, Stack, Typography,} from '@mui/material';

const NewsListItem: FC<any> = ({item}) => {
  return (
    <Card sx={{'&:hover h3': {color: "#ff3535"}, boxShadow: 'none'}}>
      <Link href={item.path} underline="none">
        <Stack direction="row">
          <CardMedia
            sx={{
              flexBasis: '300px',
              display: {
                medium: "none",
                default: "flex"
              }
            }}
            image={item.imagePath}
            title={item.title}
          />
          <CardContent sx={{
            flexBasis: '740px',
            '&:last-child': {
              padding: 0,
              paddingBottom: {medium: 0, default: 3},
              paddingLeft: {medium: 0, default: 2}
            },
          }}>
            <Stack spacing={1}>
              <Typography fontSize={{medium: 16, default: 20}} color={'primary.contrastText'} fontWeight={500}
                          variant='h3'>
                {item.title}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography fontSize={{medium: 11, default: 13}} color={'#ff3535'} component='span'>
                  {item.category}
                </Typography>
                <Typography fontSize={{medium: 11, default: 13}} color={'primary.dark'} component='span'>
                  {item.date}
                </Typography>
              </Stack>
              <Typography fontSize={13} color={'primary.dark'} component='span'
                          display={{medium: "none", default: "flex"}}>
                {item.content}
              </Typography>
            </Stack>
          </CardContent>
        </Stack>
      </Link>
    </Card>
  )
}

export default NewsListItem
