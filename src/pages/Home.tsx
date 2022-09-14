import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {Searcher} from '../components/Searcher'
import {PostsContext, postsContextDefaultValue} from '../context/cityContext'
import {NavigationBar} from '../components/NavigationBar'
import {Respuesta} from '../components/Respuesta'
import { Navigation } from '@material-ui/icons';
import React, { createContext, useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
export interface IHomePageProps {}
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center'
  }));


const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();
    const [counter,setCounter] = useState<number>(0)
    console.log("Aqui está mi variable,",counter)
    return (
        <div>
             <Box>
          <PostsContext.Provider value={postsContextDefaultValue} >
            <Stack alignItems="center" spacing={2}>
                <Item>
                    <NavigationBar />
                </Item>
                <Item>
                    <Searcher />
                </Item>
            </Stack>
            </PostsContext.Provider>
        </Box>
        
           
        </div>

    );
};

export default HomePage;