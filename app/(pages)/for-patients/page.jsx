import styles from './style.module.scss';
import { Breadcrumbs } from "@/app/components";

export default function page() {
    return (
        <>
            <Breadcrumbs
                secondLink="/for-patients"
                secondLabel="Для пациентов"
            />
            <section className={styles.section}>
                <h1 className='title'>лечение без страха</h1>
                <p className={styles.section_text}>Если вы испытываете страх перед визитом
                    к стоматологу. Мы сделаем всё возможное, чтобы помочь вам справиться с дискомфортными ощущениями</p>
            </section>
        </>
    )
}
