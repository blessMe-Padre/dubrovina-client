'use client'
import { usePathname } from "next/navigation";
import styles from './style.module.scss';

import getData from "@/app/utils/getData";
// import ContentRenderer from "@/app/components";
import { Price } from "@/app/sections";
import { Breadcrumbs, ContentRenderer } from "@/app/components";



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

    console.log(data);

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }



    return (

        <>
            <Breadcrumbs
                secondLink="/services"
                secondLabel="Услуги"
                thirdLabel={data.title_page}          
            />
            <section className={styles.section}>
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
                        {data?.about_the_disease?.length > 0 ? (
                            data.about_the_disease.map((item, idx) => (
                                <ContentRenderer key={idx} content={[item]} />
                            ))
                        ) : (
                        <p>Нет данных для отображения</p>
                        )}
                    </div>
                </div>
            </section>


             
            <section className="section">
                <div className="container">
                    <h2 className="title title--black">как проходит лечение?</h2>
                    <div>
                        {data?.about_the_disease?.length > 0 ? (
                            data.how_is_the_treatment_going.map((item, idx) => (
                                <ContentRenderer key={idx} content={[item]} />
                            ))
                            ) : (
                            <p>Нет данных для отображения</p>
                        )}
                    </div>
                </div>
            </section>

            <Price />
        </>
    )
}