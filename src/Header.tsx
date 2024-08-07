// src/Header.tsx
import React from 'react';
import {AppBar, Toolbar, IconButton, Box, Typography, Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

type HeaderProps = {
    toggleButtonGroup: React.ReactNode;
    onHomeClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleButtonGroup, onHomeClick }) => {
    return (
        // <AppBar position="static" style={{ padding: '16px 0' }}>
        //     <Toolbar>
        //         <IconButton edge="start" aria-label="home" onClick={onHomeClick}>
        //             <HomeIcon />
        //         </IconButton>
        //         <Box>
        //             {toggleButtonGroup}
        //         </Box>
        //     </Toolbar>
        // </AppBar>

            // <AppBar position="static">
        <Toolbar>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} position="static">
                {/* Top row with Home Icon and Title */}
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                    <IconButton edge="start" color="inherit" aria-label="home" onClick={onHomeClick} sx={{ mr: 2 }}>
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        FPC
                    </Typography>
                </Box>

                {/* Bottom row with Toggle Button Group */}
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
                    {toggleButtonGroup}
                </Box>
            </Box>
        </Toolbar>
            // </AppBar>
    );
};

export default Header;
