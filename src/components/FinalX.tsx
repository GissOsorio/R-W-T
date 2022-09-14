import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { green } from '@mui/material/colors';


const marks = [
  {
    value: 0,
    label: '0UV',
  },
  {
    value: 2,
    label: '2UV',
  },
  {
    value: 5,
    label: '5UV',
  },
  {
    value: 7,
    label: '7UV',
  },
  {
    value: 10,
    label: '10UV',
  },
  {
    value: 15,
    label: '15UV',
  },
  {
    value: 20,
    label: '20UV',
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
export const FinalX = ({uv, city}: MyUv) => {
  return (
    <><Box sx={{ width: 800, p: 5 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={uv}
        getAriaValueText={valuetext}
        step={0.5}
        marks={marks}
        min={0}
        max={20}
        color = "primary"
        valueLabelDisplay="on" />
    </Box><Box
      sx={{
        color: '#6046e3',
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
