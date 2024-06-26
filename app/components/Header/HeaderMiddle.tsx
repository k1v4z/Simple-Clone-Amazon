import React from 'react'
import styles from '../../styles/header-middle.module.css'
import Image from 'next/image'

const HeaderMiddle = () => {
  return (
    <div className={styles.middle__section}>
      <input type="text" placeholder='Search' className={`${styles.search__bar} ${styles.js__input}`} />
      <button className={`${styles.search__button} ${styles.js__search__btn}`}>
        <Image width={500} height={300} className={styles.search__icon} src={'/images/icons/search-icon.png'} alt=''></Image>
      </button>
    </div>
  )
}

export default HeaderMiddle
