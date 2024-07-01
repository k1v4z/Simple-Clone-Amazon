import React from 'react'
import styles from '../../styles/checkout.module.css'
import Image from 'next/image'
import Delivery from '../Delivery/Delivery'

const CheckoutItem = () => {
  return (
    <div className={styles.order__summary}>
      <div className={styles.cart__item__container}>
        <div className={styles.delivery__date}>
            Delivery date: Friday, 24 July
        </div>
        <div className={styles.cart__item__grid}>
            <Image width={100} height={50} className={styles.product__img} src={'/images/products/men-athletic-shoes-green.jpg'} alt=''/>
            <div className={styles.cart__item__detail}>
                <div className={styles.product__name}>Adults Plain Cotton T-Shirt - 2 Pack</div>
                <div className={styles.product__price}>
                    $7.99
                </div>
                <div className={styles.quantity}>
                  Quantity: <span className={styles.quantity__label}>2</span>
                  <span className={`${styles.update}`}>Update</span>
                  <input type="text" className={`${styles.quantity__input}`} />
                  <span className={styles.save__quantity__link}>Save</span>
                  <span className={styles.delete}>Delete</span>
                </div>
            </div>
            <Delivery/>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
