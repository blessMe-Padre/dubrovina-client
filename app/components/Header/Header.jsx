'use client';
import { useState } from "react";
import Image from 'next/image';

import { VdsPanel, VdsButton } from './../index';

import styles from './style.module.css';
export default function Header() {

    const [panel, setPanel] = useState(false);
    const [panelBtn, setPanelBtn] = useState(true);

    return (
        <div className={styles.header}>

            {panel && <VdsPanel setPanel={setPanel} setPanelBtn={setPanelBtn} />}

            <div className='container'>
                <div className={styles.header_wrapper}>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width={357}
                        height={47}
                        className="dsv-image"
                    />

                    {panelBtn && <VdsButton
                        setPanel={setPanel}
                        setPanelBtn={setPanelBtn}
                    />}

                </div>
            </div>
        </div>
    )
}
