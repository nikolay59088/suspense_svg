'use client'

import styles from './Loading.module.css'
import LoadingSVG from '@/image/loading.svg'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <LoadingSVG className={styles.loadingSVG} />
    </div>
  )
}

export default Loading