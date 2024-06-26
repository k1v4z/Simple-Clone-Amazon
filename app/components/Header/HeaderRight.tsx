import React from 'react'
import styles from '../../styles/header-right.module.css'
import Link from 'next/link'
import Image from 'next/image'

const HeaderRight = () => {
  return (
    <div className={styles.right__section}>
        <Link className={styles.header__link} href={'/order'}>
          <span className={styles.returns__text}>Returns</span><br />
          <span className={styles.orders__text}>&Orders</span>
        </Link>
        <Link className={`${styles.cart__link} ${styles.header__link}`} href={"/"}>
          <Image width={500} height={300} className={styles.cart__icon} src={'/images/icons/cart-icon.png'} alt=''></Image>
          <div className={`${styles.cart__quantity} ${styles.js__cart__quantity}`}>0</div>
        </Link>
    </div>
  )
}

export default HeaderRight
