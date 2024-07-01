import React from 'react'
import styles from '../../styles/track-package.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Tracking = () => {
  return (
    <div className={styles.track__container}>
        <Link className={styles.view__order} href={'/order'}>View all order</Link>
        <div className={styles.info__track__package}>
            <div className={styles.arrive__date}>Arriving on Thursday, July 4</div>
            <div className={styles.product__name}>Black and Gray Athletic Cotton Socks - 6 Pairs</div>
            <div className={styles.quantity}>Quantity: 2</div>
            <Image width={100} height={100} className={styles.product__img} alt='' src={'/images/products/men-athletic-shoes-green.jpg'}></Image>
            <div className={styles.progress}>
                <div className={styles.state__prepare}>Preparing</div>
                <div className={styles.state__ship}>Shipped</div>
                <div className={styles.state__delivered}>Delivered</div>
            </div>
        </div>
        <div className={styles.progress__container}>
            <div className={styles.progress__bar}>
                
            </div>
        </div>
    </div>
  )
}

export default Tracking
