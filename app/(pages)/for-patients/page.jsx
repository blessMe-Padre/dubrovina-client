import styles from './style.module.scss';
import Image from 'next/image';
import { Breadcrumbs } from "@/app/components";

export default function page() {
    return (
        <>
            <Breadcrumbs
                secondLink="/for-patients"
                secondLabel="Для пациентов"
            />
            <section className={styles.section}>
                <div className={styles.image_wrapper}>
                    <Image
                        src='/images/image-5.jpg'
                        alt='Dubrovina logo'
                        width={1439}
                        height={850}
                        className="dsv-image"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                    />
                </div>
                <div className={styles.section_block}>
                    <h1 className='title'>лечение без страха</h1>
                    <p className={styles.section_text}>Если вы испытываете страх перед визитом
                        к стоматологу. Мы сделаем всё возможное, чтобы помочь вам справиться с дискомфортными ощущениями</p>
                </div>
            </section>
        </>
    )
}
