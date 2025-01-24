import React from 'react'
import styles from './style.module.css';
import Image from 'next/image';

import bg from '@/public/loyalnost/bg.png';
import persent_img from '@/public/loyalnost/persent.png'

const Loyalnost = () => {
  return (
    <section className='section'>
        <div className='container'>

            <div className={styles.wrapper}>

                <div className={styles.info}>
                    <h3 className={styles.title}>
                        ПРОГРАММА ЛОЯЛЬНОСТИ ДЛЯ ПАЦИЕНТОВ
                    </h3>

                    <p className={styles.desc}>
                        Вам нас рекомендовали, но Вы все еще не решились начать стоматологическое лечение? Сейчас самое время!
                    </p>

                    <p className={styles.info_text}>
                        Получите ПОСТОЯННУЮ СЕМЕЙНУЮ СКИДКУ <br /> 10% на лечение, написав нам
                    </p>

                    <button>
                        Получить скидку
                    </button>

                    <Image 
                        width={400} 
                        height={300} 
                        objectFit='contain'
                        src={persent_img} 
                        alt='%' 
                        className={styles.pattern} 
                    />
                </div>

                <div className={styles.info_img}>
                    <Image src={bg} alt='bg' className={styles.img} />
                </div>
            </div>
        </div>
    </section>
)
}

export default Loyalnost;