import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Typography,
    Box,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ShowErrorToast from '../ShowErrorToast/ShowErrorToast';
import { useDeleteNeederMutation } from "../../app/slices/apiSlice";

const DeleteModal = ({ open, setOpen, selectedId,setSelectedId, name ,setName}) => {
    const [deleteNeeder, { isError, error }] = useDeleteNeederMutation();
    
    const handleClose = () => {
        setOpen(false);
        setName("");
        setSelectedId(null);
    };

    const handleConfirmDelete = async () => {
        try {
            const res = await deleteNeeder(selectedId);            
            isError && ShowErrorToast(error);            
            setName("");
            setSelectedId(null);
            setOpen(false);
            ShowErrorToast(res?.data);
    }catch(err){
          console.log(err);
    }
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    padding: 2,
                    backgroundColor: '#2b2b2b',
                    color: '#fff',
                },
            }}
        >
            <Box display="flex" alignItems="center" gap={1} p={1}>
                <WarningAmberIcon color="error" sx={{ fontSize: '2rem' }} />
                <DialogTitle sx={{ fontWeight: 'bold', color: '#ff4d4f' }}>
                    تأكيد الحذف
                </DialogTitle>
            </Box>

            <DialogContent>
                <Typography variant="body1" color="#ddd">
                    هل أنت متأكد من أنك تريد حذف{' '}
                    <Typography component="span" color="#ff4d4f" fontWeight="bold">
                        {name}
                    </Typography>{' '}
                    من قائمه المنتفعين؟
                </Typography>
            </DialogContent>

            <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
                    <Button
                        onClick={handleConfirmDelete}
                        variant="contained"
                        sx={{
                            backgroundColor: '#ff4d4f',
                            color: '#fff',
                            marginLeft:"10px",
                            '&:hover': { backgroundColor: '#cc0000' },
                        }}
                    >
                        حذف
                    </Button>
                <Button
                    onClick={handleClose}
                    variant="outlined"
                    sx={{
                        color: '#ddd',
                        borderColor: '#ddd',
                        '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' },
                    }}
                >
                    إلغاء
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteModal;