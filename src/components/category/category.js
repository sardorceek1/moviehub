import { Stack } from '@mui/material'
import { category } from '../../constants'
import { colors } from '../../constants/color'
import React from "react";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
    return (
        <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
            {category.map(item => (
                <button
                    key={item.name}



                    className='category-btn'
                    style={{
                        borderRadius: '0',
                        background: item.name === selectedCategory && colors.secondary,
                        color: item.name === selectedCategory && colors.primary,
                    }}
                    onClick={() => selectedCategoryHandler(item.name)}
                >
					<span
                        style={{
                            color: item.name === selectedCategory ? colors.primary : colors.secondary,
                            marginRight: '15px',
                        }}
                    >

						{item.icon}
					</span>
                    <span style={{ opacity: '1' }}>{item.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Category
