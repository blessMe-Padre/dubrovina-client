import Image from "next/image"
import styles from './style.module.scss';
import src from '@/public/services-sub/bg.png';
import { Form } from "@/app/components";

import Link from "next/link";
import { Price } from "@/app/sections";

export default function PageContent({ data, data_sub, slug, data_featured }) {

    const title = data[0]?.Page?.title_page || null;
    const desc = data[0]?.Page?.desc_page || null;

    return (
        <>
            <section className='relative'>
                <Image src={src} className={styles.bg} alt="bg" width={1400} height={900} />
                <div className='container'>
                    <div className={styles.info}>
                        <h2 className="title">{title}</h2>
                        <p className={styles.subtitle}>{desc}</p>

                        {/* <div className={styles.form_wrapper}>
                            <Form />
                            </div> */}
                    </div>
                </div>    
            </section> 

             <section className='section relative'>
                <div className='container'>
                    <ul className={styles.list}>
                        {data_sub?.map((item, idx) => (
                            <li key={idx} className={styles.specialization_sub_item}>
                                <Link href={`/specialization/${slug}/specialization_sub/${item.id}`} className={styles.link}>
                                    <p className={styles.specialization_sub_title}>{item?.name || ''}</p>  
                                </Link>
                            </li>
                    ))}
                    </ul>

                </div>    
            </section> 

            <section className="section">
                <div className="container">
                    <h2 className="title title--black">
                        Особенности лечения
                    </h2>

                    <div>

                        {/* {console.log(data_featured)} */}
                        {data_featured?.map((item, idx) => {
                            return (
                                <li className={styles.featured_item} key={idx}>
                                    <p>
                                        {item?.Name || 'Имя не задано'}
                                    </p>

                                    <p>
                                        {item?.desc || 'Описание не задано'}
                                    </p>
                                </li>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Price />

            
        </>
    )
}