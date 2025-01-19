import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineTable } from "react-icons/ai";
import {  FaSignOutAlt} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../../app/slices/authSlice";
import { toast } from "sonner";


const Sidebar = () => {
    const navigate = useNavigate();
    const path = useLocation().pathname;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
        toast.success("تم تسجيل الخروج");
    }
    
    return (
        <div className={css.container}>            
            <img src="./logo.png" alt="logo" className={css.logo} onClick={()=>navigate("/")}/>
            <div className={css.menu}>
                <NavLink to="home" className={css.item} title={"الرئيسيه"} >
                    <IoMdHome size={30} style={path==='/home'&& {fill:" rgb(238, 99, 24)"}}/>
                </NavLink>
                <NavLink to="dashboard" className={css.item} title={"داشبورد"} >
                    <MdSpaceDashboard size={30} style={path==='/dashboard'&& {fill:" rgb(238, 99, 24)"}}/>
                </NavLink>
                <NavLink
                    to="users"
                    className={css.item}
                    title="المنتفعين"
                >
                    <AiOutlineTable size={30} style={path==='/users'&& {fill:" rgb(238, 99, 24)"}}/>
                </NavLink>
                <NavLink
                    to="add-user"
                    className={css.item}
                    title="إضافه"
                >
                    <FaPlusSquare size={30} style={path==='/add-user'&& {fill:" rgb(238, 99, 24)"}}/>
                </NavLink>

                <FaSignOutAlt className={ css.logout} size={30} onClick={logoutHandler} />
            </div>
        </div>
       
    )
}

export default Sidebar;