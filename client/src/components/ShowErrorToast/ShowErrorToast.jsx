import React from 'react';
import { toast } from "sonner";
import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import "./showErrorToast.css";


const ShowErrorToast = (message) => {
    toast(
        <Box
            display="flex"
            alignItems="center"
            sx={{
                backgroundColor: '#f44336',
                color: '#fff', 
                padding: '16px 32px',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',    
                width:"100%"
            }}
        >
            <ErrorOutlineIcon sx={{ marginRight: '8px' }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {message}
            </Typography>
        </Box>,
        {
            duration: 4000,
        }
    );
};
export default ShowErrorToast;