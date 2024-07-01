import React from 'react'
import styles from '../../styles/order.module.css'
import OrderList from './OrderList'

const OrderContent = () => {
  const a = [1,2]

  return (
    <div className={styles.order__flex}>
      <div className={styles.page__title}>
        Your Orders
      </div>
    {
      a.map((item) => {
        return <OrderList key={item}/>
      })
    }
    </div>
  )
}

export default OrderContent
