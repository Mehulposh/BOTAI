import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Home(){
    return (
        <Box sx={{border: '1px solid black'}}>
            <Grid container sx={{border: '1px solid black'}}>
                <Grid item size={3} sx={{border: '1px solid black'}}>
                    hello
                </Grid>
                <Grid item size={9} sx={{border: '1px solid black'}}>
                    World
                </Grid>
            </Grid>
        </Box>
    )
}


export default Home;