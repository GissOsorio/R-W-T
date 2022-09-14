import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { green } from '@mui/material/colors';
import {FinalLow} from '../components/FinalLow';
import {FinalMedium} from '../components/FinalMedium';
import {FinalHigh} from '../components/FinalHigh';
import {FinalVeryHigh} from '../components/FinalVeryHigh';
import {FinalX} from '../components/FinalX';
type MyUv = {
  uv: number,
  city: string
}
export const Respuesta = ({uv, city}: MyUv) => {
  if (uv < 3) {
    return <FinalLow uv={uv} city={city} />;
  }else if (uv < 6) {
    return <FinalMedium uv={uv} city={city} />;
  }else if (uv < 8) {
    return <FinalHigh uv={uv} city={city} />;
  }else if (uv < 11) {
    return <FinalVeryHigh uv={uv} city={city} />;
  }else {
    return <FinalX uv={uv} city={city} />;
  }


  
}

