import styles from './style.module.scss';
import Image from 'next/image';
import { Breadcrumbs, LinkButton } from "@/app/components";
import { Careful, DocumentSection, Memos, Visit } from '@/app/sections';
import ClientComponent from './ClientComponent';

export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Для пациентов',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default function page() {
    return (
        <>
            <Breadcrumbs
                secondLink="/for-patients"
                secondLabel="Для пациентов"
            />

            <ClientComponent />

            <section className={styles.price_list}>
                <div className="container">
                    <div className={styles.price_wrapper}>
                        <div className={styles.price_list_block}>
                            <h2 className={styles.price_title}>Прейскурант</h2>
                            <div className='border_left_div_large'></div>
                            <LinkButton
                                link={'/price'}
                                text='Посмотреть прайс'
                                color='black'
                            />
                        </div>

                        <div className={styles.price_wrapper_img}>
                            <Image
                                src='/images/image-6.jpg'
                                alt='Dubrovina logo'
                                width={1000}
                                height={507}
                                className="dsv-image"
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                            />
                        </div>

                    </div>
                </div>
            </section>

            <DocumentSection />
            <Visit />
            <Memos />

            <Careful />
        </>
    )
}
