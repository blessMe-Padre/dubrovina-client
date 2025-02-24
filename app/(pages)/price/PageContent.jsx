import getData from "@/app/utils/getData";
import styles from './style.module.scss';
import Image from "next/image";
import pattern_2 from '@/public/services/“.png';
import { PriceInfo, Tabs } from "@/app/components";
import { Breadcrumbs } from "@/app/components";

export default async function PageContent() {
    let data = '';

    try {
        // Тут я получаю весь объект
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/speczializaczii-czena?populate[speczializacziya_sub_price][populate][speczializacziya_sub_price_item]=*&populate[speczializacziya_sub_price][populate]=img`);
        data = response?.data?.speczializacziya_sub_price || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <>
            <Breadcrumbs
                secondLink="/services"
                secondLabel="Цена на услуги"
            />
            <section className="section first_section">
                <div className="container">
                    <div>
                        <h2 className="title title--black">цены на услуги</h2>
                        <div className={styles.text_wrapper}>
                            <div className={styles.text_content}>

                                <p>
                                    <span style={{ fontWeight: 'bold' }}>Стоимость лечения в каждом конкретном клиническом</span> случае можно определить только после осмотра, анализа и диагностики проблемы.
                                    Каждый случай — уникален. У всех пацинтов различаются как начальные ситуации, так и пожелания по конечному результату.
                                </p>

                                <p>
                                    <span style={{ fontWeight: 'bold' }}>Перед началом лечения докторами составляется план</span>, который полностью прозрачен. В нем подробно указаны цены на все предстоящие манипуляции — таким рбразом Вы видите и знаете еще до начала лечения, на что будет потрачен каждый рубль.
                                </p>

                                <p>
                                    <span style={{ fontWeight: 'bold' }}>Общее представление об уровне цен в</span> клинике можно получить, ознакомившись с базовыми позициями представленными ниже.
                                </p>
                            </div>

                            <div className={styles.item_custom_border}>
                                <Image src={pattern_2} width={50} height={50} alt='image' />
                                <p className={styles.text_custom}>
                                    Слова "цена" и "ценность" хоть и однокоренные, но очень различны по смыслу. Так вот ценность наших работ и результатов в лечении во много раз превышает их цену.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.price_wrapper}>
                        <Tabs data={data} />
                        <PriceInfo />
                    </div>
                </div>
            </section>
        </>
    )
}