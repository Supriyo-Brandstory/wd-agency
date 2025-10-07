import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonServices.module.css'
import shaejahservicebg from '@/app/(frontend)/assets/images/website-development/shaejahservicebg.webp'

const CommonServices = ({
    theding,
    tdesc,
    bheding,
    bdesc,
}) => {
    const bgurl = typeof shaejahservicebg === "string" ? shaejahservicebg : shaejahservicebg?.src;
  return (
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
        <div className={styles.topSection}>
            <div className={styles.left} style={{'--width': '40%'}}>
                <h2>{theding}</h2>
            </div>
            <div className={styles.right} style={{'--width': '60%'}}>
                           <div dangerouslySetInnerHTML={{__html:tdesc}}></div>
            </div>
        </div>

        <div className={styles.bottomSection} style={{'--bg-url': `url(${bgurl})`}}>
            <div className='frame-700' style={{margin: '0 0'}}>
            <h4 className='mb-20'>{bheding}</h4>
            <div dangerouslySetInnerHTML={{__html:bdesc}}></div>
            </div>
        </div>


    </div>
  )
}

export default CommonServices