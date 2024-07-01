import React from 'react'
import styles from '../../styles/checkout.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CheckoutHeader = () => {
  return (
    <div className={styles.checkout__header}>
      <div className={styles.header__content}>
        <div className={styles.check__left__section}>
            <Link href={'/'}>
                <Image className={styles.amazon__logo} width={100} height={100} alt='' src={'/images/amazon-logo.png'}/>
            </Link>
        </div>
        <div className={styles.check__middle__section}>
            Checkout(<Link className={styles.back__to__amazon} href={'/'}>1 items</Link>)
        </div>
        <div className={styles.check__right__section}>
            <Image className={styles.lock__icon} width={100} height={100} alt='' src={'/images/icons/checkout-lock-icon.png'}/>
        </div>
      </div>
    </div>
  )
}

export default CheckoutHeader
