import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonWhyMetter.module.css'
import Image from 'next/image';

const CommonWhyMetter = ({heding,subheding,lefttext,righttext,imagewhymetter}) => {
    const bgUrl = typeof imagewhymetter === "string" ? imagewhymetter : imagewhymetter?.src;
  return (
    <>
    <div className='frame-1200 pt-100 pb-40 sm-pt-0 sm-pb-30 sm-px-20'>
        <div className={`${styles.flex}`}>
            <h2 className={styles.left}>{heding}</h2>
            <p className={styles.right}>{subheding}</p>
        </div>
       
    </div>
     <div className={`pb-200 sm-pb-50 sm-px-20 ${styles.whymetterbg}`} >
        <Image src={bgUrl} alt="Why Website Development"  width={1200} height={500} />
            <div className={`${styles.absolute}`}>
                <div className={`${styles.flex} ${styles.endalign}`}>
                    <div className={styles.left}>
                        <div className={styles.background} dangerouslySetInnerHTML={{__html:lefttext}}/>
                        
                    </div>
                    <div className={styles.right}>
                        <p dangerouslySetInnerHTML={{__html:righttext}}></p>
                    </div>
                    </div>

            </div>
        </div>
        </>
  )
}

export default CommonWhyMetter