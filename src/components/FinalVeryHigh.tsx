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
    value: 2,
    label: '2 UV',
  },
  {
    value: 5,
    label: '5 UV',
  },
  {
    value: 7,
    label: '7 UV',
  },
  {
    value: 10,
    label: '10 UV',
  },
  {
    value: 11,
    label: '11 UV',
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
export const FinalVeryHigh = ({uv, city}: MyUv) => {
  return (
    <><Box sx={{ width: 700, p: 5 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={uv}
        getAriaValueText={valuetext}
        step={0.5}
        marks={marks}
        min={0}
        max={12}
        color = "primary"
        valueLabelDisplay="on" />
    </Box><Box
      sx={{
        color: '#a52019',
        display: 'inline',
        fontWeight: 'bold',
        mx: 0.5,
        fontSize: 40,
      }}
    >
        Índice UV: {uv}
      </Box></>


  );
}
