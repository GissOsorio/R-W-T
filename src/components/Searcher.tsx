import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {App} from '../services/appService';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MyLocation from '@mui/icons-material/MyLocation';
import { getAccordionDetailsUtilityClass } from '@mui/material';


export const Searcher= () => {
  const [showChild, setShowChild ] = useState(false);
    const navigate = useNavigate();
    const [city,setCity] = useState<string>('')
    
    return (
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search City"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={event=>{                                 //adding the onChange event
                setCity(event.target.value)
              }}
          />

          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => App("quito") }>
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <MyLocation />
          </IconButton>
          
        </Paper>
      );


};
