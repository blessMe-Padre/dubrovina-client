import styles from './style.module.css';

import src_1 from '@/public/consul/consul_2.png';
import src_2 from '@/public/consul/pattern_c.png';

import Image from 'next/image';

import { LightForm } from '@/app/components';

export default function Consultation() {
    return (
        <section className={`${styles.bg} section`}>
            <div className="container">
                <h2 className='title '>Запишитесь на консультацию</h2>
                <p className={styles.subtitle}>Оставьте контакты, администратор свяжется с Вами и подберет удобное время</p>
                
                    
                <div>
                    <Image src={src_2} alt='consul' className={styles.src_2} />
                    <Image src={src_1} alt='pattern' className={styles.src_1} />
                </div>

                <div className={styles.info}>
                    <LightForm />
                </div>
            </div>
        </section>
    )
}
