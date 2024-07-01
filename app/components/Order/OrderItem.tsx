import React from 'react'
import styles from '../../styles/order-item.module.css'
import Image from 'next/image'  

const OrderItem = () => {
    
  return (
    <div className={styles.item}>
        <div className={styles.item__grid}>
            <Image className={styles.product__img} width={100} height={100} src={'/images/products/luxury-tower-set-6-piece.jpg'} alt=''></Image>
            <div className={styles.information}>
                <div className={styles.product__name}>Intermediate Size Basketball</div>
                <div className={styles.date__arrive}>Arriving on: Thursday, July 4</div>
                <div className={styles.quantity}>Quantity: 1</div>
                <button className={styles.buy__again__button}>
                    <Image className={styles.buy__again__img} width={200} height={200} src={'/images/icons/buy-again.png'} alt=''></Image>
                    <span className={styles.buy__again__text}>Buy it again</span>
                </button>
            </div>
            <button className={styles.track__package__button}>Track Package</button>
        </div>
    </div>
  )
}

export default OrderItem
