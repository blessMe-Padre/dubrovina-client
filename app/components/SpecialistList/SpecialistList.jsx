
import styles from './style.module.scss';
import getData from '../../utils/getData';
import { SpecialistCard } from './../index';

export default async function SpecialistList() {

    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/speczialisties?populate=*`);
        data = response?.data || null;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <div className='container'>
            <ul className={styles.list}>
                {data?.map((item, index) => (
                    <li key={index}>
                        <SpecialistCard
                            href={`/specialists/${item?.id}`}
                            img={`${process.env.NEXT_PUBLIC_DOMAIN}${item?.img[0]?.url}`}
                            name={item.name}
                            specialty={item.specialty}
                        />
                    </li>
                ))}

            </ul>
        </div>
    )
}
