import React from 'react'
import styles from '../../styles/header-order.module.css'

const OrderHeader = () => {
  return (
    <div className={styles.order__header}>
      <div className={styles.left}>
            <div className={styles.order__date}>
                <div className={styles.order__date__label}>Order placed:</div>
                <div className={styles.date}>24 June</div>
            </div>
            <div className={styles.order__total}>
                <div className={styles.order__total_label}>
                    Total:
                </div>
                <div className={styles.price}>$$12</div>
            </div>
            </div>
                <div className={styles.right}>
                    <div className={styles.order__id}>
                    Order ID:
                </div>
                <div className={styles.order__code}>f857649a-f7b5-2f22-1201-371d3c7224b1</div>
            </div>
    </div>
  )
}

export default OrderHeader
