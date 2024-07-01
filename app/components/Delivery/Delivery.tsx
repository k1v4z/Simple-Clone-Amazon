import React from 'react'
import styles from '../../styles/checkout.module.css'
import Option from './Option'

const Delivery = () => {
  const a = [1,2,3]
  return (
    <div className={styles.delivery__options}>
      <div className={styles.delivery__title}>Choose a delivery option:</div>
      {
        a.map((item) => {
          return <Option key={item}/>
        })
      }
    </div>
  )
}

export default Delivery
