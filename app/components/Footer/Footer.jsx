import styles from './style.module.css';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/logo_footer.svg';
export default function Footer() {


    const navigationData = [
        {
            heading: "ДЛЯ ВАС",
            links: [
                { text: "О клинике", href: "/about_clinic" },
                { text: "Цены", href: "/price" },
                { text: "Команда", href: "/specialists" },
                { text: "Работы", href: "/our-works" },
                { text: "Блог", href: "/blog" },
                { text: "Для пациентов", href: "/for-patients" },
                { text: "Для врачей", href: "/for-doctors" },
                { text: "Контакты", href: "/contacts" },
                { text: "Документы", href: "/documents" },
            ],
        },

        {
            heading: "УСЛУГИ",
            links: [
                { text: "Диагностикаке", href: "/specialization/diagnostika" },
                { text: "Лечение зубов", href: "/specialization/lecheniye_zubov" },
                { text: "Гигиена", href: "/specialization/gigiyena" },
                { text: "Отбеливание зубов", href: "/specialization/otbelivaniye_zubov" },
                { text: "Лечение десен", href: "/specialization/lecheniye_desen" },
                { text: "Зубосохраняющие операции", href: "/specialization/zubosokhranyayushchiye_operatsii" },
                { text: "Виниры", href: "/specialization/viniry" },
                { text: "Имплантация зубов", href: "/specialization/implantatsiya" },
                { text: "Удаление зубов", href: "/specialization/udaleniye_zubov" },
                { text: "Протезирование", href: "/specialization/protezirovaniye" },
            ],
        },

    ];

    const contacts_data = [
        {
            heading: "КОНТАКТЫ",
            contacts: [
                {
                    name: "Регистратура:",
                    contact: "8 (924) 255-51-51",
                    contact_bot: "tel:+79242555151",
                },
                {
                    name: "Директор:",
                    contact: "dubrovinaaa@mail.ru",
                    contact_bot: "mailto:dubrovinaaa@mail.ru",
                },
                {
                    name: "Электронная почта: ",
                    contact: "Dubrovinaaa@yandex.ru",
                    contact_bot: "mailto:Dubrovinaaa@yandex.ru",
                },
                {
                    name: "Режим работы: ",
                    desc: 'Пн-Пт с 09:00 до 19:00'
                },
                {
                    name: "Адрес: ",
                    desc: 'Находкинский проспект, 60, 3 этаж'
                },
            ]

        },
    ]

    return (
        <section className={styles.footer}>
            <div className='container'>
                <div className={styles.nav_footer_wrapper}>
                    <div>
                        <Image src={Logo} alt='image' className={`${styles.logo_footer} dsv-image`} />
                    </div>

                    <div className={styles.nav_footer}>
                        {
                            navigationData.map((section, sectionIndex) => (
                                <ul className={styles.list_link} key={sectionIndex}>
                                    <p className={styles.nav_footer_heading}>{section.heading}</p>
                                    {section.links &&
                                        section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link
                                                    className={styles.link}
                                                    href={link.href}
                                                >
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            ))
                        }

                        {contacts_data &&
                            contacts_data.map((section, sectionIndex) => (
                                <ul className={styles.list_contacts} key={sectionIndex}>
                                    <p className={styles.nav_footer_heading}>{section.heading}</p>
                                    {section.contacts.map((contactItem, contactIndex) => (
                                        <li key={contactIndex}>
                                            <p className={styles.contact_name}>{contactItem.name}</p>
                                            {contactItem.contact && (
                                                <a
                                                    className={styles.contact_desc}
                                                    href={contactItem.contact_bot}
                                                >
                                                    {contactItem.contact}
                                                </a>
                                            )}
                                            {contactItem.desc && (
                                                <p className={styles.contact_desc}>{contactItem.desc}</p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                    </div>
                </div>

                <div className={styles.info_footer}>
                    <div>
                        {new Date().getFullYear()} &copy;  ООО "КОМФОРТО" стоматологическая клиника <br /> доктора Дубровиной. Все права защищены
                    </div>

                    <div>
                        <Link href='/policy'>Политика <br />конфиденциальности</Link>
                    </div>

                    <div>
                        <Link href='https://www.inside360.ru/'>Разработка сайта <br /> INSIDE360</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
