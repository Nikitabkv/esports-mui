import {FC} from 'react'
import {Card, CardContent, CardMedia, Link, Stack, Typography,} from '@mui/material';

const NewsListItem: FC<any> = ({item}) => {
  return (
    <Card sx={{'&:hover h3': {color: "#ff3535"}, boxShadow: 'none'}}>
      <Link href={item.path} underline="none">
        <Stack direction="row">
          <CardMedia
            sx={{flexBasis: '300px'}}
            image={item.imagePath}
            title={item.title}
          />
          <CardContent sx={{flexBasis: '740px'}}>
            <Stack spacing={1}>
              <Typography fontSize={20} color={'primary.contrastText'} fontWeight={500} variant='h3'>
                {item.title}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography fontSize={13} color={'primary.contrastText'} component='span'>
                  {item.category}
                </Typography>
                <Typography fontSize={13} color={'primary.dark'} component='span'>
                  {item.date}
                </Typography>
              </Stack>
              <Typography fontSize={13} color={'primary.dark'} component='span'>
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
