import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {App} from '../services/appService';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MyLocation from '@mui/icons-material/MyLocation';
import InfoIcon from '@mui/icons-material/Info';
import { BottomNavigation, BottomNavigationAction, Box, getAccordionDetailsUtilityClass } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect} from "react";
import axios from "axios";

export const NavigationBar= () => {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 1000 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <Link to="/">
                <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
            </Link>

            <Link to="/about">
                <BottomNavigationAction label="Recents" icon={<InfoIcon />} />
            </Link>
            <Link to="/test">
                <BottomNavigationAction label="Favorites" icon={<CommentIcon />} />
            </Link>


        </BottomNavigation>
        </Box>
    );
}

