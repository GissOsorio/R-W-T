  import React, { FC, useCallback, useEffect, useState } from "react";
  import axios from "axios";

 type test = {
    city: string
 }
  export const App=(city: string): string =>  {
    console.log("holi")
    var variable: string
    async function getData() {
      try{
        const response  = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=98e14e85c168d9f23e29a74b490b8f4d`);
        variable = response.data[0].lon
        console.log("try")
        console.log(variable)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return "error.message";
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }
    getData()
    console.log(variable)
    return variable
  }