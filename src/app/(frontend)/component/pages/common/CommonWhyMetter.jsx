import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonWhyMetter.module.css'

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
     <div className={styles.whymetterbg} style={{'--bg':`url(${bgUrl}) no-repeat center center / cover`}}>
            <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
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