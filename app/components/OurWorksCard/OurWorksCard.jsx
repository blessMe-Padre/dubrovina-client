import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export default function OurWorksCard({ item }) {
    const imageUrl = item?.image?.url ? `${process.env.NEXT_PUBLIC_DOMAIN}${item?.image?.url}` : '/placeholders/case.jpg';

    return (
        <div className={styles.item}>
            <div className='image_wrapper'>
                <Image
                    src={imageUrl}
                    // src={`${process.env.NEXT_PUBLIC_DOMAIN}${item?.image?.url}`}
                    alt='img'
                    width={720}
                    height={600}
                    className="dsv-image"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                />
            </div>

            <div className={styles.badge}>
                <div className={styles.badge_wrapper}>
                    <div>
                        <h3 className={styles.badge_title}>{item.title}</h3>
                        <p className={styles.badge_name}>{item.name}</p>
                    </div>
                    <Link className={styles.button} data-text='подробнее' href={`/our-works/${item?.slug}`}>
                        <span className={styles.text}>подробнее</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
