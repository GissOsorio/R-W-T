import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {Searcher} from '../components/Searcher'
export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();
    const [counter,setCounter] = useState<number>(0)
    console.log("Aqui está mi variable,",counter)
    return (
        <div>
            <p>UV index</p>
            <p>
                <Link to="/about">About</Link>
            </p>
            <p>
                <Link to="/test">Comments</Link>
            </p>
            <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button>
            
            <p>
                {counter}
                <button onClick={() => setCounter(counter+1)}>Add</button>
            </p>
            
            <Searcher />
        </div>

    );
};

export default HomePage;