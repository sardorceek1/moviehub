import React, { useState, useEffect } from 'react'
import { colors } from '../../constants/color'
import { Box, Container, Stack, Typography } from '@mui/material'
// import { Category, Videos } from '../'
import Category from "../category/category";
import Videos from "../videos/videos";
import { ApiService } from '../../service/api.service'

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    const selectedCategoryHandler = category => setSelectedCategory(category)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideos(data.items)
                // console.log(data)
            } catch (error) {
                console.log(error);
            }
        }

        getData()
    }, [selectedCategory])

    return (
        <Stack>
            <Category
                selectedCategoryHandler={selectedCategoryHandler}
                selectedCategory={selectedCategory}
            />
            <Box p={2} sx={{ height: '90vh' }}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectedCategory} <span style={{ color: colors.secondary }}>videos</span>
                    </Typography>
                    <Videos videos={videos} />
                </Container>
            </Box>
        </Stack>
    )
}

export default Main















// import React, {useState} from 'react';
// import {Button, Stack,Typography,Box,Container} from "@mui/material";
// import Category from "../category/category";
// import {colors} from "../../constants/colors";
//
// const Main = () => {
//
//  const [selectCategory, setSelectCategory]=useState('Movie')
//
//     return (
//         <Stack>
//             <Category/>
//             <Box p={2} sx={{height:'90vh'}}>
//              <Container maxWidth={'90%'}>
//                  <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
//                      {selectCategory} <span style={{color:colors.secondary}}>videos</span>
//                  </Typography>
//              </Container>
//             </Box>
//         </Stack>
//
//     );
// }
//
// export default Main;