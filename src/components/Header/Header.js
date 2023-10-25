import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <AppBar position='sticky' sx={{ backgroundColor: '#232f3d' }}>
                <Toolbar>
                    <Typography>
                        <LibraryBooksOutlinedIcon />
                    </Typography>
               
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header