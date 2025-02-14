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
                { text: "Диагностикаке", href: "/" },
                { text: "Лечение зубов", href: "/" },
                { text: "Гигиена", href: "/" },
                { text: "Отбеливание зубов", href: "/" },
                { text: "Лечение десен", href: "/" },
                { text: "Зубосохраняющие операции", href: "/" },
                { text: "Виниры", href: "/" },
                { text: "Имплантация зубов", href: "/" },
                { text: "Удаление зубов", href: "/" },
                { text: "Протезирование", href: "/" },
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
                        <Image src={Logo} alt='' className={`${styles.logo_footer} dsv-image`} />
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
                        2024 © ООО "КОМФОРТО" стоматологическая клиника <br /> доктора Дубровиной. Все права защищены
                    </div>

                    <div>
                        <a href='/policy'>Политика <br />конфиденциальности</a>
                    </div>

                    <div>
                        Разработка сайта <br /> INSIDE360
                    </div>
                </div>
            </div>
        </section>
    )
}
