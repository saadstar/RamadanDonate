import { useState } from "react";
import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Statistics/Statistics';
import {  groupNumber } from '../../data';
import css from './Dashboard.module.css';
import { useGetAllNeederQuery } from "../../app/slices/apiSlice";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
   const [year, setYear] = useState("2025");
  const { data:needer,isLoading } = useGetAllNeederQuery({company:user?.company,year});
   const handleYearChange = (event) => {
    setYear(event.target.value);
  };  
  const cardsData = [
  {
    title: "كرتونه رمضانيه ",
    change: 24,
    amount:isLoading ? 0:needer.length,
    icon:<FaBoxOpen/>
  },
  {
    title: "متطوع",
    change: +5,
    amount: 12,
    icon:<FaPeopleArrows/>
  },
  {
    title: "منتج غذائي",
    change: 20,
    amount: isLoading ? 0:needer.length * 20,
    icon:<MdFastfood/>
  },
  {
    title: "مساعدات ماليه",
    change: 1600,
    amount: isLoading ? 0:needer.length * 1600,
    icon:<AiFillDollarCircle/>
  },
  ];
  
  return <div className={css.container}>
    {/* right side */}
    <div className={css.dashboard}>      
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span>أرقام تهمك</span>

          <div className={css.durationButton}> 
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
          <div className={css.cards}>
            {
              cardsData.map((card, index)=> (
                <div className={css.card} key={index}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span className={css.cardChange}>+{card.change}</span>
                  </div>
                  <div className={css.cardAmount}>
                    <span>{groupNumber(card.amount)}</span>
                    <span className={css.cardIcon}>{card.icon}</span>  
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      <Statistics/>
    </div>
      <Orders/>
  </div>
}

export default Dashboard