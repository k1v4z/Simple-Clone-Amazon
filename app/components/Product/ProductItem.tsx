import React from 'react'
import styles from '../../styles/product-item.module.css'
import Image from 'next/image'

const ProductItem = () => {
  return (
    <div className={styles.product__container}>
      <div className={styles.product__image__container}>
        <Image width={150} height={200} className={styles.product__image} src={'/images/products/backpack.jpg'} alt=''/>
      </div>
      <div className={styles.product__name}>
        Black and Gray Athletic Cotton Socks - 6 Pairs
      </div>
      <div className={styles.product__rating__container}>
        <Image className={styles.rate__img} width={500} height={300} src={'/images/ratings/rating-0.png'} alt=''/>
        <div className={styles.rating__count}>12</div>
      </div>
      <div className={styles.product__price}>$12</div>
      <div className={styles.quantity__container}>
        <select className={`${styles.select__quantity} ${styles.js__select__quantity}`}>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className={styles.product__space}></div>
      <button className={`${styles.add__to__cart__button} ${styles.js_button_add_to_cart}`}>
          Add to Cart
      </button>
    </div>
  )
}

export default ProductItem
