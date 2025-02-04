import styles from './style.module.scss';
import arrow from '@/public/services-sub/arrow_w.svg';
import feautured_bg from '@/public/services-sub/featured_bg.png'
import Image from 'next/image';
import { Breadcrumbs, Form } from "@/app/components";

import Link from "next/link";
import { Price } from "@/app/sections";

export default function PageContent({ data, data_sub, slug, data_featured }) {

    const title = data[0]?.Page?.title_page || null;
    const desc = data[0]?.Page?.desc_page || null;

    return (
        <>
            <Breadcrumbs
                secondLink="/services"
                secondLabel="Услуги"
                thirdLabel={title}          
            />

            <section className={styles.section}>
                <div className='container'>
                    <div className={styles.info}>
                        <h2 className="title">{title}</h2>
                        <p className={styles.subtitle}>{desc}</p>
                        <div className={styles.form_wrapper}>
                            <Form direction={'row'} blur={'yes'} />
                        </div> 
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
                                    <Image src={arrow} alt='arrow' width={30} height={30} className={styles.arrow} />
                                </Link>
                            </li>
                    ))}
                    </ul>

                </div>    
            </section> 

            <section className={styles.section_second}>
                <div className="container">
                    <h2 className="title title--black">
                        Особенности лечения зубов 
                        в нашей клинике
                    </h2>

                    <Image src={feautured_bg} width={800} height={400} className={styles.feautured_bg} />

                    <div className={styles.wrapper_info}>
                        {data_featured?.map((item, idx) => {
                            let count = 0;
                            idx++;
                            return (
                                <li className={styles.featured_item} key={idx}>
                                    <p className={styles.count}>{`${count}${idx}`}</p>
                                    <div>
                                        <p className={styles.item_title}>
                                            {item?.Name || 'Имя не задано'}
                                            
                                        </p>

                                        <p className={styles.item_desc}>
                                            {item?.desc || 'Описание не задано'}
                                        </p>
                                    </div>
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