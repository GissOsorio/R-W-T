import { useEffect, useState } from "react";
import axios from "axios";
import {CityType} from "../types/cityType";
import UvApi from '../services/uv';
import UVApi from "../services/uv";

export default function CityApi(city: string) {
    console.log("Entró city")
    async function getData() {
      try{
        const { data, status } = await axios.get<CityType>(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=98e14e85c168d9f23e29a74b490b8f4d`);
        JSON.stringify(data);
        console.log('response status is: ', status);
        console.log(data.lat)
        return UVApi(data);
  
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





