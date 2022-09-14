import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { green } from '@mui/material/colors';


const marks = [
  {
    value: 0,
    label: '0 UV',
  },
  {
    value: 3,
    label: '3 UV',
  },
  {
    value: 6,
    label: '6 UV',
  },
  {
    value: 8,
    label: '8 UV',
  },
  {
    value: 11,
    label: '11 UV',
  },
  {
    value: 15,
    label: '15 UV',
  },
];

function valuetext(value: number) {
  return `${value} UV`;
}

function color(value: number) {
  return '#a5d6a7';
}

type MyUv = {
  uv: number,
  city: string
}
export const FinalHigh = ({uv, city}: MyUv) => {
  return (
    <><Box sx={{ width: 700, p: 5 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={uv}
        getAriaValueText={valuetext}
        step={0.5}
        marks={marks}
        min={0}
        max={11}
        color = "primary"
        valueLabelDisplay="on" />
    </Box><Box
      sx={{
        color: '#de9624',
        display: 'inline',
        fontWeight: 'bold',
        mx: 0.5,
        fontSize: 40,
      }}
    >
        Índice UV: {uv}
        <br/>
        ALTO
      </Box></>
      

  );
}
