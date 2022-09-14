import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Respuesta} from '../components/Respuesta'

  export const App=(city: string) =>  {
    const [showChild, setShowChild ] = useState(false);
    const [fetchedData, setFetchedData] = useState<string[]>([]);
    const [fetchedDataUV, setFetchedDataUV] = useState<number>();
    const navigate = useNavigate();

      useEffect(() => {
        const getData = async () => {
          const response  = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=98e14e85c168d9f23e29a74b490b8f4d`);
          setFetchedData([response.data[0].lon,response.data[0].lat]);
          const responseUV = await axios.get(
            `https://api.openuv.io/api/v1/uv?lat=${response.data[0].lat}&lng=${response.data[0].lon}`,
            { 
                headers: {
                    'x-access-token': '175aca2bc0ec2c898556babf57ce0975',
                },
            },
          )

          setFetchedDataUV(responseUV.data.result.uv)
          console.log(responseUV.data.result.uv)
          console.log(responseUV.data.result.uv_max)
        };
        getData();
      }, [city]);

    return (
      <div>
        <Respuesta uv={fetchedDataUV} city={city}  />
      </div>
    );
  }