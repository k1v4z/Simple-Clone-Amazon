import React from 'react'
import styles from '../../styles/checkout.module.css'

const Option = () => {

  return (
    <div className={styles.option}>
      <input type="radio" className={styles.radio__choice}/>
      <div>
        <div className={styles.delivery__date__option}>Friday, July 5</div>
        <div className={styles.delivery__price}>FREE Shipping</div>
      </div>
    </div>
  )
}

export default Option
