import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
} from '@mui/material';
import { toast } from "sonner";
import  ShowErrorToast  from "../../components/ShowErrorToast/ShowErrorToast";


export const Register = () => {  
   const [formData, setFormData] = useState({    
    email: '',
       password: '', 
       company:"albahren"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {      
        const response = await fetch('https://api.ramadonate.icu/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           "Accept": "application/json",
        },  
        body: JSON.stringify(formData),
        });
        console.log(response);
       if (response.ok) {
        await response.json();
          toast.success("نم إنشاء حساب بنجاح ")
      } else {
          response?.status === 400 && ShowErrorToast("البريد مسجل بالفعل");
          response?.status === 500 && ShowErrorToast("حدث خطأ ما");
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
            color: 'white', 
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
          sx={{ color: 'white' }} 
        >
        إنشاء حساب
        </Typography>
        <TextField
          label="البريد الالكتروني"
          name="email"
          type='email'
          variant="outlined"
                  fullWidth
                  required
          value={formData.email}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', borderColor: 'white' }, 
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
                  required
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', borderColor: 'white' },
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
          label="الشركه"
          name="company"
          type="text"
          variant="outlined"
                  fullWidth                  
          value={formData.company}
          onChange={handleChange}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', borderColor: 'white' },
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
            color: 'white',
            fontWeight: 'bold',
          }}
        >
        إنشاء حساب
        </Button>
      </Box>
    </Container>
  );
}
