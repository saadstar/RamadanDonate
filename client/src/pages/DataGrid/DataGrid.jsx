import React, { useMemo ,useState} from 'react'
import MaterialReactTable from "material-react-table";
import './DataGrid.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useGetAllNeederQuery } from "../../app/slices/index";
import { toast } from "sonner";
import IconButton from '@mui/material/IconButton'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteModal from '../../components/DeleteModal/DeleteModal';


const DataGrid = () => {    
    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: "dark"
            }
        })
    );
    const { user } = useSelector(state => state.auth);    
    const [year, setYear] = useState("2025");
    const { data:allNeeder, error,isLoading ,isError} = useGetAllNeederQuery({company:user?.company,year});
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [name, setName] = useState("");

    const handleOpenModal = ({id,name}) => {
        setSelectedId(id);
        setName(name)
        setOpenModal(true);
    }
    if (isError) {
        return toast.error(error);
    }
    const columns = useMemo(() => [
        {
            accessorKey: "name",
            header: "الأسم",
            muiTableHeadCellProps: {
                sx: { fontWeight: 'bold', textAlign: 'right', paddingRight: '20px'}
            },
            muiTableBodyCellProps: {
                sx: { textAlign: 'right', paddingRight: '20px' }
            }
        },
        {
            accessorKey: "nationalId",
            header: "الرقم القومي",
             muiTableHeadCellProps: {
                sx: { fontWeight: 'bold', textAlign: 'right', padding: '20px' }
            },
            muiTableBodyCellProps: {
                sx: { textAlign: 'right', padding: '20px' }
            }
        },
        {
            accessorKey: "wifeName",
            header: "الزوجه",
             muiTableHeadCellProps: {
                sx: { fontWeight: 'bold', textAlign: 'right', padding: '20px' }
            },
            muiTableBodyCellProps: {
                sx: { textAlign: 'right', padding: '20px' }
            }
        },
        {
            accessorKey: "wifeNationalId",
            header: "القومي للزوجه",
             muiTableHeadCellProps: {
                sx: { fontWeight: 'bold', textAlign: 'right', padding: '20px' }
            },
            muiTableBodyCellProps: {
                sx: { textAlign: 'right', padding: '20px' }
            }
        },
        {
            accessorKey: "adress",
            header: "العنوان",
             muiTableHeadCellProps: {
                sx: { fontWeight: 'bold', textAlign: 'right', padding: '20px' }
            },
            muiTableBodyCellProps: {
                sx: { textAlign: 'right', padding: '20px' }
            }
        },
        {
            accessorKey: "phone",
            header: "الهاتف",
             muiTableHeadCellProps: {
                sx: { fontWeight: 'bold', textAlign: 'right', padding: '20px' }
            },
            muiTableBodyCellProps: {
                sx: { textAlign: 'right', padding: '20px' }
            }
        },
         {
            accessorKey: "createdAt",
            header: "التاريخ",
            Cell: ({ row }) => {
                const createdAt = row.original.createdAt;
                const date = createdAt?.split("T")[0]; // Extract date before "T"
                return date || "N/A"; // Handle cases where createdAt is undefined
            },
             muiTableHeadCellProps: {
                sx: { fontWeight: 'bold', textAlign: 'right', padding: '20px' }
            },
            muiTableBodyCellProps: {
                sx: { textAlign: 'right', padding: '20px' }
            }
        },
        {
            accessorKey: "delete",
            header: "حذف",
            Cell: ({ row }) => (
                <IconButton
                    color="error" 
                    onClick={() => handleOpenModal({id:row.original._id,name:row.original.name})}
                    aria-label="delete"
                    sx={{paddind:"8px"}}
                >
                    <DeleteOutlineIcon />
                </IconButton>
            ),
             muiTableHeadCellProps: {
                sx: { fontWeight: 'bold', textAlign: 'right', padding: '20px' }
            },
            muiTableBodyCellProps: {
                sx: { textAlign: 'right', padding: '20px' }
            }
        },
    ]);
     const handleYearChange = (event) => {
    setYear(event.target.value);
  };  
    return (
        <div className="table-container">
            <div className='headerFlex'>
                <div className='leftHeader'>
                     <h2 style={{ paddingRight: "20px" }}>اسماء المنتفعين</h2>
                 <div className="durationButton"> 
      <select
        id="year"
        value={year}
        onChange={handleYearChange}
        className="border rounded-md p-2 text-base outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Array.from({ length: 11 }, (_, i) => 2024 + i).map((yearOption) => (
          <option key={yearOption} value={yearOption}>
            {yearOption}
          </option>
        ))}
      </select>      
                </div>
                </div>
                <Link className='btn-flex' to='/add-user'>
                    <AddIcon />
                    أضافه منتفع
                </Link>
            </div>
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={isLoading? [{name:"please Wait"}]: allNeeder} />
            </ThemeProvider>
            <DeleteModal open={openModal} setOpen={setOpenModal} selectedId={selectedId} setSelectedId={setSelectedId} name={name} setName={setName}/>
        </div>
    )
}

export default DataGrid