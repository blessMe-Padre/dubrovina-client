import React from 'react';
import styles from './style.module.css';

import Image from 'next/image';

const Map = () => {

  const data = [
    {
        icon: './icons/phone.svg',
        name: 'Регистратура',
        desc: '8 (924) 255-51-51',
        desc_bot: 'tel:+79242555151'
    },

    {
        icon: './icons/email.svg',
        name: 'Директор',
        desc: 'Связаться <br /> с руководителем',
        desc_bot: 'mailto:'
    },

    {
        icon: './icons/email.svg',
        name: 'Электронная почта',
        desc: 'Dubrovinaaa<br/>@yandex.ru',
        desc_bot: 'mailto:dubrovinaaa@yandex.ru'
    },

    {
        icon: './icons/geo.svg',
        name: 'Адрес',
        desc: 'Находкинский проспект, <br /> 60, 3 этаж',
        desc_bot: 'https://yandex.ru/maps/974/nahodka/house/nakhodkinskiy_prospekt_60/ZUoEaA9nSkUFXUJuYWJ2eHtlYww=/?indoorLevel=1&ll=132.873020%2C42.797674&mode=search&sctx=ZAAAAAgAEAAaKAoSCSeDo%2BRVfGBAEV3BNuLJjkVAEhIJfEYiNIKNvz8RLPUsCOV9rD8iBgABAgMEBSgKOABAS0gBagJydZ0BzczMPaABAKgBAL0ByKy2BMIBAQCCAjnQndCw0YXQvtC00LrQuNC90YHQutC40Lkg0L%2FRgNC%2B0YHQv9C10LrRgiwgNjAsIDMg0Y3RgtCw0LaKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=132.873020%2C42.797674&sspn=0.013320%2C0.006045&text=%D0%9D%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%2060%2C%203%20%D1%8D%D1%82%D0%B0%D0%B6&z=17.21'
    },

    {
        icon: './icons/clock.svg',
        name: 'Режим работы',
        desc: 'Пн-Пт с 09:00 до 19:00',
    }

  ]

  return (
    <section className='section relative'>
            <div className={styles.map_wrapper}>
                <div style={{position: 'relative', overflow:'hidden', bottom: '-6px'}}><a href="https://yandex.ru/maps/org/stomatologicheskaya_klinika_doktora_dubrovinoy/156649569004/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'0p'}}>Стоматологическая клиника доктора Дубровиной</a><a href="https://yandex.ru/maps/974/nahodka/category/dental_clinic/184106132/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>Стоматологическая клиника в Находке</a><iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=132.873020%2C42.797674&mode=search&oid=156649569004&ol=biz&sctx=ZAAAAAgAEAAaKAoSCSeDo%2BRVfGBAEV3BNuLJjkVAEhIJfEYiNIKNvz8RLPUsCOV9rD8iBgABAgMEBSgKOABAS0gBagJydZ0BzczMPaABAKgBAL0ByKy2BMIBAQCCAjnQndCw0YXQvtC00LrQuNC90YHQutC40Lkg0L%2FRgNC%2B0YHQv9C10LrRgiwgNjAsIDMg0Y3RgtCw0LaKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=132.873020%2C42.797674&sspn=0.013320%2C0.006045&text=%D0%9D%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%2060%2C%203%20%D1%8D%D1%82%D0%B0%D0%B6&z=17.08" width="1920" height="840" style={{position: 'relative'}}></iframe></div>
                <div className="container">
                    <div className={styles.map_info}>
                        {data.map((item, idx) => {
                            return (
                                <li className={styles.map_info_item} key={idx}>
                                    <div className={styles.icons_wrapper}>
                                        <Image 
                                            src={item.icon} 
                                            alt='icon' 
                                            className={styles.icon} 
                                            width={30}
                                            height={30}
                                        />

                                        <p className={styles.name}>
                                            {item.name}
                                        </p>
                                    </div>

                                    <p className={styles.desc}>
                                        {item.desc ? (
                                            <a href={item.desc_bot} dangerouslySetInnerHTML={{ __html: item.desc}}></a>
                                        ) 
                                    : (
                                        <p className={styles.desc}>{item.desc}</p>
                                    )}
                                    </p>
                                </li>
                            )
                        })}
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Map;