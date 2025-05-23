import {Box,Button,Stack,TextField,Snackbar} from '@mui/material';
import { useState,useEffect,useRef } from 'react';
import {Link} from 'react-router-dom';

function Input({chat,clearChat,setScroll,generateAIResponse}){
    const [input,setInput] = useState('');
    const [isSnackbar,setIsSnackbar] = useState(false);

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    },[]);

    const handleSave = () =>{
        const chatHistory = localStorage.getItem('conversation') || [];
        const date = new Date();

        localStorage.setItem('conversation' ,   JSON.stringify([{chat: chat,dateTime: date }, ...chatHistory]));

        clearChat();
        setIsSnackbar(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        generateAIResponse(input);
        setInput('');
        setScroll((prev) => !prev);
    }
    

    return (
        <Box
            component={'form'}
            onSubmit={handleSubmit}
        >
            <Stack
                direction={'row'}
                spacing={2}
                padding={1}
            >
                <TextField 
                    type='text'
                    value= {input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Message Bot AI…'
                    required
                    inputRef={inputRef}
                />
                <Button 
                    variant='contained' 
                    type='submit'
                    sx={{fontSize: 15, px: 2}}
                >
                    Ask
                </Button>
                <Button
                    variant='outlined'
                    onClick={handleSave}
                    sx={{fontSize: 15, px: 2}}
                >
                    Save
                </Button>

                <Snackbar 
                    open={isSnackbar}
                    message={'chat saved'}
                    onClose={() => setIsSnackbar(false)}
                    autoHideDuration={3000}
                    action= {
                        <Link to='/history'>
                            <Button size='small' color='inherit'>
                                See Past Conversations
                            </Button>
                        </Link>
                    }
                />


            </Stack>
        </Box>
    );
    
}


export default Input;