import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/Layout';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import TestPage from './pages/Test';



type MyProps = {
    title: string,
    paragraph: string
}
export const App = () => {
    return(
        <BrowserRouter>
            <Routes>
   
                <Route path="/" element={<HomePage />} />

                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>

                <Route path="info">
                    <Route index element={<TestPage />} />
                    <Route path=":number" element={<TestPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

  
 