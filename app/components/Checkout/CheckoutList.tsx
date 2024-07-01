import React from 'react'
import styles from '../../styles/checkout.module.css'
import CheckoutItem from './CheckoutItem';
import Payment from './Payment';

const CheckoutList = () => {
  const a = [1,2,3];

  return (
    <div className={styles.checkout__product}>
      <div className={styles.left__summary}>
        <div className={styles.page__title}>Review your order</div>
        <div className={styles.no__product}></div>
        <div className={styles.checkout__grid}>
          {
            a.map((item) => {
              return <CheckoutItem key={item}/>
            })
          }
        </div>
      </div>
      <Payment/>
    </div>
  )
}

export default CheckoutList
