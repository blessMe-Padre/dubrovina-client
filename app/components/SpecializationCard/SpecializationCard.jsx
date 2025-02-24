import Image from 'next/image';
import Link from "next/link";
import styles from './style.module.scss';

import arrow from '@/public/specialization/arrow.svg';
// import src from '@/public/specialization/spec_1.png';


export default function SpecializationCard({ title, img, href, id, slug, addClass }) {


  return (
        <>
            {title == null ? (
                <div className={styles.wrapper_only_img} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image 
                        src={img ? img : '/placeholder.png'}
                        width={300}
                        height={150} 
                        // objectFit="contain"
                        alt='ds' 
                        className={styles.img_ds} 
                    />
                </div>
            )
    
            : (
                <Link href={`/specialization/${slug}`} className={styles.item_wrapper} >
                    <div className={`${styles.item} ${addClass === 'addClass' ? `${styles.item_black}` : ''}`}>
                            
                        <p className={`${styles.item_title} ${addClass === 'addClass' ? `${styles.item_title_white}` : ''}`}>{title}</p>
                        <div className={styles.img_wrapper}>
                            <Image 
                                src={img ? img : '/placeholder.png'} width={140} height={140} alt='v' 
                                    className={`dsv-image ${styles.img}`} 
                                />
                            <div className={styles.item_link}>
                                <Image 
                                    src={arrow} 
                                    className={styles.arrow} alt='arrow' 
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            )
        }   
        </>
    )
}