'use client'
import { usePathname } from "next/navigation";
import Image from "next/image"
import styles from './style.module.scss';
import src from '@/public/services-sub/bg2.png';
import { Form } from "@/app/components";

import getData from "@/app/utils/getData";



export default async function ContentPage({ id }) {

    const pathname = usePathname();

    let slug = pathname.split("specialization/")[1]?.split("/")[0] || [null];
    
     let data = ''

    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/speczializaczii-podkategoriya?
populate[speczializacziya_cat][filters][slug][$eq]=${slug}&
populate[speczializacziya_cat][populate][speczializacziya_sub][filters][id][$eq]=${id}&
populate[speczializacziya_cat][populate][speczializacziya_sub][populate][speczializacziya_sub_page][populate]=*`);

    data = response?.data?.speczializacziya_cat[0].speczializacziya_sub[0].speczializacziya_sub_page || null;

    // console.log(data.title_page);

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }



    return (

        <>
            <section className="section">
                <Image src={src} className={styles.bg} alt="bg" width={1400} height={500} />

                <div className="container">
                    <div className={styles.info}>  
                        <h2 className='title'>{data.title_page}</h2>
                        <p className={styles.subtitle}>{data.desc_page}</p> 
                    </div>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <h2 className="title title--black">Что представляет собой заболевание?</h2>
                    <div>
                        {/* {data.about_the_disease[0].map((item, idx) => {
                            console.log(item)
                        })} */}
                    </div>
                </div>
            </section>
        </>
    )
}