import Image from "../components/Image/Image"

import styles from './404.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <Image src='https://cdn.discordapp.com/attachments/561591566045544449/1103756352171544688/404.webp'/>
    </div>
  )
}

export default NotFoundPage