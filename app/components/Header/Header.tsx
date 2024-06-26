import React from 'react'
import styles from '../../styles/header.module.css'
import HeaderLeft from './HeaderLeft'
import HeaderMiddle from './HeaderMiddle'
import HeaderRight from './HeaderRight'


const Header = () => {
  return (
    <div className={styles.amazon__header}>
      <HeaderLeft/>
      <HeaderMiddle/>
      <HeaderRight/>
    </div>
  )
}

export default Header
