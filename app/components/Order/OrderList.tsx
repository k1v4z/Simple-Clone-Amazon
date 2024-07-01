import React from 'react'
import styles from '../../styles/order-list.module.css'
import OrderHeader from '../Header/OrderHeader'
import OrderItem from './OrderItem'

const OrderList = () => {
  const a = [1,2,3]

  return (
    <div className={styles.order__container}>
      <OrderHeader/>
      <div className={styles.order__information__grid}>
        {
          a.map((item) => {
            return <OrderItem key={item}/>
          })
        }
      </div>
    </div>
  )
}

export default OrderList
