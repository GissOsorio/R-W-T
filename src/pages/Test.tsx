import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {NavigationBar} from '../components/NavigationBar'

export interface ITestPageProps {}

const TestPage: React.FunctionComponent<ITestPageProps> = (props) => {
    return (
        <div>
            <NavigationBar />   
         </div>
    );
};

export default TestPage;