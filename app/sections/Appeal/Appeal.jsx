import Image from 'next/image';
import styles from './style.module.scss';
import getData from '../../utils/getData';

export default async function Appeal() {
    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/sekcziya-obrashhenie?populate=*`);
        data = response || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    const imageUrl = data?.data?.image?.url
        ? `${process.env.NEXT_PUBLIC_DOMAIN}${data.data.image.url}`
        : '/placeholder.png';

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section_wrapper}>
                    <div
                        className={styles.item}
                        dangerouslySetInnerHTML={{ __html: data?.data?.description || 'данные не загружены' }}
                    />
                    <div className={styles.image_wrapper}>
                        <Image
                            src={imageUrl}
                            alt='Dubrovina logo'
                            width={720}
                            height={700}
                            className="dsv-image"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                        />
                        <div className={styles.info}>
                            <p className={styles.name}>Анастасия дубровина</p>
                            <div className={styles.border_left}></div>
                            <p className={styles.info_text}>Основатель клиники, главный врач, стаж более 20 лет</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
