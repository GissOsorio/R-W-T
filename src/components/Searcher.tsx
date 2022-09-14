import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {App} from '../services/appService';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MyLocation from '@mui/icons-material/MyLocation';
import { Box, getAccordionDetailsUtilityClass } from '@mui/material';
import { useEffect} from "react";
import axios from "axios";
import {Respuesta} from '../components/Respuesta'

export const Searcher= () => {
  const [showChild, setShowChild ] = useState(false);
  const [fetchedData, setFetchedData] = useState<string[]>([]);
  const [fetchedDataUV, setFetchedDataUV] = useState<number>();
    const navigate = useNavigate();
    const [city,setCity] = useState<string>('')
    useEffect(() => {
      const getData = async () => {
        const response  = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=98e14e85c168d9f23e29a74b490b8f4d`);
        setFetchedData([response.data[0].lon,response.data[0].lat]);
        const responseUV = await axios.get(
          `https://api.openuv.io/api/v1/uv?lat=${response.data[0].lat}&lng=${response.data[0].lon}`,
          { 
              headers: {
                  'x-access-token': '5fad95476ae7d9eee78c5fad85a7f666',
              },
          },
        )
        setFetchedDataUV(responseUV.data.result.uv)
      };
      getData();
    }, [city]);

    return (
      <Box>
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
        <div>
          longitud:  
          {fetchedData[0]}
          <br/>
          latitud:  
          {fetchedData[1]}
          <br/>
          uv:  
          <br/>
          {fetchedDataUV}
        </div>
        {city.length > 0 &&
          <Respuesta uv={fetchedDataUV} city={city}  />
        }
 
      </Box>
        
      );


};
