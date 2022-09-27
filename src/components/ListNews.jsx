import { Grid, Typography, Pagination, Stack } from "@mui/material"
import useNews from "../hooks/useNews"
import News from "./News";

const ListNews = () => {
    const {news, totalNews, handleChangePage, page} = useNews(); 
    const totalPages = Math.ceil(totalNews / 20); 
return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Últimas Noticias  
        </Typography>
        <Grid container spacing={3}>
            {news.map(item => (
                <News
                    key={item.url}
                    noticia={item}
                />
            ))}
        </Grid>
        <Stack
            sx={{
                marginY: 5
            }}
            direction={'row'}
            justifyContent='center'
            alignItems='center'
            spacing={2}
         >
        <Pagination count={totalPages} color="primary" page={page} onChange={handleChangePage}/>
        </Stack>
    </>
  )
}

export default ListNews