import styles from './style.module.scss';


export default function PriceInfo() {
    return (
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
    )
}