import Image from 'next/image';
import { Breadcrumbs, OurWorksList } from '@/app/components';
import styles from './style.module.scss';
import ContentPage from './ContentPage';

export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Политика конфиденциальности',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default function policy() {
    return (
        <>
            <Breadcrumbs
                secondLink="/policy"
                secondLabel="Политика конфиденциальности"
            // thirdLabel={`Специалист`}
            />
            <div className='container'>
                <h1 className={styles.title}>Политика в отношении обработки персональных данных</h1>
            </div>

            <ContentPage />
        </>
    )
}
