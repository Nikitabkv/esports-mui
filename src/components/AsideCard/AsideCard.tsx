import Card from "@mui/material/Card"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import {FC} from "react"
import {AsideCardProps} from "@/components/AsideCard/AsideCard.interface"
import AsideCardItem from "@/components/AsideCard/AsideCardItem/AsideCardItem"

const AsideCard: FC<AsideCardProps> = ({title, posts}) => {

  return (
    <Card sx={{padding: '16px', position: 'sticky', top: '8px', height: 'fit-content'}}>
      <Typography fontSize={19} fontWeight={600} color={'#ff3535'} pb={2} textAlign='center' noWrap variant='h3'>
        {title.toUpperCase()}
      </Typography>
      <Divider/>
      <List>
        {posts.map((post, index) => {
          return (
            <AsideCardItem post={post} key={post.id} isLast={index === posts.length - 1}/>
          )
        })}
      </List>
    </Card>
  )
}

export default AsideCard
