import styles from './style.module.css';

import { SpecializationCard } from '@/app/components';


export default function Specialization() {

    const data = [
        {

        }
    ]

    return (
        <section className='section'>
            <div className='container'>
                <h2 className='title title--black'>наша специализация</h2>
                <p className={styles.subtitle}>Лечим зубы, как лечили бы себе</p>

                <div className={styles.specialization_wrapper}>
                    <SpecializationCard           
                        href={`/specialization/${1}`}
                    />
                </div>
            </div>
        </section>
    )
}