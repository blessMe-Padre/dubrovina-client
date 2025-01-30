import Image from 'next/image';
import Link from "next/link";
import styles from './style.module.css';

import arrow from '@/public/specialization/arrow.svg';
// import src from '@/public/specialization/spec_1.png';


export default function SpecializationCard({ title, img, href, id }) {

  return (
        <>
            {title == null ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image 
                        src={img ? img : '/placeholder.png'}
                        width={150}
                        height={100} 
                        alt='ds' 
                        className={styles.img_ds} 
                    />
                </div>
            )
    
            : (
                <div className={styles.item}>
                        <p className={styles.item_title}>{title}</p>
                        <div className={styles.img_wrapper}>
                            <Image 
                                src={img ? img : '/placeholder.png'} width={140} height={140} alt='v' 
                                    className={`dsv-image ${styles.img}`} 
                                />
                            <Link 
                                href={'/'} 
                                className={styles.item_link}>
                                <Image 
                                    src={arrow} 
                                    className={styles.arrow} alt='arrow' 
                                />
                            </Link>
                        </div>
                    </div>
            )
    }   
            

            {/* <div className={`${styles.item} ${styles.item_black}`}>
                <p className={`${styles.item_title} ${styles.item_title_white}`}>Диагностика</p>
                <div className={styles.img_wrapper}>
                    <Image src={src} alt='v' className={`dsv-image ${styles.img}`} />
                    <Link href={href} className={styles.item_link}>
                        <Image src={arrow} className={styles.arrow} alt='arrow' />
                    </Link>
                </div>
            </div>

            <div className={styles.item}>
                <p className={styles.item_title}>Диагностика</p>
                <div className={styles.img_wrapper}>
                    <Image src={src} alt='v' className={`dsv-image ${styles.img}`} />
                    <Link href={href} className={styles.item_link}>
                        <Image src={arrow} className={styles.arrow} alt='arrow' />
                    </Link>
                </div>
            </div>  */}
        </>
    )
}