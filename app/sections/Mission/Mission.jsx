import styles from './style.module.css';
import Image from 'next/image';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

const fetchData = async () => {
    try {
        const res = await fetch(`${domain}/api/sekcziya-missiya?popular=*`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        return [];
    }
};


export default async function Mission() {

    const data = await fetchData();

    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <Image
                            src="/remove_from_server/image-1.jpg"
                            alt="Изображение"
                            width={960}
                            height={672}
                            className={`dsv-image`}
                        />
                        <div className={`${styles.descriptions} ${styles.descriptions_black}`}>
                            <h2 className={`title ${styles.title} ${styles.title_white}`}>
                                {data?.data?.title}
                            </h2>
                            <div className='border_left_div'></div>
                            <p className={`${styles.text}`}>Н
                                {data?.data?.subtitle}
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image
                            src="/remove_from_server/image-2.jpg"
                            alt="Изображение"
                            width={960}
                            height={672}
                            className={`dsv-image`}
                        />

                        <div className={`${styles.descriptions} ${styles.descriptions_white}`}>
                            <h2 className={`title ${styles.title} ${styles.title_black}`}>
                                {data?.data?.title_2}
                            </h2>
                            <div className='border_left_div'></div>
                            <p className={`${styles.text}`}>{data?.data?.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

