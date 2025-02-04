'use client';

import pattern_2 from '@/public/services/“.png';
import { usePathname } from "next/navigation";
import styles from './style.module.scss';
import Image from 'next/image';
import src from '@/public/icons/rubl.svg';

import getData from "@/app/utils/getData"
import Link from 'next/link';

export default async function Price() {

    const pathname = usePathname();

    let slug = pathname.split("specialization/")[1]?.split("/")[0] || [null];

    let data = '';

    try {
        // Тут я получаю только нужный мне объект 1 
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/speczializaczii-czena?populate[speczializacziya_sub_price][filters][slug][$eq]=${slug}&populate[speczializacziya_sub_price][populate][speczializacziya_sub_price_item]=*`);
        data = response?.data?.speczializacziya_sub_price || null;


    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <section className="section">
            <div className="container">
                <h2 className="title title--black">
                    стоимость лечения
                </h2>

                <div className={styles.text_wrapper}>
                    <div className={styles.text_content}>

                        <p> 
                            Стоимость лечения в каждом конкретном клиническом случае можно определить только после осмотра, анализа и диагностики проблемы. 
                            Каждый случай — уникален. У всех пацинтов различаются как начальные ситуации, так и пожелания по конечному результату.
                        </p>

                        <p>
                            Перед началом лечения докторами составляется план, который полностью прозрачен. В нем подробно указаны цены на все предстоящие манипуляции — таким рбразом Вы видите и знаете еще до начала лечения, на что будет потрачен каждый рубль.
                        </p>

                        <p>
                            Общее представление об уровне цен в клинике можно получить, ознакомившись с базовыми позициями представленными ниже.
                        </p>
                    </div>

                    <div className={styles.item_custom_border}>
                        <Image src={pattern_2} width={50} height={50} alt='' />
                        <p className={styles.text_custom}>
                            Слова "цена" и "ценность" хоть и однокоренные, но очень различны по смыслу. Так вот ценность наших работ и результатов в лечении во много раз превышает их цену.
                        </p>
                    </div>
                </div>

                <div className={styles.price_wrapper}>
                     {data.map((item, idx) => (
                        <div key={idx} className={styles.price_wrapper_wrapper}>
                            {item?.speczializacziya_sub_price_item.map((price, price_index) => (
                                <div className={styles.price_item} key={price_index}>
                                    <p className={styles.price_title}>
                                        {price.Name}
                                    </p>

                                    <p className={styles.price_count}>
                                        {price.Price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className={styles.info_price}>
                    <div className={styles.info_price_wrapper}>
                        <Image src={src} width={50} height={50} alt='' className={styles.rubl} />

                        <p className={styles.price_rubl}>
                            Ознакомиться с полным подробным прейскурантом <br /> вы можете на странице "Для пациентов"
                        </p>
                    </div>

                    <Link href={'/'} className={styles.price_link}>
                        Перейти
                    </Link>

                </div>


            </div>
        </section>
    )
}