'use client';

import { useState, useRef } from "react";
import Image from 'next/image';

import Link from "next/link";

import { VdsPanel, VdsButton, Button, Popup, MenuButton } from '../../components';

import styles from './style.module.css';
export default function Header() {

    const [panel, setPanel] = useState(false);
    const [panelBtn, setPanelBtn] = useState(true);

    const [popupActive, setPopupActive] = useState(false);
    const [opened, setOpened] = useState(false);

    const [menuSubMenuOpen, setMenuSubMenuOpen] = useState(null);
    const menuRef = useRef(null);

    const subMenuRef = useRef(null);

    const handleMouseEnter = (idx) => {
        if (main_links[idx].sub_menu) {
            setMenuSubMenuOpen(idx);
        }
    };

    const handleMouseLeave = (event, idx) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.relatedTarget) &&
            subMenuRef.current &&
            !subMenuRef.current.contains(event.relatedTarget)
        ) {
            setMenuSubMenuOpen(null);
        }
    };

    const handleClick = () => {
        setPopupActive(true);
    }

    const handleOpenedClick = () => {
        setOpened(!opened);
        document.body.classList.toggle('blur');
        document.body.classList.toggle('lock');
    }

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
                { text: "Диагностика", href: "/specialization/diagnostika" },
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

    const main_links = [
        {
            heading: 'О клинике',
            url: '/about_clinic'
        },

        {
            heading: 'Услуги',
            url: '/services',
            sub_menu: [
                {
                    name: 'Диагностика',
                    link: '/specialization/diagnostika'
                },
                {
                    name: 'Лечение зубов',
                    link: '/specialization/lecheniye_zubov'
                },
                {
                    name: 'Гигиена',
                    link: '/specialization/gigiyena'
                },
                {
                    name: 'Отбеливание зубов',
                    link: '/specialization/otbelivaniye_zubov'
                },
                {
                    name: 'Лечение десен',
                    link: '/specialization/lecheniye_desen'
                },
                {
                    name: 'Зубосохраняющие  операции',
                    link: '/specialization/zubosokhranyayushchiye_operatsii'
                },
                {
                    name: 'Виниры',
                    link: '/specialization/viniry'
                },
                {
                    name: 'Имплантация зубов',
                    link: '/specialization/implantatsiya'
                },
                {
                    name: 'Удаление зубов',
                    link: '/specialization/udaleniye_zubov'
                },
                {
                    name: 'Протезирование',
                    link: '/specialization/protezirovaniye'
                },
            ]
        },

        {
            heading: 'Цены',
            url: '/price',
        },

        {
            heading: 'Команда',
            url: '/specialists',
        },

        {
            heading: 'Работы',
            url: '/our-works',
        },

        {
            heading: 'Блог',
            url: '/blog',
        },

        {
            heading: 'Для пациентов',
            url: '/for-patients',
        },

        {
            heading: 'Для врачей',
            url: '/for-doctors',
        },

        {
            heading: 'Контакты',
            url: '/contacts',
        },


    ]

    return (
        <div className={styles.header}>

            {panel && <VdsPanel setPanel={setPanel} setPanelBtn={setPanelBtn} />}

            <div className='container'>
                <div className={styles.header_wrapper}>
                    <div className={styles.logo_wrapper}>
                        <div className={styles.mobile_btn_wrapper}>
                            <MenuButton
                                onClick={handleOpenedClick}
                                opened={opened}
                            />
                        </div>
                        <Link href="/">
                            <Image
                                src='/logo.svg'
                                alt='logo'
                                width={350}
                                height={47}
                                className={`${styles.logo} dsv-image`}
                            />
                        </Link>
                    </div>

                    <div className={styles.header_info}>
                        <address>
                            г. Находка, Находкинский проспект, 60, 3 этаж
                        </address>

                        <a className={styles.phone} href="tel:+79242555151">+7 (924) 255-51-51</a>

                        <div className={styles.popup_btn_header}>

                            <Button
                                handleClick={handleClick}
                                href="#popup"
                                color='black'
                                text="Записаться"
                            />

                        </div>

                        {panelBtn && <VdsButton
                            setPanel={setPanel}
                            setPanelBtn={setPanelBtn}
                        />}
                    </div>
                </div>


                <Popup active={popupActive} setActive={setPopupActive} />

                <ul className={styles.main_menu_links}>
                    {main_links.map((item, idx) => {
                        const isActive = menuSubMenuOpen === idx;
                        return (
                            <li
                                ref={menuRef}
                                key={idx}
                                className={`${styles.main_menu_link} ${isActive ? styles.active : ''}`}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onMouseLeave={() => handleMouseLeave(idx)}
                            >
                                <Link href={item.url} className={styles.link}>
                                    {item.heading}
                                </Link>

                                {item.sub_menu && isActive && (
                                    <ul
                                        ref={subMenuRef}
                                        className={`${styles.sub_menu} ${styles.active}`}
                                        onMouseLeave={() => handleMouseLeave(idx)}
                                    >
                                        {item.sub_menu.map((subItem, subItemIndex) => (
                                            <li key={subItemIndex} className={styles.sub_menu_link}>
                                                <Link href={subItem.link}>{subItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* мобильное меню */}
            <div className={`${styles.mobile_menu} ${opened ? styles.open : ''}`}>

                <nav className={styles.nav_mobile}>
                    {
                        navigationData.map((section, sectionIndex) => (
                            <ul key={sectionIndex}>
                                <p className={styles.nav_mobile_heading}>{section.heading}</p>
                                {section.links &&
                                    section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                onClick={handleOpenedClick}
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
                            <ul onMouseMove={() => alert('Мышка тут')} key={sectionIndex}>
                                <p>{section.heading}</p>
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
                </nav>

                <div className={styles.header_button_wrapper}>
                    <Button
                        handleClick={handleClick}
                        href="#popup"
                        text="Записаться"
                    />
                </div>

            </div>
        </div>
    )
}
