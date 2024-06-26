import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../../styles/header-left.module.css'

const HeaderLeft = () => {
  return (
    <div className={styles.left__section}>
        <Link className={styles.header__link} href="facebook.com">
            <Image width={500} height={300} className={styles.amazon__logo} src={'/images/amazon-logo-white.png'} alt=''></Image>
        </Link>
    </div>  
  )
}

export default HeaderLeft
