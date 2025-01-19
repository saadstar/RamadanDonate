import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
} from '@mui/material';
import "./login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../app/slices/authSlice";
import { toast } from "sonner";
import  ShowErrorToast  from "../../components/ShowErrorToast/ShowErrorToast";


export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
   const [formData, setFormData] = useState({    
    email: '',
       password: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {      
        const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           "Accept": "application/json",
        },  
        body: JSON.stringify(formData),
        });
       if (response.ok) {
         const result = await response.json();                  
         dispatch(setCredentials(result));
         navigate("/home");
          toast.success("تم تسجيل الدخول بنجاح . ")
      } else {
          response?.status === 404 && ShowErrorToast("البريد غير مسجل من قبل!");
          response?.status === 401 && ShowErrorToast("كلمه المرور خطأ!");
        }          
    } catch (err) {
      console.log("error",err);
    }
  };

  return (
    <Container maxWidth="sm" className='login'>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
          mt: 4,
            color: 'black',
          alignItems:"center",
            width: "80vw",
          justifyContent:'center'
        }}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: 'black',fontWeight:"bold" }} 
        >
        تسجيل الدخول
        </Typography>
        <TextField
          label="البريد الالكتروني"
          name="email"
          type='email'
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: 'black',fontSize:"22px",fontWeight:"500" },
          }}
          InputProps={{
            style: { color: 'black', borderColor: 'white' }, 
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',                
              },
              '&:hover fieldset': {
                  borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                  borderColor: 'white',                  
              },
            },
          }}
        />
        <TextField
          label="كلمه المرور"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: 'black' },
          }}         
          InputProps={{
            style: { color: 'black', borderColor: 'white' }, 
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
          />        
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: 'rgb(238, 99, 24)',
            padding: "10px 20px",
            fontSize:"24px",
            '&:hover': {
              color: 'rgba(255, 70, 70, 0.99)',
              backgroundColor:"white"
            },
            color: 'black',
            fontWeight: 'bold',
          }}
        >
        تسجيل الدخول
        </Button>
      </Box>
    </Container>
  );
}
