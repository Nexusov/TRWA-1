/* eslint-disable react/prop-types */

import styles from './Input.module.css'

const Input = ({ name, placeholder, type, required }) => {
  return (
    <input className={styles.input} autoComplete='off' name={name} placeholder={placeholder} type={type} required={required} />
  )
}

export default Input