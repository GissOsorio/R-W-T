import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {NavigationBar} from '../components/NavigationBar'

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    return (
        <div>
            <NavigationBar />   
        </div>
    );
};

export default AboutPage;