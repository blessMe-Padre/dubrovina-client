'use client';

import { useState } from "react";
import Image from 'next/image';

import Link from "next/link";

import { VdsPanel, VdsButton, Button, Popup, MenuButton } from '../../components';

import styles from './style.module.css';
export default function Header() {

    const [panel, setPanel] = useState(false);
    const [panelBtn, setPanelBtn] = useState(true);

    const [popupActive, setPopupActive] = useState(false);
    const [opened, setOpened] = useState(false);

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
            { text: "О клинике", href: "/" },
            { text: "Цены", href: "/" },
            { text: "Команда", href: "/" },
            { text: "Работы", href: "/" },
            { text: "Блог", href: "/" },
            { text: "Для пациентов", href: "/" },
            { text: "Для врачей", href: "/" },
            { text: "Контакты", href: "/" },
            { text: "Документы", href: "/" },
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
                    name: "Регистратура: ",
                    contact: "8 (924) 255-51-51",
                    contact_bot: "tel:+79242555151",
                },
                {
                    name: "Директор: ",
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
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
        },

        {
            heading: 'Услуги',
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
        },
          
        {
            heading: 'Цены',
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
        },

        {
            heading: 'Команда',
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
        },

        {
            heading: 'Работы',
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
        },

        {
            heading: 'Блог',
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
        },

        {
            heading: 'Для пациентов',
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
        },

        {
            heading: 'Для врачей',
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
        },

        {
            heading: 'Контакты',
            url: '/',
            sub_menu: [
                {
                    name: 'test',
                    link: '/'
                }
            ] 
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
                        return (
                            <li className={styles.item}>
                                <Link key={idx} href={item.url}>
                                    <p className={styles.link}>{item.heading}</p>
                                </Link>
                            </li>
                        )
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
                            <ul key={sectionIndex}>
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
