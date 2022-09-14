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
  const [city,setCity] = useState<string>('')
  const [isShown, setIsShown] = useState(false);
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=98e14e85c168d9f23e29a74b490b8f4d`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("CONSOLE DEL RESPONSE")
      console.log(response)
      console.log(result[0].lat)
      console.log(result[0].lon)
      setFetchedData([result[0].lon,result[0].lat]);
      const responseUV = await fetch(`https://api.openuv.io/api/v1/uv?lat=${result[0].lat}&lng=${result[0].lon}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-access-token': '6b9a1beeaacbb51a5ca2904f85d08ea8',
        },
      });
      const resultUV = await responseUV.json();
      setFetchedDataUV(resultUV.result.uv)
      
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

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

          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <MyLocation />
          </IconButton>
          
        </Paper>

      <div>
        {err && <h2>{err}</h2>}

        {isLoading && <h2>Loading...</h2>}

        <Respuesta uv={fetchedDataUV} city={city}/>
      </div>

    </Box>
    );
}
