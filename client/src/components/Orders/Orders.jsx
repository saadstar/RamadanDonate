import React from 'react'
import { groupNumber, ordersData } from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="./logo.png" alt="logo" />
                <span>محتويات الكرتونه الغذائيه</span>
            </div>

            <div className={`grey-container ${css.stat}`}>
                <span>القيمه الماليه للكرتونه</span>
                <span>$ {groupNumber(1600)}</span>
            </div>

            <div className={css.orders}>
                {
                    ordersData.map((order, index) => (
                        <div key={index} className={css.order}>
                            <div>
                                <span>{order.name}</span>
                                <span>$ {order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>الكميه : {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className={css.orderChart}>
                <span>التفاصيل البيانيه : </span>
                <OrdersPieChart/>
            </div>
        </div>
    )
}

export default Orders