import styles from './style.module.scss';
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