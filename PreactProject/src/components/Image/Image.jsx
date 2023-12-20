/* eslint-disable react/prop-types */

import styles from './Image.module.css'

const Image = ({ src, alt }) => {
  return (
    <div className={styles.imgContainer}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image