import moment from "moment/moment";
import "moment/locale/ar"
import css from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
   const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();  

  moment.locale("ar");  
  return (
    <div className={css.container}>
      <Sidebar />

      {pathname === "/" && <Navigate to="/home" />}      

      <div className={css.dashboard} >
        <div className={css.topBaseGradients} >
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header} style={{display:pathname === "/home"&&"none"}}>

          <div className={css.profile}>
            <img src="./profile.png" alt="person image" />
            <div className={css.details} key={user?._id}>
              <span>{user?.email.split('@')[0]}</span>
              <span>{user?.email}</span>
            </div>
          </div>

          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="بحث" />
          </div>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
