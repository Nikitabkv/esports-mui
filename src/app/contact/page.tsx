import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";


const CsgoPage = () => {
    return (
        <Box height={'85vh'} boxShadow={1} borderRadius={1} p={2}>
            <Typography fontSize={{medium: 16, default: 20}} color={'primary.contrastText'} fontWeight={500} variant='h3'>
                {'Контакты'}
            </Typography>
        </Box>
    );
}

export default CsgoPage
