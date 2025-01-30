
import { Breadcrumbs } from '@/app/components';
import styles from './style.module.scss';

export default function page() {
    return (

        <>
            <Breadcrumbs
                secondLink="/specialists"
                secondLabel="Команда"
                thirdLabel={`Специалист`}
            />

            <section className='section'>
                <div className="container">
                    <h1 className='title title--black'>опытные специалисты</h1>
                    <p className={styles.subtitle}>решат даже самые сложные стоматологические задачи</p>
                </div>
            </section>

        </>
    )
}
