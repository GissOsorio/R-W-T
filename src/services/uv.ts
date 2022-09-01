import { useEffect, useState } from "react";
import axios from "axios";
import {CityType} from "../types/cityType";
import {UvType} from "../types/uvType";
export default function UVApi(cityType: { name?: string; lat: any; lon: any;}) {
    console.log("Entró uv")
    async function getData() {
      try{
        const { data, status } = await axios.get(
            `https://api.openuv.io/api/v1/uv?lat=${cityType.lat}&lng=${cityType.lon}`,
            { 
                headers: {
                    'x-access-token': '175aca2bc0ec2c898556babf57ce0975',
                },
            },
        );
        console.log(data);
        console.log('response status is: ', status);
        return data;
  
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }
    getData();
  }





