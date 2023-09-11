import {FC} from "react";
import {Divider, Link, ListItem, Stack, Typography} from "@mui/material";
import {AsideCardItemProps} from "@/components/AsideCard/AsideCardItem/AsideCardItem.interface";
import {getDate} from "@/lib/utils/utils"

const AsideCardItem: FC<AsideCardItemProps> = ({post, isLast}) => {
  return (
    <>
      <ListItem sx={{'&:hover h3': {color: "#ff3535"}}}>
        <Stack direction='column' spacing={1}>
          <Link href={post.link} color='primary.contrastText' underline="none">
            <Typography fontSize={17} fontWeight={700} variant='h3'>
              {post.title}
            </Typography>
          </Link>
          <Stack direction='row' spacing={1}>
            <Link href={post.categories.nodes[0].link} color='buttons.main' underline="none">
              <Typography fontSize={12}>
                {post.categories.nodes[0].name === 'Без рубрики' ? 'Новости' : post.categories.nodes[0].name}
              </Typography>
            </Link>
            <Typography fontSize={12}>
              {getDate(post.date)}
            </Typography>
          </Stack>
        </Stack>
      </ListItem>
      {isLast ? '' : <Divider/>}
    </>
  )
}

export default AsideCardItem
