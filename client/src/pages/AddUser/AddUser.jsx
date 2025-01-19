import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
} from '@mui/material';
import "./addUser.css";
import { useSelector } from 'react-redux';
import { useCreateNeederMutation } from "../../app/slices/index";
import { toast } from "sonner";
import ShowErrorToast from "../../components/ShowErrorToast/ShowErrorToast";

export const AddUser = () => {
  const [createNeeder, { isError, error }] = useCreateNeederMutation();
  const { user } = useSelector(state => state.auth);
   const [formData, setFormData] = useState({
    company:user?.company,
        name:'',
        nationalId:'',
        wifeName:"",
        wifeNationalId:"",
    adress:"",
        phone:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {company,name,nationalId,wifeName,wifeNationalId,adress,phone } = formData;  
    try{
      const res = await createNeeder({
         company,
        name,
        nationalId,
       ...(wifeName && {wifeName}),
        ...(wifeNationalId && {wifeNationalId}),
    ...(adress && {adress}),
       ...( phone && {phone})
      }); 
      res.data?.status === 201 && toast.success(res?.data.message);
     res.data?.status === 201 && setFormData({
         company:user?.company,
        name:'',
        nationalId:'',
        wifeName:'',
        wifeNationalId:'',
    adress:'',
        phone:'',
      });
      isError && ShowErrorToast(error?.data.message);
    } catch (err) {
      console.log("errrr",err);
    }
  };

  return (
    <Container maxWidth="sm" className='addUser'>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 4,
          color: 'white', 
        }}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: 'white' }} 
        >
         أدخل بيانات المنتفع
        </Typography>
        <div className='flex'>
        <TextField
          label="الأسم"
          name="name"
          variant="outlined"
            fullWidth
            required
          value={formData.name}
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
          label="الرقم القومي"
          name="nationalId"
          type="number"
          variant="outlined"
          required
          fullWidth
          value={formData.nationalId}
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
        </div>
          <div className='flex'>
        <TextField
          label="العنوان (ان وجد)"
          name="adress"
          variant="outlined"
          fullWidth
          value={formData.adress}
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
          label=" رقم الهاتف (ان وجد)"
          name="phone"
            variant="outlined"
            type='number'
          fullWidth
          value={formData.phone}
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
        </div>
        <div className='flex'>
        <TextField
          label="اسم الزوجه (ان وجد)"
          name="wifeName"
          variant="outlined"
          fullWidth
          value={formData.wifeName}
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
          label="الرقم القومي للزوجه (ان وجد)"
          name="wifeNationalId"
          variant="outlined"
          fullWidth
          value={formData.wifeNationalId}
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
          </div>
      
        
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
            marginBottom:"20px"
          }}
        >
          إضافه
        </Button>
      </Box>
    </Container>
  );
}
