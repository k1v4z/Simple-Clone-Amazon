import React from 'react'
import styles from '../../styles/product.module.css'
import ProductItem from './ProductItem'

const GridProduct = () => {
  let arr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className={styles.product}>
      <div className={`${styles.product__grid} ${styles.js__product__grid}`}>
        {
          arr.map((item: number) =>{
            return <ProductItem key={item}/>
          })
        }
      </div>
    </div>
  )
}

export default GridProduct
