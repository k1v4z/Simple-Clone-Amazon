import React from 'react'
import styles from '../../styles/checkout.module.css'
import Link from 'next/link'

const Payment = () => {
  return (
    <div className={styles.payment__summary}>
      <div className='payment__title'>Order Summary</div>
      <div className={styles.payment__row}>
        <div className={styles.title}>
            Items (2):
        </div>
        <div className={styles.money}>     
            $47.65
        </div>
      </div>
      <div className={styles.payment__row}>
        <div className={styles.title}>
            Shipping & handling:
        </div>
        <div className={styles.money__shipping}>$23</div>
      </div>
      <div className={styles.payment__row__subtotal}>
        <div className={styles.title}>
            Total before tax:
        </div>
        <div className={styles.money}>
            $52.64
        </div>
      </div>
      <div className={styles.payment__row__estimate}>
        <div className={styles.title}>
            Esimated Tax (10%):
        </div>
        <div className={styles.money}>
            $5.26
        </div>
      </div>
      <div className={styles.payment__row__total}>
        <div className={styles.title__total}>Order Total: </div>
        <div className={styles.money__total}>$57.90</div>
      </div>
      <Link href={'/'}>
        <button className={styles.order__button}>
            Place your order
        </button>
      </Link>
    </div>
  )
}

export default Payment
